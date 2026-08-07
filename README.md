Project: BodyBoost (rebuild)

Overview
- Frontend: Next.js + Tailwind CSS
- Backend: Django + Django REST Framework (SQLite for local dev)

This repository is scaffolded to reproduce the public site at https://bodyboostreact.netlify.app/ with improved performance, using Next.js (SSG/ISR) and Django for APIs and authentication.

Quick start (frontend)
1. cd frontend
2. npm install
3. npm run dev

Quick start (backend)
1. cd backend
2. python -m venv .venv
3. .\.venv\Scripts\activate  # Windows PowerShell
4. pip install -r requirements.txt
5. python manage.py migrate
6. python manage.py createsuperuser
7. python manage.py runserver

Notes
- Assets (images/fonts) will be downloaded from the live site and placed under frontend/public/
- Use Node 18+ and Python 3.10/3.11 (recommended)
- No Docker by default as requested; can add later if desired

Next steps
- Download public assets and wire them into the Next.js pages
- Implement DRF endpoints (auth, user) and JWT-based auth
- Build match-styled pages with Tailwind and optimize for SSG

If anything above needs to change (DB, Docker, auth behavior), tell me and I will adjust before continuing.