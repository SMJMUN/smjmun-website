import * as fs from "fs";
import * as path from "path";
import { QueryNormalizer } from "../../lib/chatbot/v2/pipeline/normalizer";
import { FastMatcher } from "../../lib/chatbot/v2/pipeline/fast-matcher";
import { UnderstandingLayer } from "../../lib/chatbot/v2/pipeline/understanding";

async function runEval() {
  const datasets = ["full-eval.json"];
  let passed = 0;
  let total = 0;

  for (const file of datasets) {
    const filePath = path.join(__dirname, file);
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    
    console.log(`\nEvaluating Dataset: ${file}`);
    console.log(`========================================`);

    for (const testCase of data) {
      total++;
      const { query, expected } = testCase;
      
      const normalized = QueryNormalizer.normalize(query);
      let parsed = FastMatcher.match(query, normalized);
      let usingFastMatch = true;

      if (!parsed) {
        usingFastMatch = false;
        parsed = await UnderstandingLayer.understand(query, normalized);
      }

      // Check intent and action
      const intentPass = parsed.intent === expected.intent;
      const actionPass = !expected.action || parsed.action === expected.action;
      
      if (intentPass && actionPass) {
        passed++;
        console.log(`✅ PASS: "${query}" -> Intent: ${parsed.intent} | Action: ${parsed.action}`);
      } else {
        console.log(`❌ FAIL: "${query}"`);
        if (!intentPass) console.log(`   Intent mismatch -> Expected: ${expected.intent}, Got: ${parsed.intent}`);
        if (!actionPass) console.log(`   Action mismatch -> Expected: ${expected.action}, Got: ${parsed.action}`);
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`Final Score: ${passed}/${total} (${Math.round((passed/total)*100)}%)`);
}

runEval().catch(console.error);
