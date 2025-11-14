# Task Tracker
A simple React + TypeScript task tracker that lets you create, update, and manage tasks through a clean web interface. This project is part of my portfolio as I practice frontend development, component structure, and state management.

## 🚀 What it does
- Display a list of tasks  
- Add new tasks with title and optional description
- Mark tasks as completed  
- Edit existing tasks
- Remove tasks  
- Store tasks in memory during the session

## 🛠 Tech stack
- React 19.2.0
- TypeScript  
- Vite (frontend tooling)  
- Tailwind CSS (via CDN)
- Basic project scripts (dev, build, preview)

## ▶️ How to run it locally
1. Install dependencies:  
   ```bash
   npm install
   ```
2. Start the development server:  
   ```bash
   npm run dev
   ```
3. Open the URL shown in the terminal (usually http://localhost:3000) in your browser.

## 📁 Project structure
```
├── components/
│   ├── AddTaskForm.tsx
│   ├── EditTaskModal.tsx
│   ├── Icons.tsx
│   ├── TaskItem.tsx
│   └── TaskList.tsx
├── App.tsx
├── types.ts
├── index.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🌱 Why I built this
I created this project to practice:
- Managing component state in React with hooks (useState, useCallback, useEffect)
- Organizing a small codebase with proper component separation
- Working with TypeScript types and interfaces
- Using Vite's fast development environment
- Building a clean, accessible UI with Tailwind CSS
- Publishing clean projects on GitHub

## 💡 Key Features
- **In-Memory State Management**: Tasks persist during your session but reset on refresh
- **Modal Editing**: Edit tasks in a clean modal interface with keyboard support (ESC to close)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: Proper ARIA labels and semantic HTML throughout
- **Dark Theme**: Modern dark color scheme for comfortable viewing

## 🚧 Future improvements
- Add task filtering (all / completed / active)  
- Support priorities or due dates  
- Add task categories or tags
- Implement drag-and-drop reordering
- Add persistent storage (localStorage, IndexedDB, or backend API)
- Improve form validation with error messages
- Add task search functionality
- Include task statistics dashboard

## 🤝 Contributions
Feel free to open issues or submit pull requests if you'd like to improve the project.

## 📝 License
This project is open source and available under the MIT License.
