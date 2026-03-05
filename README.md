# CRM Operating System

Next-generation CRM and task management system for B2B trading teams. Built with a focus on speed, stability, and premium aesthetics.

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS
- **State**: Zustand
- **Database**: PostgreSQL (Supabase compatible)
- **UI/UX**: Radix UI, Framer Motion, Lucide Icons
- **PWA**: next-pwa

## Key Features
- **Topics**: Centralized containers for deals, tasks, clients, and chats.
- **Task Escalation**: Automatic visibility escalation for overdue tasks to admins and the entire team.
- **Analytics**: Discipline index tracking and team rankings.
- **Excel Import**: Deduplication-aware client database import.
- **Apple-tier Design**: Minimalist, card-based, and mobile-first.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Database Setup**:
   Apply the provided SQL schema in `supabase/schema.sql` to your PostgreSQL or Supabase project.

3. **Configure Environment**:
   Create a `.env.local` file with your credentials (optional for UI-only prototype):
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure
- `src/app/`: Next.js App Router pages and layouts.
- `src/components/ui/`: Reusable Apple-style UI primitives.
- `src/components/layout/`: Global navigation components.
- `src/lib/`: Utility functions.
- `src/store/`: Zustand state management.
- `public/`: Static assets and PWA manifest.
- `supabase/`: Database schema.
