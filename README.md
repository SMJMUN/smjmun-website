# SMJMUN Platform - Developer Onboarding Guide

Welcome to the SMJMUN Platform! This document serves as the primary onboarding guide for new developers joining the team. It covers everything from local setup to the core architecture and schemas you need to understand to start contributing.

---

## 🚀 Getting Started (Local Development)

To run the project locally, follow these steps:

### 1. Prerequisites
- **Node.js** (v18+)
- **PostgreSQL** (or a Neon database instance)
- **Sanity CMS** account/project access

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory. Ask the team lead for the exact values, but the structure should be:
```env
# Database (PostgreSQL / Neon)
DATABASE_URL=your_postgres_url

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
SANITY_API_TOKEN=your_sanity_token

# Resend Email
RESEND_API_KEY=your_resend_key
EMAIL_FROM=onboarding@resend.dev
EMAIL_REPLY_TO=contact@yourdomain.com
EMAIL_MODE=test # Set to test for local development

# HDFC Payments
HDFC_MERCHANT_ID=
HDFC_KEY_UUID=
HDFC_PAYMENT_PAGE_CLIENT_ID=
HDFC_BASE_URL=https://smartgateway.hdfcbank.com
APP_URL=http://localhost:3000
```

### 4. Database Setup
Generate the Prisma client and push the schema to your local/dev database:
```bash
npm run db:generate
npm run db:push
```

*(Note: Use `npm run db:studio` to open a local UI to view your database records)*

### 5. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.
You can access the embedded Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS v4, Framer Motion
- **Database**: PostgreSQL (hosted on Neon)
- **ORM**: Prisma v7.8
- **CMS**: Sanity v3 (Embedded Studio)
- **Payments**: HDFC SmartGateway / Juspay SDK
- **Email Automation**: Resend

---

## 📂 Project Structure

A quick guide to navigating the codebase:

- `/app`: Contains all Next.js App Router routes (`/conferences`, `/register`, `/blogs`, etc.). Also houses the `/api` endpoints and `/(studio)` embedded CMS routes.
- `/components`: Reusable UI components (buttons, forms, layouts).
- `/lib`: Core backend logic. This is where the heavy lifting happens: HDFC payment integrations, Resend email logic, Prisma client initialization, and OTP verification logic.
- `/prisma`: Contains `schema.prisma` which defines our PostgreSQL database structure.
- `/sanity`: Configuration and schema definitions for Sanity CMS.

---

## 🗄️ Database Schemas (Prisma)

Our PostgreSQL database is managed via Prisma. Here are the core models every developer should know when working on the backend:

### 1. Registration (`Registration`)
The core model tracking a user's conference registration.
- **Key Fields**: `email`, `firstName`, `lastName`, `conferenceId`, `conferenceFee`
- **Status Enum**: `PENDING_OTP`, `PENDING_PAYMENT`, `PAID`, `PAYMENT_FAILED`, `CANCELLED`
- **Payment Fields**: `hdfcOrderId`, `paymentId` (Updated securely by the backend, never trust frontend status)
- **Constraint**: Unique on `[email, conferenceId]` so users can't register twice for the same event.

### 2. Registration Draft (`RegistrationDraft`)
Temporary storage for users who have submitted the form but haven't verified their email yet. Deleted once the OTP is verified.

### 3. OTP Verification (`OtpVerification`)
Handles email verification during the registration process.
- **Key Fields**: `email`, `otpHash` (SHA-256), `expiresAt`, `attempts`
- **Security**: Raw OTPs are **never** stored in the database. We only store the hash.

### 4. Forms & Inquiries
We have several models for handling user submissions:
- `ContactInquiry`: General contact form submissions (`NEW`, `CONTACTED`, `CLOSED`).
- `PartnershipInquiry`: Institutional partnership requests.
- `VolunteerApplication` & `ExecutiveBoardApplication`: Recruitment forms.
- `NewsletterSubscriber`: Newsletter signups tracking the `source` (Footer, Blog, Popup, etc).

---

## 🗃️ CMS Structure (Sanity)

Sanity manages all dynamic content on the platform.

- **Conferences**: Stores dates, venues, capacity, committees, fees, and the conference agenda. 
- **Blogs**: Portable Text content for news and strategies.
- **Media & Gallery**: Image assets and external press links.

---

## 🔄 Core Architecture Flows

### 1. The Registration & OTP Flow
1. User submits registration at `/register/[slug]`.
2. Data saved temporarily to `RegistrationDraft`.
3. 6-digit OTP generated, hashed via SHA-256, saved to `OtpVerification`, and emailed to the user via Resend.
4. User enters OTP. System validates hash and expiration limits.
5. If valid, data moves from `RegistrationDraft` to the main `Registration` table with status `PENDING_PAYMENT`.

### 2. The Payment Flow (HDFC)
1. User with `PENDING_PAYMENT` initiates checkout.
2. Backend (`/lib/hdfc`) generates an HDFC Order ID and redirects the user to HDFC SmartGateway.
3. User completes payment.
4. User returns to platform. *Crucially, the frontend **does not** mark the user as paid.*
5. Backend verifies the order status securely with the HDFC API. If the status is `CHARGED`, the Registration status updates to `PAID`.
6. Automated confirmation email sent via Resend.

---

This guide should give you the high-level understanding needed to start contributing. Welcome to the team!
