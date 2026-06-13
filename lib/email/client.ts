import { Resend } from 'resend';

// Initialize Resend
// In test mode, this key might be a placeholder.
const apiKey = process.env.RESEND_API_KEY || 're_placeholder';
export const resend = new Resend(apiKey);
