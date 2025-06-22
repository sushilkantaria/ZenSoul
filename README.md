# 🧘 ZenSoul – Mental Health & Wellness Platform

ZenSoul is a full-featured mental health and wellness platform designed to help users navigate their emotions and daily struggles. Whether it's anxiety, anger, stress, or mood swings — ZenSoul provides tailored solutions and calming activities like journaling, meditation, blogs, music, and more. It also includes an admin dashboard for managing content and user data.

---

## 🌐 Live Demo

🔗 [Live Site](https://zensoul-frontend.onrender.com)

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [License](#license)
- [Contact](#contact)

---

## ✨ Features

- 🧠 Mood-based content suggestions (e.g., anger, anxiety, stress, sadness, etc.)
- ✍️ Journaling section to express emotions privately
- 📖 Curated blogs and stories on mental health
- 🎧 Calming podcasts and guided meditations
- 🎵 Mood-specific music and soundscapes
- 🔍 Informative pages for awareness and education
- 🔐 User registration, login, and activity tracking
- 🛠️ Admin panel to manage content and monitor users

---

## 💻 Tech Stack

### Frontend
- React.js
- HTML5, CSS3, JavaScript
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Multer for file uploads

### Admin Panel
- React-based admin dashboard
- Secure login system
- CRUD for activities, blogs, music, podcasts

### Deployment
- Frontend & Admin: Render
- Backend: Render 
- Database: MongoDB Atlas

---

## 📁 Project Structure

ZenSoul/
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.js
├── admin-panel/
│ ├── public/
│ └── src/
│ ├── views/
│ ├── dashboard/
│ └── AdminApp.js
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
└── README.md

---

🛠️ Installation

1. Clone the Repository

git clone https://github.com/yourusername/zensoul.git
cd zensoul

2. Setup Backend

cd backend
npm install

Create a .env file:

PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret

Run backend server:

npm start

3. Setup Frontend

cd ../frontend
npm install
npm start

4. Setup Admin Panel

cd ../admin-panel
npm install
npm start

---

📄 License
This project is licensed under the MIT License.

---

Contact

Created by [Sushil Kantaria](https://github.com/sushilkantaria)  
📧 sushilkantaria22100@gmail.com  
