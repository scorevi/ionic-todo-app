# Ionic React Todo App with Firebase

A complete hybrid mobile application built with **Ionic React** demonstrating full **CRUD operations** with **Firebase Firestore** integration.

## 📱 App Overview

This is a modern Todo List application that allows users to:
- ✅ **Create** new todos with title, description, priority, category, and due date
- 🎯 **Priority Levels** - Assign Low, Medium, or High priority to tasks
- 📁 **Categories** - Organize tasks by category (Work, Personal, Shopping, etc.)
- 📅 **Due Dates** - Set due dates and track overdue tasks with visual indicators
- 📖 **Read** all active and completed todos with rich metadata
- ✏️ **Update** todo details, priority, category, and completion status
- 🗑️ **Delete** todos permanently

The app features a clean, responsive UI with tab-based navigation, color-coded priority badges, and real-time Firebase database synchronization.

---

## 🛠️ Technology Stack

- **Ionic 7.6** - Hybrid mobile framework
- **React 18.2** - UI library
- **TypeScript** - Type-safe development
- **Firebase 10.7** - Firestore database
- **Vite** - Build tool
- **Capacitor 5.5** - Native runtime
- **Vercel** - Web deployment platform

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Android Studio (for Android) or Xcode (for iOS)
- Firebase account

### Installation

1. **Install dependencies:**
```powershell
npm install
```

2. **Configure Firebase:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Get your Firebase config from Project Settings
   - Update `src/firebase/config.ts` with your credentials:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

3. **Set up Firestore Database:**
   - In Firebase Console, go to Firestore Database
   - Create database (start in test mode for development)
   - Collection will be created automatically when you add your first todo

---

## 💻 Running the App

### Web Development
```powershell
npm run dev
```
Opens at `http://localhost:3000`

### Build for Production
```powershell
npm run build
```

### Android Deployment

1. **Add Android platform:**
```powershell
npm install
npm run build
npx cap add android
npx cap sync
```

2. **Open in Android Studio:**
```powershell
npx cap open android
```

3. **Run on emulator or device** from Android Studio

### iOS Deployment

1. **Add iOS platform:**
```powershell
npm install
npm run build
npx cap add ios
npx cap sync
```

2. **Open in Xcode:**
```powershell
npx cap open ios
```

3. **Run on simulator or device** from Xcode

---

## 🌐 Vercel Deployment

1. **Install Vercel CLI:**
```powershell
npm install -g vercel
```

