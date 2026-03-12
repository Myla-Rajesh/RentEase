# 🏡 RentEase

**RentEase** is a full-stack property rental management system built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

It connects **property owners and renters** through a secure and intuitive platform where properties can be listed, discovered, and booked easily.

---

# ✨ Key Features

The system implements **Role-Based Access Control (RBAC)** for three different user roles.

---

## 🧑‍💼 For Renters (Users)

- **Browse Properties**
  - View available rental properties with images and descriptions.

- **Property Booking**
  - Book properties for selected dates.

- **User Dashboard**
  - Manage profile
  - View booking history
  - Track booking status

---

## 🏠 For Property Owners

- **Property Management**
  - Add new properties
  - Update property details
  - Delete property listings

- **Booking Management**
  - View booking requests from renters
  - Accept or manage booking requests

- **Owner Dashboard**
  - Monitor property performance
  - Track availability

---

## 🛡️ For Administrators

- **Admin Dashboard**
  - View platform activity

- **User Management**
  - Monitor and manage renters and property owners

- **Listing & Booking Oversight**
  - Access all properties and bookings
  - Resolve disputes or remove inappropriate listings

---

## 🔒 General Features

- **Authentication & Authorization**
  - Secure login and registration using **JWT (JSON Web Tokens)**

- **Password Security**
  - Password hashing using **bcrypt**

- **Responsive UI**
  - Mobile-friendly and desktop compatible design

---

# 🛠️ Technology Stack

## Frontend
- React.js
- HTML5
- CSS3
- React Router DOM

## Backend
- Node.js
- Express.js
- JWT (Authentication)
- bcrypt (Password hashing)

## Database
- MongoDB
- Mongoose (ODM)

---

# 📂 Project Structure

```
RentEase/
│
├── backend/
│   ├── config/            # Database configuration
│   ├── controllers/       # Business logic
│   ├── middlewares/       # Authentication middleware
│   ├── routes/            # API routes
│   ├── schemas/           # MongoDB models
│   │     ├── User.js
│   │     ├── Property.js
│   │     └── Booking.js
│   ├── uploads/           # Uploaded property images
│   ├── index.js           # Backend entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── images/
│   │   ├── modules/
│   │   │   ├── admin/
│   │   │   ├── common/
│   │   │   ├── user/Owner/
│   │   │   └── user/renter/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── Project templates/
    ├── FSD Documentation
    ├── System Architecture
    └── DFD Diagrams
```

---

# 🚀 Installation & Setup

Follow the steps below to run the project locally.

---

## Prerequisites

Make sure the following are installed:

- Node.js
- MongoDB (Local installation)  
  **or**
- MongoDB Atlas (Cloud Database)

---

# 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/rentease.git
cd rentease
```

---

# 2️⃣ Backend Setup

Navigate to the backend folder and install dependencies.

```bash
cd backend
npm install
```

Create a **.env** file inside the backend folder.

```
backend/.env
```

Add the following configuration:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_super_secret_jwt_key
```

Start the backend server:

```bash
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

# 3️⃣ Frontend Setup

Open a **new terminal**.

```bash
cd frontend
npm install
npm start
```

React application will run on:

```
http://localhost:3000
```

---

# 📡 API Endpoints (Overview)

The backend exposes **REST APIs** grouped by roles.

---

## 🔐 Auth Routes

```
/api/auth/register
/api/auth/login
/api/auth/forgot-password
```

---

## 👑 Admin Routes

```
/api/admin/users
/api/admin/properties
/api/admin/bookings
```

Admin can manage all users, properties, and bookings.

---

## 🏠 Owner Routes

```
/api/owner/add-property
/api/owner/my-properties
/api/owner/bookings
```

Owners can manage their own listings and booking requests.

---

## 👤 User Routes

```
/api/user/properties
/api/user/book-property
/api/user/my-bookings
```

Users can browse and book properties.

---

**Note:**  
All protected routes require a **Bearer Token** generated after login.

Example:

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 🤝 Contributing

Contributions are welcome.

Follow these steps:

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m "Add some AmazingFeature"
```

4. Push to the branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

# 📜 License

This project is open source and available under the **MIT License**.

---

# ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
