# To-Do List Mobile App 📝

A clean and simple to-do list app that helps you stay organized. Built with React, TypeScript, and Tailwind CSS.

**[Live Demo →](https://your-app.netlify.app)**

## What It Does

This is a mobile-friendly task manager where you can:
- Add, edit, and delete tasks
- Set priorities (High, Medium, Low)
- Search through your tasks
- See your tasks organized by week
- Track your weekly progress

Everything saves automatically to your browser, so you won't lose your tasks when you refresh the page.

## Screenshots

[Add a screenshot or two here when you can]

## Running It Locally

You'll need Node.js installed. Then:
```bash
# Get the code
git clone <your-repo-url>
cd todo-app

# Install stuff
npm install

# Start it up
npm run dev
```

Open `http://localhost:5173` and you're good to go!

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Zustand for state management
- Vite as the build tool
- date-fns for handling dates
- React Hook Form + Zod for forms

## Building for Production
```bash
npm run build
```

This creates a `dist` folder with everything optimized and ready to deploy.

## Deployment

I deployed this on Netlify. It was pretty straightforward:
```bash
npm run build
netlify deploy --prod
```

You can also just drag the `dist` folder into Netlify's web interface.

## How It Works

The app groups your tasks by week (Monday through Sunday) and shows you:
- How many tasks you've completed
- How many are still pending
- A progress bar for the week

Tasks are stored in your browser's localStorage, so they persist between sessions. No backend needed!

## Project Structure
```
src/
├── components/     # UI components (modals, cards, etc.)
├── pages/          # Main screens
├── store/          # Zustand state management
├── types/          # TypeScript definitions
└── utils/          # Helper functions
```

## Things I'd Like to Add

- Backend integration so tasks sync across devices
- User accounts
- Task categories or tags
- Dark mode
- Recurring tasks
- Push notifications

## Issues?

If something's not working, please open an issue. I'm happy to help!

## License

MIT - feel free to use this however you want.

---

Made as part of an SDE-1 assessment. Thanks for checking it out! 🚀
