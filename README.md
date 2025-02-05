## **React Vite App - UI Dashboard with Redux & Google Auth**

### **Overview**
This is a **React Vite** project that includes a counter, user form, rich text editor, and a dashboard with user profile trends. It integrates **Google authentication**, **Redux Toolkit for state management**, **MUI for UI components**, and **React Spring for animations**.

---

### **Tech Stack**
- **React (Vite)**
- **Redux Toolkit** - State Management
- **React Router** - Navigation (Home & Dashboard)
- **React Spring** - Smooth Animations
- **MUI (Material UI)** - Styling & Components
- **Recharts** - Data Visualization
- **LocalStorage** - Data Persistence
- **Google OAuth** - Authentication

---

### **Folder Structure**
```
react-app/
│── src/
│   │── components/
│   │   │── Counter.jsx
│   │   │── UserForm.jsx
│   │   │── RichTextEditor.jsx
│   │   │── GoogleAuth.jsx
│   │── pages/
│   │   │── Home.jsx
│   │   │── DashboardCharts.jsx
│   │── context/
│   │   │── store.js
│   │── App.js
│   │── main.js
│── public/
│── README.md
```

---

### **Features**
1. **Home Page (React Router)**
   - Contains **Counter, User Form, and Rich Text Editor** inside it
   - Acts as the main container for the app’s core functionalities

2. **Counter (Redux)**
   - Increases and decreases count
   - Changes background color dynamically using **React Spring (Bezier Curve)**
   - Uses **Redux** for state management

3. **User Form**
   - Collects user details (Name, Address, Email, Phone)
   - Auto-generates a unique ID for each user
   - Supports multiple users (stored in **Redux & LocalStorage**)
   - Prevents unsaved changes using a **confirmation popup** on refresh/logout

4. **Rich Text Editor**
   - Allows text formatting (**bold, italic, underline, lists**)
   - Displays **User Form Data** for editing
   - Saves content to **LocalStorage** with unsaved changes warning

5. **Dashboard (Protected Route)**
   - Displays **Counter & User Profile Visuals**
   - Uses **Recharts** for interactive data trends
   - Can only be accessed when logged in

6. **Google Authentication**
   - Allows users to **Sign in with Google**
   - Manages login/logout status using **Redux**
   - Restricts Dashboard access to authenticated users

7. **Navigation (React Router)**
   - **Home Page** (`/`) (Includes Counter, User Form, and Rich Text Editor)
   - **Dashboard (Protected)** (`/dashboard`)

---

### **Setup Instructions**
#### **1️⃣ Install Dependencies**
```sh
npm install
```
or if using yarn:
```sh
yarn install
```

#### **2️⃣ Start the Development Server**
```sh
npm run dev
```
or
```sh
yarn dev
```
Vite will start your app at `http://localhost:5173`.

#### **3️⃣ Build for Production**
```sh
npm run build
```
or
```sh
yarn build
```

---

### **Future Enhancements**
- Improve **Dashboard Visuals** with more insights.
- Implement **Dark Mode**.
- Enhance **Authentication Security** with JWT.
- Optimize state management for better performance.

---

### **Contributing**
This project is open-source. Feel free to **modify and enhance** it! 🎉  
Pull requests are welcome!  

---

