# 🌍 WanderLust – Airbnb Clone

WanderLust is a full-stack web application inspired by Airbnb that allows users to explore, create, edit, and review travel accommodations. It provides a seamless booking-style experience with secure authentication, image uploads, interactive maps, and responsive design.

---

## 🚀 Live Demo

> **Coming Soon**

## ✨ Features

- 🔐 User Authentication (Signup, Login & Logout)
- 🏡 Create, Edit & Delete Listings
- 📷 Image Upload using Cloudinary
- ⭐ Add Reviews & Ratings
- 📍 Interactive Maps with Leaflet + OpenStreetMap
- 🔍 Browse Travel Listings
- 📱 Fully Responsive UI
- 🛡️ Server-side Validation
- ⚠️ Flash Messages
- 🔒 Secure Session Authentication
- ❌ Custom Error Handling

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local Strategy
- Express Session

### Image Storage
- Cloudinary
- Multer

### Maps
- Leaflet
- OpenStreetMap

### Other Tools
- Git
- GitHub
- Postman
- Joi Validation
- Method Override
- Connect Flash

---

## 📂 Project Structure

```
WanderLust
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── classroom/
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/pkmallick/WanderLust.git
```

### 2. Navigate to the project

```bash
cd WanderLust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add the following environment variables:

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret
```

### 5. Run the application

```bash
node app.js
```

or

```bash
npm start
```

Visit:

```
http://localhost:8080
```

---

## 📦 NPM Packages Used

- express
- mongoose
- ejs
- ejs-mate
- passport
- passport-local
- express-session
- connect-flash
- method-override
- multer
- cloudinary
- multer-storage-cloudinary
- joi
- dotenv

---

## 📖 Learning Outcomes

This project helped me learn:

- RESTful Routing
- MVC Architecture
- Authentication & Authorization
- CRUD Operations
- MongoDB Integration
- Image Upload & Storage
- Server-side Validation
- Session Management
- Git & GitHub Workflow
- Full Stack Web Development

---

## 🚀 Future Enhancements

- ❤️ Wishlist Feature
- 💳 Online Payments
- 📅 Booking System
- 🔍 Advanced Search & Filters
- 🌐 Social Login (Google/GitHub)
- 📧 Email Verification
- 📍 Nearby Places Recommendation

---

## 👨‍💻 Author

**Prakash Kumar Mallick**

- GitHub: https://github.com/pkmallick

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to build more exciting projects!
