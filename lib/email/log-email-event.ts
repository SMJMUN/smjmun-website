export function logEmailEvent(params: {
  type: string;
  to: string;
  subject: string;
  success: boolean;
  error?: string;
}) {
  const timestamp = new Date().toISOString();
  if (params.success) {
    console.log(`[EMAIL EVENT] [${timestamp}] Type: ${params.type} | To: ${params.to} | Subject: ${params.subject} | Status: SUCCESS`);
  } else {
    console.error(`[EMAIL EVENT] [${timestamp}] Type: ${params.type} | To: ${params.to} | Subject: ${params.subject} | Status: FAILED | Error: ${params.error}`);
  }
}
