# 🚀 Zerodha Clone — Production-Style Full Stack Trading Platform (MERN)

A production-oriented full-stack Zerodha-inspired trading platform built with the MERN stack. This project replicates core brokerage workflows including secure authentication, portfolio tracking, order placement, and dashboard analytics using a modular REST API architecture.

This is not just a UI clone — it demonstrates backend engineering, API design, authentication security, and scalable full-stack structure.

---

## 🎯 Project Objectives

- Build a realistic trading-style platform end-to-end  
- Implement secure authentication & protected APIs  
- Design modular backend architecture  
- Simulate portfolio and order lifecycle  
- Apply production-style middleware patterns  
- Demonstrate clean frontend–backend separation  

---

## ✨ Core Features

- 🔐 JWT-based authentication & protected routes  
- 🔒 Password hashing with bcrypt  
- 👤 Secure signup & login flow  
- 📊 Portfolio dashboard (holdings & positions)  
- 💹 Order placement & tracking workflow  
- 📦 Modular Express route–controller structure  
- 🧠 Middleware-based validation & auth guard  
- 🗄️ MongoDB schema-driven models  
- 🔁 RESTful API design  
- 📱 Responsive React UI  

---

## 🧱 System Architecture

 React Frontend
↓ Axios API Calls
Node.js + Express Backend
↓ Controllers
Business Logic Layer
↓
MongoDB (Mongoose Models)
---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5 / CSS3
- Axios

### Backend
- Node.js
- Express.js
- REST API architecture
- JWT Authentication
- Custom middleware

### Database
- MongoDB
- Mongoose ODM

### Tools
- Git & GitHub
- Postman
- dotenv
- Render / Vercel (if deployed)

---

## 🔐 Security Implementation

- JWT token authentication
- Password hashing (bcrypt)
- Protected route middleware
- Token verification layer
- Environment variable secrets
- Input validation

---

## 📂 Project Structure

ZERODHA_CLONE/
├── client/
│ ├── components/
│ ├── pages/
│ └── services/
├── server/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ └── config/
---

## 🔌 API Modules

### Auth APIs
- POST /signup
- POST /login
- JWT token generation
- Auth middleware validation

### Portfolio APIs
- Get holdings
- Get positions
- Portfolio aggregation

### Order APIs
- Place order
- Fetch orders
- Order status tracking

---

## ⚙️ Local Setup

### Clone Repository
git clone https://github.com/Tanyakumari5/ZERODHA_CLONE
cd ZERODHA_CLONE

### Install Dependencies
npm install
cd client
npm instal

### Environment Variables (.env in server folder)
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

### Run Backend
npm start

### Run Frontend
cd client
npm start
---

## 🧪 Testing

- API endpoints tested using Postman  
- Authentication & token flow verified  
- Protected routes validated  
- CRUD operations tested  
- Error handling responses checked  

---

## 📈 Engineering Highlights

- Modular backend architecture  
- Middleware-driven security  
- Schema-first database modeling  
- REST API consistency  
- Clean separation of concerns  
- Scalable folder structure  
- Token-based session handling  

---

## 🚀 Future Enhancements

- Live market data integration  
- WebSocket real-time price updates  
- Order matching engine simulation  
- Role-based access control  
- Rate limiting middleware  
- Docker containerization  

---

## 🎓 Skills Demonstrated

- Full-stack MERN development  
- Backend API architecture  
- Authentication & security patterns  
- MongoDB schema design  
- Middleware engineering  
- Frontend–backend integration  

---

## 👩‍💻 Author

**Tanya Kumari**  
Full Stack MERN Developer  
GitHub: https://github.com/Tanyakumari5

---

## ⭐ Project Value

This project demonstrates production-style full-stack and backend engineering patterns aligned with startup and internship-level software engineering roles.

If this project helped you, consider starring the repository.

