import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { revalidatePath } from "next/cache";

// Initialize a Sanity client with write permissions
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function GET(req: Request) {
  try {
    // 1. Verify Vercel Cron authentication (Optional if using Vercel Secure Cron, but recommended)
    const authHeader = req.headers.get("authorization");
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json({ message: "Missing SANITY_API_WRITE_TOKEN" }, { status: 500 });
    }

    // 2. Fetch the oldest queued blog
    const query = `*[_type == "blog" && isQueuedForAutoPublish == true] | order(_createdAt asc)[0] { _id }`;
    const queuedBlog = await writeClient.fetch(query);

    if (!queuedBlog) {
      return NextResponse.json({ message: "No queued blogs found" }, { status: 200 });
    }

    // 3. Update the blog document
    const now = new Date().toISOString();
    await writeClient
      .patch(queuedBlog._id)
      .set({
        isQueuedForAutoPublish: false,
        publishedAt: now,
      })
      .commit();

    // 4. Revalidate frontend paths
    revalidatePath("/blogs");
    revalidatePath("/");

    return NextResponse.json({
      message: "Successfully auto-published blog",
      blogId: queuedBlog._id,
      publishedAt: now,
    });
  } catch (error: any) {
    console.error("Auto-publish cron error:", error);
    return NextResponse.json(
      { message: "Error auto-publishing blog", error: error.message },
      { status: 500 }
    );
  }
}
