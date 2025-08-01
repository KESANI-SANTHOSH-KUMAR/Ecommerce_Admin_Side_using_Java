🛒 E-Commerce Admin Panel (Java Spring Boot + React)
This project is a full-stack e-commerce admin panel built using:

🧠 Backend: Java Spring Boot + MySQL + JWT Auth + Image Uploads

🎨 Frontend: React (Vite) + Axios + Modern UI with validation

✨ Features
👤 Admin Authentication
Register & Login with secure password encryption (BCrypt)

JWT-based token authentication for protected routes

📦 Product Management
Add, Edit, Delete, and View products

Upload product images and serve them dynamically

Image previews fetched via REST API

📡 Backend APIs (Spring Boot)
RESTful endpoints built using Spring Boot

Uses JdbcTemplate for DB interaction

CORS configured for frontend communication (http://localhost:5173)

Stores images in /uploads and serves via /uploads/{filename}

💻 Frontend (React + Vite)
Admin login & dashboard pages

Product form with validation

Axios for communicating with backend

Image preview, toast notifications, clean UI

🔐 JWT Auth
Login returns JWT token

Token is stored in localStorage and sent on requests

⚙️ Tech Stack
Layer	Technology
Frontend	React + Vite + Axios + CSS
Backend	Java Spring Boot
Database	MySQL
Auth	JWT, BCrypt
File Upload	MultipartFile (Spring), REST
Tools	VS Code, Postman, Git, Maven
