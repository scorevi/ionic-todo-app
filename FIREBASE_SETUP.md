# Firebase Setup Guide

## Step-by-Step Instructions to Set Up Firebase for Your Todo App

---

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `ionic-todo-app` (or your preferred name)
4. Click **Continue**
5. Disable Google Analytics (optional, not needed for this project)
6. Click **Create project**
7. Wait for project creation, then click **Continue**

---

## 2. Set Up Firestore Database

1. In the Firebase Console, click **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
   - This allows read/write access without authentication
   - ⚠️ **Important:** For production, you should set up proper security rules
4. Select your preferred location (choose closest to you)
5. Click **Enable**
6. Wait for Firestore to be provisioned

### Test Mode Rules (Default)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2025, 1, 15);
    }
  }
}
```

⚠️ **Note:** Test mode rules expire after 30 days. For long-term use, update rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{todoId} {
      allow read, write: if true;  // For development only
    }
  }
}
```

---

## 3. Get Firebase Configuration

1. In Firebase Console, click the **⚙️ gear icon** next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **"</>"** (Web) icon to add a web app
5. Enter app nickname: `Todo App Web`
6. ✅ Check **"Also set up Firebase Hosting"** (optional)
7. Click **"Register app"**

8. Copy the Firebase configuration object. It will look like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "ionic-todo-app.firebaseapp.com",
  projectId: "ionic-todo-app",
  storageBucket: "ionic-todo-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

9. Click **"Continue to console"**

---

## 4. Update Your App Configuration

1. Open `src/firebase/config.ts` in your project
2. Replace the placeholder values with your actual Firebase config:

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",  // Your actual API key
  authDomain: "ionic-todo-app.firebaseapp.com",    // Your actual auth domain
  projectId: "ionic-todo-app",                      // Your actual project ID
  storageBucket: "ionic-todo-app.appspot.com",     // Your actual storage bucket
  messagingSenderId: "123456789012",                // Your actual sender ID
  appId: "1:123456789012:web:abcdef1234567890"    // Your actual app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
```

3. Save the file

---

## 5. Test Firebase Connection

1. Start your development server:
```powershell
npm run dev
```

2. Open the app in your browser at `http://localhost:3000`

3. Try adding a todo:
   - Click the + button
   - Enter a title like "Test Firebase Connection"
   - Click "Add Todo"

4. Check Firebase Console:
   - Go to Firestore Database in Firebase Console
   - You should see a new collection called `todos`
   - Click to expand and see your test document

---

## 6. Verify CRUD Operations

### Create
- Add a todo in your app
- Check Firebase Console → Firestore → todos collection
- You should see the new document with fields: title, description, completed, createdAt, updatedAt

### Read
- Refresh your app
- The todos should load from Firebase

### Update
- Check a todo as complete
- In Firebase Console, the `completed` field should change to `true`
- Edit a todo's title
- In Firebase Console, the `title` and `updatedAt` fields should update

### Delete
- Swipe left on a todo and delete it
- In Firebase Console, the document should be removed

---

## 7. Firebase Console Navigation Tips

### View Data
1. Click **"Firestore Database"** in left sidebar
2. Click **"Data"** tab
3. You'll see your collections (should have "todos")
4. Click on "todos" to see all documents
5. Click on a document ID to see its fields

### Edit Data Manually
1. Navigate to a document
2. Click the **pencil icon** next to a field
3. Edit the value
4. Click **✓** to save

### Add Document Manually
1. Click **"+ Add document"** or **"+ Add collection"**
2. Enter field names and values
3. Click **Save**

### Delete Data
1. Click the **⋮** (three dots) menu next to a document
2. Click **"Delete document"**

---

## 8. Common Issues & Solutions

### Issue: "Firebase: Firebase App named '[DEFAULT]' already exists"
**Solution:** You're initializing Firebase multiple times. Make sure you only import `db` from `config.ts`, not initializing Firebase elsewhere.

### Issue: "Missing or insufficient permissions"
**Solution:**
- Check Firestore rules in Firebase Console
- Make sure you're in test mode OR
- Update rules to allow read/write access

### Issue: "Network request failed"
**Solution:**
- Check your internet connection
- Verify Firebase config values are correct
- Make sure you copied the full API key

### Issue: "Document does not exist"
**Solution:**
- The collection is created automatically when you add the first document
- Make sure you've added at least one todo

---

## 9. Firebase Pricing

Firebase has a **free tier (Spark Plan)** that includes:
- ✅ Firestore: 50,000 reads/day
- ✅ Firestore: 20,000 writes/day
- ✅ 1 GiB stored data
- ✅ 10 GiB/month bandwidth

**This is more than enough for your exam project!**

No credit card required for the free tier.

---

## 10. Security Best Practices (For Production)

### Recommended Firestore Rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{todoId} {
      // Allow anyone to read todos
      allow read: if true;

      // Allow authenticated users to create/update/delete their own todos
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null
                              && request.auth.uid == resource.data.userId;
    }
  }
}
```

### Enable Authentication (Optional for Exam)
1. In Firebase Console, click **"Authentication"**
2. Click **"Get started"**
3. Enable **"Email/Password"** provider
4. Users must sign in to create/edit todos

---

## 11. Taking Screenshots for Your PDF

### Screenshots to Include:

1. **Firebase Console - Project Overview**
   - Shows your project name and ID

2. **Firestore Database - Collections View**
   - Shows the "todos" collection

3. **Firestore Database - Documents List**
   - Shows multiple todo documents

4. **Firestore Database - Document Details**
   - Shows a single document with all fields expanded

5. **Firestore Rules**
   - Click "Rules" tab
   - Shows your security rules

6. **Real-time Update (Optional)**
   - Split screen: App on left, Firebase Console on right
   - Show adding a todo and it appearing in Firebase instantly

---

## 12. Backup Your Data

### Export Firestore Data
```powershell
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Export data
firebase firestore:export backup-folder
```

### Import Firestore Data
```powershell
firebase firestore:import backup-folder
```

---

## ✅ Setup Complete Checklist

- [ ] Firebase project created
- [ ] Firestore database enabled
- [ ] Web app registered in Firebase
- [ ] Firebase config copied to `src/firebase/config.ts`
- [ ] App runs without errors
- [ ] Can create todos (visible in Firebase)
- [ ] Can read todos (loads from Firebase)
- [ ] Can update todos (changes reflected in Firebase)
- [ ] Can delete todos (removed from Firebase)
- [ ] Screenshots taken for documentation

---

**You're all set! Your Todo App is now connected to Firebase! 🎉**
