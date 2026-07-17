import * as fs from "fs";
import * as path from "path";

function generateLevel1() {
  const data: any[] = [];
  
  // 1. Fast Matcher cases
  const greetings = ["hi", "hello", "hey", "greetings", "thanks", "thank you", "bye", "goodbye"];
  for (const g of greetings) {
    data.push({ query: g, expected: { intent: "GREETING", action: "GET" } });
  }

  // 2. Exact Commands
  data.push({ query: "faq", expected: { intent: "FAQ", action: "GET" } });
  data.push({ query: "help", expected: { intent: "FAQ", action: "GET" } });
  data.push({ query: "contact", expected: { intent: "CONTACT", action: "GET" } });
  data.push({ query: "support", expected: { intent: "CONTACT", action: "GET" } });

  // 3. Semantic Mapper cases
  const fees = ["price", "cost", "fee", "fees", "delegate fee", "charges", "registration fee", "amount", "payment"];
  for (const fee of fees) {
    data.push({ query: fee, expected: { intent: "CONFERENCE", action: "GET" } });
  }
  
  const venues = ["venue", "location", "place", "where"];
  for (const v of venues) {
    data.push({ query: v, expected: { intent: "CONFERENCE", action: "GET" } });
  }

  const deadlines = ["deadline", "last date", "closing date", "due date"];
  for (const d of deadlines) {
    data.push({ query: d, expected: { intent: "CONFERENCE", action: "GET" } });
  }
  
  const schedule = ["schedule", "itinerary", "timetable", "dates", "when"];
  for (const s of schedule) {
    data.push({ query: s, expected: { intent: "CONFERENCE", action: "GET" } });
  }

  fs.writeFileSync(path.join(__dirname, "level1-deterministic.json"), JSON.stringify(data, null, 2));
  console.log(`Generated level1-deterministic.json with ${data.length} cases.`);
}

function generateLevel2() {
  const data: any[] = [
    { query: "confrecw", expected: { intent: "CONFERENCE", action: "GET" } },
    { query: "what is the refund policy?", expected: { intent: "FAQ", action: "GET" } },
    { query: "tell me about the training cell program", expected: { intent: "PROGRAM", action: "GET" } },
    { query: "what is smjmun?", expected: { intent: "ORGANIZATION", action: "GET" } },
    { query: "all upcoming conferences", expected: { intent: "CONFERENCE", action: "LIST" } },
    { query: "where is the next event?", expected: { intent: "CONFERENCE", action: "GET" } },
    { query: "Compare Delhi and Indore", expected: { intent: "CONFERENCE", action: "COMPARE" } },
    { query: "I want to complain", expected: { intent: "CONTACT", action: "GET" } },
    { query: "Who started this?", expected: { intent: "ORGANIZATION", action: "GET" } }
  ];

  fs.writeFileSync(path.join(__dirname, "level2-understanding.json"), JSON.stringify(data, null, 2));
  console.log(`Generated level2-understanding.json with ${data.length} cases.`);
}

function generateLevel3() {
  const data: any[] = [
    {
      scenario: "Conference follow-ups",
      turns: [
        {
          query: "Tell me about SMJMUN 2026",
          expected: { intent: "CONFERENCE", action: "GET" },
          expectedState: { currentEntity: "SMJMUN 2026", currentTopic: "CONFERENCE" }
        },
        {
          query: "price",
          expected: { intent: "CONFERENCE", action: "GET", field: "registrationFee" },
          expectedState: { currentEntity: "SMJMUN 2026", currentTopic: "CONFERENCE" }
        },
        {
          query: "venue",
          expected: { intent: "CONFERENCE", action: "GET", field: "venue" },
          expectedState: { currentEntity: "SMJMUN 2026", currentTopic: "CONFERENCE" }
        }
      ]
    },
    {
      scenario: "Comparisons",
      turns: [
        {
          query: "Compare Delhi and Indore",
          expected: { intent: "CONFERENCE", action: "COMPARE" },
          expectedState: { currentTopic: "CONFERENCE" }
        }
      ]
    }
  ];

  fs.writeFileSync(path.join(__dirname, "level3-conversations.json"), JSON.stringify(data, null, 2));
  console.log(`Generated level3-conversations.json with ${data.length} scenarios.`);
}

generateLevel1();
generateLevel2();
generateLevel3();
