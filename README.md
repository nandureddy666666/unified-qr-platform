# 🚀 Unified QR Platform

A full-stack QR Code Management Platform developed using **React**, **Vite**, **Supabase**, and **Vercel**. The application allows users to generate, download, save, and manage QR codes securely. It also includes a **Multi-Link QR** feature that lets users share multiple social and website links through a single QR code.
---

## 🌐 Live Demo

https://unified-qr-platform-dun.vercel.app

---

## 📂 GitHub Repository

https://github.com/nandureddy666666/unified-qr-platform
---

# ✨ Features

## 🔐 Authentication
- User Signup
- User Login
- Secure Logout
- Supabase Authentication

## 📱 QR Code Features
- Generate QR Codes
- Generate Website QR
- Generate Text QR
- Download QR Code as PNG
- Save QR Codes to Database

## 📂 QR Management
- View Saved QR Codes
- Delete QR Codes

## 🔗 Multi-Link QR
- Create a single QR for multiple links
- Website
- LinkedIn
- GitHub
- Instagram
- Public Link Page

## 👤 User Profile
- View Logged-in User Details
- Logout
---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- HTML5
- CSS3
- JavaScript (ES6+)

## Backend
- Supabase

## Database
- PostgreSQL (Supabase)

## Authentication
- Supabase Authentication

## QR Code Libraries
- react-qr-code
- html-to-image

## Deployment
- Vercel

## Version Control
- Git
- GitHub
---

# 🗄️ Database Schema

## Table: qrcodes

| Column | Type |
|----------|------|
| id | UUID |
| user_id | UUID |
| qr_text | TEXT |
| created_at | TIMESTAMP |

---

## Table: multilinks

| Column | Type |
|----------|------|
| id | UUID |
| user_id | UUID |
| title | TEXT |
| website | TEXT |
| linkedin | TEXT |
| github | TEXT |
| instagram | TEXT |
| created_at | TIMESTAMP |

---

## Table: text_qr

| Column | Type |
|----------|------|
| id | UUID |
| user_id | UUID |
| qr_text | TEXT |
| created_at | TIMESTAMP |
---

# 📂 Project Structure

```text
unified-qr-platform
│
├── public
│
├── src
│   ├── pages
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CreateQR.jsx
│   │   ├── MyQR.jsx
│   │   ├── MultiLink.jsx
│   │   ├── LinksPage.jsx
│   │   ├── TextPage.jsx
│   │   └── Profile.jsx
│   │
│   ├── services
│   │   └── supabase.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
├── README.md
└── vercel.json
```
---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/unified-qr-platform.git
```

## Navigate to Project Folder

```bash
cd unified-qr-platform
```

## Install Dependencies

```bash
npm install
```

## Run the Project

```bash
npm run dev
```
---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/nandureddy666666/unified-qr-platform.git
```

## Navigate to Project Folder

```bash
cd unified-qr-platform
```

## Install Dependencies

```bash
npm install
```

## Run the Project

```bash
npm run dev
```
---

# 🔑 Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```
---

# ✅ Completed Features

- User Authentication (Signup/Login)
- Dashboard
- Create QR Code
- Website QR Generation
- Multi-Link QR Generation
- Download QR Code
- Save QR Code to Database
- View Saved QR Codes
- Delete QR Codes
- User Profile
- Supabase Authentication
- PostgreSQL Database Integration
- Responsive User Interface
- Live Deployment on Vercel
---

# 🚀 Future Improvements

- QR Scan Analytics
- QR Code Customization (Colors & Logo)
- Dynamic QR Codes
- Password Protected QR Codes
- QR Expiration Feature
- QR Sharing Options
- Admin Dashboard
- Scan History
- Mobile Application
---

# 👨‍💻 Developed By

**Nanda Kishor Reddy**

**B.Tech – CSE (AI & ML)**

**Madanapalle Institute of Technology and Science**

### 🔗 Connect with Me

- GitHub: https://github.com/nandureddy666666
- LinkedIn:https://www.linkedin.com/in/nandu-reddy-a8806832b?utm_source=share_via&utm_content=profile&utm_medium=member_android

---

# 📄 License

This project was developed as part of an internship for educational and learning purposes.