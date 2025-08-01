# 🛒 E-Commerce Admin Panel (Java Spring Boot + React)
## This project is a full-stack e-commerce admin panel built using:

🧠 Backend: Java Spring Boot + MySQL + JWT Auth + Image Uploads

🎨 Frontend: React (Vite) + Axios + Modern UI with validation

# ✨ Features
## 👤 Admin Authentication
- Register & Login with secure password encryption (BCrypt)

- JWT-based token authentication for protected routes

## 📦 Product Management
- Add, Edit, Delete, and View products

- Upload product images and serve them dynamically

- Image previews fetched via REST API

## 📡 Backend APIs (Spring Boot)
- RESTful endpoints built using Spring Boot

- Uses JdbcTemplate for DB interaction

- CORS configured for frontend communication (http://localhost:5173)

- Stores images in /uploads and serves via /uploads/{filename}

## 💻 Frontend (React + Vite)
- Admin login & dashboard pages

- Product form with validation

- Axios for communicating with backend

- Image preview, toast notifications, clean UI

## 🔐 JWT Auth
- Login returns JWT token

- Token is stored in localStorage and sent on requests

# ⚙️ Tech Stack
- Layer	Technology
- Frontend	React + Vite + Axios + CSS
- Backend	Java Spring Boot
- Database	MySQL
- Auth	JWT, BCrypt
- File Upload	MultipartFile (Spring), REST
- Tools	VS Code, Postman, Git, Maven
# Folder structure
📦 ecom Folder (you need to create ecom folder )
  - Add all the files and folders of this zip file into the ecom folder.
  - And open ecom folder in any IDE.
  - After opening navigate to **src folder in ecom folder** in terminal and run this cmd **mvnw spring-boot:run**.
  - And open new terminal navigate to frontend folder in terminal using **cd foldername** and run this cmd **npm install** and navigate to **src folder in frontend** folder and run this cmd **npm run dev** in terminal.
  - it will show up with a (http://localhost:5173) link like this click it it will open the login page first register there will be option to register and then login.
# 🛡 Security
- JWT authentication

- BCrypt password hashing

- CORS configuration for cross-origin frontend-backend access

