# To-Do List Mobile App 📝

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=flat&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

A mobile-first to-do list app built with React and TypeScript. Manage tasks with weekly organization, priorities, and search.

**🚀 [Live Demo](https://digiiiiaccel.netlify.app/)**

## Features

- Create, edit, and delete tasks with title, description, date/time, and priority
- Real-time search through tasks
- Weekly organization (Monday-Sunday) with progress tracking
- Priority levels (High, Medium, Low) with color badges
- Mobile-responsive design with smooth animations
- Auto-saves to localStorage - no backend needed

## Quick Start
```bash
# Clone and install
git clone https://github.com/YOUR_USERNAME/todo-app.git
cd todo-app
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

Open `http://localhost:5173` and start adding tasks!

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Zustand for state management
- date-fns for date handling
- React Hook Form + Zod for validation
- Vite as build tool

## Design Decisions

**State Management:** Zustand instead of Redux - it's lightweight, has built-in persistence, and requires minimal boilerplate.

**Mobile-First:** Started with mobile layouts and scaled up. Bottom sheet modals, touch-friendly buttons (44x44px minimum), and floating action button.

**Data Persistence:** Everything auto-saves to localStorage using Zustand's persist middleware. No database needed.

**Weekly Organization:** Tasks automatically group by week using date-fns. Shows completed vs pending counts with visual progress bars.

**Form Validation:** React Hook Form + Zod validates inputs before submission with inline error messages.

## Project Structure
```
src/
├── components/    # Onboarding, WeekCard, TaskItem, TaskModal
├── pages/         # Home screen
├── store/         # Zustand store
├── types/         # TypeScript definitions
└── utils/         # Date helpers
```

## Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview build
```

## Deployment

Deployed on Netlify with auto-deployments from main branch.

**Live:** https://digiiiiaccel.netlify.app/

## License

MIT

---

Built by [Your Name](https://github.com/aishwary-dongre) • [Live Demo](https://digiiiiaccel.netlify.app/)
