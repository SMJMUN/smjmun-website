import { V2Engine } from "../../lib/chatbot/v2/engine";
import { v4 as uuidv4 } from "uuid";

async function testMultiTurn() {
  const sessionId = uuidv4();
  
  console.log("Turn 1: How can I participate in SMJMUN?");
  let response = await V2Engine.process("How can I participate in SMJMUN?", sessionId);
  console.log("Response metadata:", response.metadata);
  
  console.log("\nTurn 2: Where is the venue?");
  response = await V2Engine.process("Where is the venue?", sessionId);
  console.log("Response metadata:", response.metadata);
  console.log("Final response:", response.text);
  
  // We can inspect the private mockMemory by doing a hack or just verifying the response
  // If the memory works, the response text shouldn't be "I'm not sure how to answer that yet."
  // and the service should be "conference".
  if (response.text.includes("not sure") || response.metadata.service !== "conference") {
    console.error("❌ FAIL: Multi-turn memory did not retain the conference entity.");
    process.exit(1);
  } else {
    console.log("✅ PASS: Multi-turn memory successfully retained the conference entity and resolved the field.");
  }
}

testMultiTurn().catch(console.error);
