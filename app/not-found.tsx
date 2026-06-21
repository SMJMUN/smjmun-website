import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          404
        </h1>

        <p className="mt-4 text-white/70">
          This page either doesn't exist or is
          currently under maintenance.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-[#bb8b57] px-6 py-3 rounded"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}