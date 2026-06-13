import { sendEmail } from './send-email';
import { registrationTemplate } from './templates/registration-template';

export async function sendRegistrationEmail({
  to,
  studentName,
  conferenceTitle,
  venue,
  date,
  registrationId,
}: {
  to: string;
  studentName: string;
  conferenceTitle: string;
  venue: string;
  date: string;
  registrationId: string;
}) {
  const html = registrationTemplate({
    studentName,
    conferenceTitle,
    venue,
    date,
    registrationId,
  });

  return sendEmail({
    to,
    subject: 'Registration Confirmed — SMJ MUN',
    html,
    type: 'REGISTRATION_CONFIRMATION',
  });
}
