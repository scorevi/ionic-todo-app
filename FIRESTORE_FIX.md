# 🔥 Firebase Firestore Setup - CRITICAL STEPS

## ⚠️ If you see "Failed to load todos" error, follow these steps:

---

## Step 1: Enable Firestore Database (REQUIRED)

### Go to Firebase Console:
**https://console.firebase.google.com/project/hybridprog-finals/firestore**

### Enable Firestore:
1. Click **"Create Database"** (if not already created)
2. Choose **"Start in test mode"** (IMPORTANT!)
3. Select your location (any location is fine)
4. Click **"Enable"**

---

## Step 2: Set Up Security Rules (CRITICAL!)

### Go to Rules Tab:
**https://console.firebase.google.com/project/hybridprog-finals/firestore/rules**

### Replace with these rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read and write to todos collection
    match /todos/{todoId} {
      allow read, write: if true;
    }
  }
}
```

### Click **"Publish"**

⚠️ **IMPORTANT:** Without these rules, you'll get permission errors!

---

## Step 3: Verify Your Firebase Config

### Check `src/firebase/config.ts`:
Your file should have these EXACT values:
```typescript
const firebaseConfig = {
  apiKey: "AIzaSyDU-84Mpw59EvVwgK-pi4YAHDV2n83Eeoo",
  authDomain: "hybridprog-finals.firebaseapp.com",
  projectId: "hybridprog-finals",
  storageBucket: "hybridprog-finals.firebasestorage.app",
  messagingSenderId: "181267474102",
  appId: "1:181267474102:web:9f6b555d0861ef9ba62817"
};
```

✅ These values are already correct in your project.

---

## Step 4: Test the Connection

### Open Browser Console (F12):
1. Go to http://localhost:3000
2. Press **F12** to open Developer Tools
3. Go to **Console** tab
4. Look for any red error messages

### Common Errors & Solutions:

#### Error: "Missing or insufficient permissions"
**Solution:**
- Go to Firestore Rules (Step 2 above)
- Make sure you published the rules with `allow read, write: if true;`

#### Error: "The query requires an index"
**Solution:**
- This is normal for the first query
- Click the link in the error message to create the index
- Wait 1-2 minutes for it to build
- Refresh your app

#### Error: "Firebase: Firebase App named '[DEFAULT]' already exists"
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh the page (Ctrl+F5)

#### Error: "Network request failed"
**Solution:**
- Check your internet connection
- Verify Firebase config is correct
- Make sure Firestore is enabled

---

## Step 5: Restart Development Server

After making changes:
```powershell
# Stop the server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

---

## Quick Verification Checklist

- [ ] Firestore Database is **enabled** in Firebase Console
- [ ] Security rules are set to **test mode** (allow all)
- [ ] Rules have been **published**
- [ ] Firebase config in `src/firebase/config.ts` is correct
- [ ] Development server is **running**
- [ ] Browser console shows **no red errors**

---

## Visual Guide - Where to Find Everything

### 1. Firebase Console Home:
https://console.firebase.google.com/project/hybridprog-finals

### 2. Firestore Database:
- Left sidebar → **"Firestore Database"**
- Should see either "Create database" button OR your existing database

### 3. Security Rules:
- In Firestore Database page
- Click the **"Rules"** tab at the top
- Should see a code editor

### 4. Data Tab:
- In Firestore Database page
- Click the **"Data"** tab at the top
- This is where you'll see your "todos" collection after adding data

---

## Testing Steps (Do This in Order)

### 1. Verify Firestore is Enabled:
- Go to https://console.firebase.google.com/project/hybridprog-finals/firestore
- You should see either empty database or existing data
- If you see "Create database" button, click it and enable test mode

### 2. Check Rules:
- Click "Rules" tab
- Verify you have: `allow read, write: if true;`
- Click "Publish" if you made changes

### 3. Open Your App:
- Go to http://localhost:3000
- Open Console (F12)

### 4. Try Adding a Todo:
- Click the **+** button
- Enter: Title = "Test", Description = "Testing Firebase"
- Click "Add Todo"

### 5. Check for Success:
- Should see the todo in your list
- Go to Firebase Console → Firestore → Data tab
- Should see "todos" collection with 1 document

---

## Still Having Issues?

### Check Browser Console:
```
F12 → Console tab → Look for errors
```

### Check Network Tab:
```
F12 → Network tab → Filter: firestore
```
- Should see requests to firestore
- Check if they're returning errors (red, status 403 means permissions issue)

### Test Firebase Connection:
Add this to browser console:
```javascript
// Test if Firebase is working
firebase.apps.length
// Should return 1 (means Firebase is initialized)
```

---

## Emergency Reset

If nothing works, try this:

### 1. Clear Everything:
```powershell
# Clear browser cache completely
# In browser: Ctrl+Shift+Delete → Clear all

# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

### 2. Verify Firestore Rules Again:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /todos/{todoId} {
      allow read, write: if true;
    }
  }
}
```

### 3. Check Firebase Console:
- Make sure you're in the right project: **hybridprog-finals**
- Make sure Firestore Database shows as enabled

---

## Success Indicators

You'll know it's working when:
- ✅ No error toasts appear
- ✅ You can click + and add a todo
- ✅ Todo appears in the list instantly
- ✅ Todo appears in Firebase Console → Firestore → Data
- ✅ Browser console shows no red errors

---

## Need More Help?

### Browser Console Errors:
Take a screenshot of the error and check:
- Error code (e.g., permission-denied, not-found)
- Full error message

### Common Solutions:
1. **99% of issues** = Firestore rules not set correctly
2. **Refresh** the page after changing rules
3. **Wait 1-2 min** after enabling Firestore
4. **Clear cache** if you made config changes

---

**Once Firestore is properly set up, your app will work perfectly!** 🚀
