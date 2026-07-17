import { EntityResolver } from "../lib/chatbot/v2/core/entity-resolver";

const candidates = [
  {
    _id: "1",
    title: "SMJMUN Indore 2027",
    city: "Indore",
    venue: "IPS Academy",
    slug: { current: "smjmun-indore" },
    committees: [{ name: "UNSC" }, { name: "UNGA" }]
  },
  {
    _id: "2",
    title: "SMJMUN New Delhi 2027",
    city: "New Delhi",
    venue: "Dr. Ambedkar International Centre",
    slug: { current: "smjmun-delhi" },
    committees: [{ name: "UNHRC" }, { name: "AIPPM" }]
  }
];

const queries = [
  "ips conference",
  "ips mun",
  "indore one",
  "delhi one",
  "ambedkar conference"
];

for (const query of queries) {
  const result = EntityResolver.resolve({
    query,
    candidates,
    keys: [
      { path: "title", weight: 10 },
      { path: "city", weight: 8 },
      { path: "venue", weight: 8 },
      { path: "slug", weight: 5 },
      { path: "committees", weight: 4 }
    ]
  });
  console.log(`Query: "${query}"`);
  console.log(`  -> Match: ${result.entity?.title} (Confidence: ${result.confidence})`);
  console.log(`  -> Matched On: ${result.matchedOn} (${result.matchedValue})`);
  console.log(`  -> Score Breakdown:`, result.scoreBreakdown);
  console.log("---------------------------------------------------");
}
