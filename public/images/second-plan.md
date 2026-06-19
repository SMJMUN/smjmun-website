# SMJ MUN - Production Implementation Brief

You are a Staff Software Engineer and Technical Architect.

The project already has a premium frontend built using:

* Next.js 16 App Router
* TypeScript
* Tailwind CSS v4
* Framer Motion

The landing page, design system, branding, typography, animations and UI are already complete.

Your responsibility is NOT to redesign the frontend.

Your responsibility is to implement the production backend architecture and CMS layer.

---

## Project Goal

Build a production-ready platform for SMJ MUN (Shri Seth Mangilalji Sahu International Model United Nations).

The platform must allow:

* Conference Management
* Dynamic Conference Pages
* Student Registration
* OTP Verification
* HDFC Payment Collection
* Email Automation
* CMS Driven Content Management

The system should be maintainable by non-technical administrators.

---

## Tech Stack

Frontend:

* Next.js 16
* TypeScript
* Tailwind CSS v4

CMS:

* Sanity CMS

Database:

* PostgreSQL (Neon)

ORM:

* Prisma

Email:

* Resend

Payments:

* HDFC SmartGateway

Hosting:

* Vercel

---

## Do Not Build

Do NOT build:

* Authentication
* User Accounts
* Student Dashboard
* Member Portal
* LMS
* Certificate Verification
* Role Management
* AI Features
* Multi-language Support

These are future phases.

---

## Required CMS Schemas

1. Homepage
2. Conference
3. Blog
4. Gallery
5. Testimonial
6. Media / Press

---

## Conference Schema

Must include:

* Title
* Slug
* Hero Image
* Overview
* Venue
* Date
* Registration Fee
* Capacity
* Registration Open
* Registration Close Date
* Status
* Committees
* Agenda
* Gallery

Status:

* Draft
* Upcoming
* Live
* Completed

---

## Dynamic Routes

/conferences

/conferences/[slug]

/blog

/blog/[slug]

/media

/gallery

---

## Registration Architecture

Student Opens Conference
↓
Fill Registration Form
↓
Check Email + Conference Unique
↓
Send OTP
↓
Verify OTP
↓
Create Registration (PENDING_PAYMENT)
↓
Create HDFC Order
↓
Redirect To HDFC
↓
Verify Payment From Backend
↓
Update Registration = PAID
↓
Send Confirmation Email

---

## Database Models

Registration

PartnershipInquiry

ContactInquiry

VolunteerApplication

ExecutiveBoardApplication

OtpVerification

Registration must enforce:

(email + conferenceId)

as a unique constraint.

---

## HDFC Requirements

Never trust frontend payment success.

Always verify payment from backend.

Only mark registration as PAID after successful verification.

Create integration scaffolding even if merchant credentials are unavailable.

---

## Email Requirements

Use Resend.

Create templates for:

* OTP Verification
* Registration Confirmation
* Partnership Inquiry Confirmation
* Contact Confirmation

---

## Development Approach

Work in phases.

Phase 1:
Sanity CMS Setup

Phase 2:
Dynamic Content Pages

Phase 3:
PostgreSQL + Prisma

Phase 4:
Registration System

Phase 5:
OTP Verification

Phase 6:
HDFC Integration

Phase 7:
Email Automation

Phase 8:
Deployment

---

Before writing any code:

1. Review project structure.
2. Explain architecture.
3. List files to be created.
4. List files to be modified.
5. Wait for approval.

After approval, implement one phase at a time.

All code must be production-ready.

# HDFC SmartGateway Integration Requirements (Critical)

Implement HDFC SmartGateway exactly according to HDFC/Juspay documentation.

Do NOT trust frontend payment success.

Do NOT update registration status from frontend callbacks.

The payment architecture must follow:

Student Registration
↓
OTP Verification
↓
Create Registration Record
status = PENDING_PAYMENT
↓
Backend Creates HDFC Order Session
↓
Store HDFC Order ID in database
↓
Frontend Opens HDFC Payment Page
↓
User Completes Payment
↓
HDFC Redirects User Back
↓
Backend Calls HDFC Order Status API
↓
Verify:

* Order ID matches database record
* Registration exists
* Amount matches conference fee
* HDFC status = CHARGED

Only after all validations succeed:

Registration.status = PAID

Then:

* Send Confirmation Email
* Show Success Page

If status is:

PENDING
PENDING_VBV
AUTHORIZATION_FAILED
AUTHENTICATION_FAILED

Do NOT mark registration as PAID.

Use the official HDFC/Juspay Node SDK integration pattern.

Environment Variables:

HDFC_MERCHANT_ID
HDFC_KEY_UUID
HDFC_PAYMENT_PAGE_CLIENT_ID
HDFC_PUBLIC_KEY_PATH
HDFC_PRIVATE_KEY_PATH
HDFC_BASE_URL

Sandbox:
https://smartgateway.hdfcuat.bank.in

Production:
https://smartgateway.hdfc.bank.in

Create a dedicated service layer:

lib/hdfc/client.ts
lib/hdfc/create-order.ts
lib/hdfc/check-order-status.ts

Do not place HDFC logic directly inside route handlers.

Route Handlers should call reusable service functions.

All payment verification must happen server-side.

Convert the official JavaScript SDK examples into TypeScript.

Maintain type safety.

Do not downgrade the project to JavaScript.

Sanity CMS Implementation Notes

Use the latest official Sanity v3 approach.

Requirements:

* Embedded Studio inside Next.js project
* Route: /studio
* No separate repository
* TypeScript only
* next-sanity package
* Sanity image URL builder
* GROQ queries
* Server Components for content fetching
* Revalidation support

The implementation should follow current Sanity best practices rather than tutorial examples.

Create production-ready schemas and CMS architecture specifically for the SMJ MUN project.

Do not build a separate standalone Sanity application unless technically required.  {
  "name": "smg-mun",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "framer-motion": "^12.40.0",
    "lucide-react": "^1.17.0",
    "next": "16.2.7",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-icons": "^5.6.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.7",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

Create:

lib/sanity/types.ts
Homepage
Conference
Blog
Gallery
Testimonial
Media
This will save a lot of TypeScript pain later. ,,

Add Registration Snapshot Fields
conferenceTitle
conferenceDate
conferenceFee

Add Inquiry Status Fields
3. Add Inquiry Status Fields

For:

PartnershipInquiry
ContactInquiry

Add:

status

Values:

NEW
CONTACTED
CLOSED

This gives basic lead management without building an admin dashboard.