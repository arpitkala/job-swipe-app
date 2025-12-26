# Job Swipe & Apply – Frontend Engineer Assignment

## Overview
A student-facing **Job Swipe & Apply web application** built with **React + TypeScript**.  
Users can swipe left to skip a job, swipe right to show interest, view job details, and apply with a **mocked ATS score**.

---

## Features
- Tinder-style job discovery (Skip / Interested)
- Job detail modal with eligibility details
- Apply flow with mocked ATS score & missing keywords
- Light / Dark theme toggle
- Responsive and clean UI

---

## Screens
1. **Job Swipe Screen**
   - Job card with title, company, tags, duration, location, stipend
   - Skip and Interested actions

2. **Job Details Modal**
   - Job description
   - Eligibility (CGPA, branch)
   - Apply option

3. **ATS Score Screen**
   - Mocked ATS score
   - Missing skill keywords

---

## Tech Stack
- React (Vite)
- TypeScript
- Custom CSS
- Static JSON (Mock API)

---

## Component Structure
- `Home.tsx` – Main flow & state management
- `JobCard.tsx` – Job card UI
- `SwipeCard.tsx` – Skip / Interested actions
- `JobDetailsModal.tsx` – Job details
- `ATSModal.tsx` – ATS score display

---

## State Management
- React `useState` for job index, swipe direction, modals, and theme
- Local state chosen for simplicity and clarity

---

## UX Decisions
- Button-based swipe instead of drag for accessibility
- Mocked ATS logic to focus on frontend implementation
- Compact card design for quick decision-making

---

## Links
- **GitHub Repo:** https://github.com/arpitkala/job-swipe-app
- **Deployment Link:** https://job-swipe-app-kappa.vercel.app/