2. **Deploy:**
```powershell
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

## 📂 Project Structure

```
ionic-todo-app/
├── src/
│   ├── components/          # React components
│   │   ├── AddTodoModal.tsx    # Create todo modal
│   │   ├── EditTodoModal.tsx   # Update todo modal
│   │   └── TodoItem.tsx        # Todo list item
│   ├── firebase/            # Firebase configuration
│   │   └── config.ts           # Firebase setup
│   ├── pages/              # Page components
│   │   ├── About.tsx          # About/documentation page
│   │   ├── Completed.tsx      # Completed todos page
│   │   └── TodoList.tsx       # Active todos page
│   ├── services/           # API services
│   │   └── todoService.ts     # CRUD operations
│   ├── theme/              # Styling
│   │   └── variables.css      # Ionic theme
│   ├── types/              # TypeScript types
│   │   └── Todo.ts            # Todo interface
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── capacitor.config.ts     # Capacitor configuration
├── package.json            # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── vercel.json            # Vercel deployment config
```

---

## 🗄️ Database Structure

### Firestore Collection: `todos`

Each document contains:
```typescript
{
  title: string;           // Todo title
  description: string;     // Todo description
  completed: boolean;      // Completion status
  createdAt: Timestamp;    // Creation date
  updatedAt: Timestamp;    // Last update date
}
```

---

## ✨ Features

### 1. CREATE - Add New Todo
- Click the **+** floating action button
- Enter title (required) and description (optional)
- Saves to Firebase Firestore with timestamp

### 2. READ - View Todos
- **Todos Tab**: Shows all active (incomplete) todos
- **Completed Tab**: Shows all completed todos
- Pull-to-refresh to reload data
- Real-time updates from Firebase

### 3. UPDATE - Edit Todo
- Click edit icon on any todo
- Modify title or description
- Toggle completion status with checkbox
- Updates reflected immediately in Firebase

### 4. DELETE - Remove Todo
- Swipe left on any todo item
- Click red trash icon
- Permanently removes from Firebase

---

## 🎨 UI/UX Features

- **Tab Navigation**: Three tabs (Todos, Completed, About)
- **Responsive Design**: Works on all screen sizes
- **Dark Mode Support**: Automatic theme switching
- **Pull to Refresh**: Update data on demand
- **Loading States**: User feedback during operations
- **Toast Notifications**: Success/error messages
- **Smooth Animations**: Native-like transitions
- **Swipe Actions**: Intuitive delete gesture

---

## 🧪 Testing the App

1. **Add a Todo**: Click +, enter "Buy groceries", click Add
2. **View Todo**: See it appear in Todos tab
3. **Mark Complete**: Check the checkbox
4. **View Completed**: Switch to Completed tab
5. **Edit Todo**: Click edit icon, change title
6. **Delete Todo**: Swipe left, click trash icon
7. **Check Firebase**: Verify changes in Firebase Console

---

## 📸 Screenshots Checklist

For your PDF submission, include:
- [ ] Home screen (Todos tab with items)
- [ ] Add Todo modal
- [ ] Edit Todo modal
- [ ] Completed todos tab
- [ ] About page
- [ ] Firebase Console showing todos collection
- [ ] App running in Android Studio/iOS Simulator
- [ ] Vercel deployment dashboard

---

## 🎥 Video Demo Guide

Record a 2-minute video showing:
1. **App Launch** (5 sec)
2. **Add Todo** (15 sec)
3. **View in Firebase Console** (10 sec)
4. **Edit Todo** (15 sec)
5. **Mark as Complete** (10 sec)
6. **View Completed Tab** (10 sec)
7. **Delete Todo** (10 sec)
8. **Pull to Refresh** (10 sec)
9. **Navigate Between Tabs** (10 sec)
10. **About Page** (5 sec)

### Compression Tools:
- HandBrake (free)
- Adobe Media Encoder
- Online: clipchamp.com

---

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify config in `src/firebase/config.ts`
- Check Firestore rules (use test mode initially)
- Ensure billing is enabled on Firebase project

### Build Errors
```powershell
# Clear node modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### Capacitor Sync Issues
```powershell
npx cap sync
```

---

## 📝 Submission Checklist

### PDF Document
- [ ] App overview and description
- [ ] Screenshots of all pages
- [ ] Screenshots of CRUD operations
- [ ] Firebase Console screenshots
- [ ] App running in emulator
- [ ] Feature list
- [ ] Database structure documentation
- [ ] Challenges and learnings

### Video Submission
- [ ] Upload to Canvas (compressed < 100MB)
- [ ] Upload to Google Drive (LastName_FirstName_IonicExam.mp4)
- [ ] Video shows navigation
- [ ] Video demonstrates all CRUD operations
- [ ] Video shows Firebase updates
- [ ] Video is under 2 minutes

---

## 🎓 Learning Outcomes

This project demonstrates:
- Hybrid mobile app development
- React component architecture
- Firebase Firestore integration
- TypeScript type safety
- Ionic UI components
- State management in React
- Async/await operations
- Mobile UI/UX best practices
- Cross-platform deployment

---

## 📧 Support

For issues or questions:
- Review Firebase Console for database errors
- Check browser console for JavaScript errors
- Verify all dependencies are installed
- Ensure Firebase config is correct

---

## 📄 License

This project is created for educational purposes as part of the Hybrid Programming course.

---

**Good luck with your exam! 🎉**
