import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve(process.cwd(), '.env.local') });

import { sendEmail } from './lib/email/send-email';

async function test() {
  try {
    const result = await sendEmail({
      to: 'test@example.com',
      subject: 'Test Email',
      html: '<p>Test</p>',
      type: 'TEST'
    });
    console.log('Result:', result);
  } catch (err) {
    console.error('Uncaught error:', err);
  }
}

test();
