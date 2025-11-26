# To-Do List Mobile App

A fully responsive, modern To-Do List application built with React, TypeScript, Tailwind CSS, and Zustand for state management. This app allows users to efficiently manage their tasks with weekly organization, priority levels, and real-time search functionality.

![To-Do List App](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-blue)

## ✨ Features

### Core Functionality
- ✅ **Create Tasks** - Add tasks with title, description, date/time, and priority
- ✏️ **Edit Tasks** - Update any task attribute
- 🗑️ **Delete Tasks** - Remove tasks with confirmation
- 🔍 **Search Tasks** - Real-time search by title or description
- ✔️ **Task Status** - Toggle between "In Progress" and "Completed"

### UI/UX Features
- 📅 **Weekly Organization** - Tasks grouped by week (Monday - Sunday)
- 📊 **Progress Tracking** - Visual weekly progress bars
- 🎨 **Priority Levels** - Low, Medium, High with color coding
- 📱 **Fully Responsive** - Mobile-first design
- 🌊 **Smooth Animations** - Polished user experience
- 💾 **Data Persistence** - Tasks saved to local storage

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd todo-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deployment

### Deploy to Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod --dir=dist
```

### Alternative: Deploy via Netlify UI

1. Build your project: `npm run build`
2. Go to [Netlify](https://app.netlify.com)
3. Drag and drop the `dist` folder

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **date-fns** - Date utilities
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

## 📁 Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── Onboarding.tsx       # Welcome screen
│   │   ├── WeekCard.tsx         # Weekly summary card
│   │   ├── TaskItem.tsx         # Individual task component
│   │   └── TaskModal.tsx        # Add/Edit task modal
│   ├── pages/
│   │   └── Home.tsx             # Main home screen
│   ├── store/
│   │   └── taskStore.ts         # Zustand store
│   ├── types/
│   │   └── index.ts             # TypeScript types
│   ├── utils/
│   │   └── dateUtils.ts         # Date helper functions
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Key Features Implementation

### Weekly Task Organization
Tasks are automatically grouped by week (Monday-Sunday) using `date-fns` utilities. Each week displays:
- Number of completed tasks
- Number of open tasks
- Progress bar showing completion percentage

### Search Functionality
Real-time search filters tasks by title and description as you type.

### Priority System
Three priority levels with visual indicators:
- 🔴 High - Red badge
- 🟡 Medium - Yellow badge
- 🟢 Low - Green badge

### State Management
Zustand provides efficient state management with:
- Persistent storage (localStorage)
- Optimistic updates
- Clean API for task operations

## 🎨 UI Design

The app follows the provided Figma design with:
- Clean, modern interface
- Indigo primary color scheme
- Smooth animations and transitions
- Mobile-optimized layout
- Intuitive touch interactions

## 📱 Mobile Optimization

- Responsive breakpoints for all screen sizes
- Touch-friendly button sizes (min 44x44px)
- Swipe gestures support
- Mobile keyboard optimization
- Bottom sheet modals for task creation

## 🔒 Data Persistence

Tasks are automatically saved to localStorage using Zustand's persist middleware. Data persists across browser sessions.

## 🧪 Testing the App

### Sample Workflow

1. **First Visit** - See onboarding screen
2. **Add Task** - Click the + button
3. **Fill Details** - Enter title, date, time, priority
4. **View Tasks** - See tasks organized by week
5. **Edit Task** - Click edit button on any task
6. **Complete Task** - Click checkbox to mark complete
7. **Search** - Use search bar to find tasks
8. **Delete Task** - Click delete button with confirmation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React and TypeScript

## 🐛 Known Issues

None at the moment. Please report any issues you find!

## 🔮 Future Enhancements

- Backend API integration
- User authentication
- Task categories/tags
- Recurring tasks
- Task notifications
- Dark mode
- Multi-language support
- Task export/import

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Happy Task Managing! 📝✨**
