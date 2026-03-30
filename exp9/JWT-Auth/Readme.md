<div align="center">

# 🔐 JWT-Auth

### Secure Authentication System with JSON Web Tokens

[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=java&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.5-brightgreen?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-✔-brightgreen?style=for-the-badge&logo=springsecurity&logoColor=white)](https://spring.io/projects/spring-security)
[![Maven](https://img.shields.io/badge/Maven-Build-red?style=for-the-badge&logo=apachemaven&logoColor=white)](https://maven.apache.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

<p>A production-ready <strong>Spring Boot</strong> REST API with JWT-based authentication and authorization — built clean, fast, and secure.</p>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [How It Works](#-how-it-works)
- [Configuration](#️-configuration)
- [Author](#-author)

---

## 🧠 Overview

**JWT-Auth** is a RESTful authentication service built with **Spring Boot 3.3.5** and **Java 21**. It provides:

- ✅ User **Registration** & **Login**
- ✅ **JWT Token** generation on successful login
- ✅ **Protected routes** accessible only with a valid Bearer token
- ✅ Stateless, scalable authentication — no sessions needed

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|:---|:---:|:---|
| ☕ Java | 21 | Core language |
| 🍃 Spring Boot | 3.3.5 | Application framework |
| 🔒 Spring Security | via Boot | Authentication & authorization |
| 🌐 Spring Web | via Boot | REST API layer |
| 🔑 JWT | — | Token generation & validation |
| 📦 Maven | — | Build & dependency management |

---

## 📁 Project Structure

```
JWT-Auth/
├── 📂 src/main/java/com.AIML_3A.JWT_Auth/
│   ├── 🚀 JwtAuthApplication.java        ← Entry point
│   ├── 📂 config/
│   │   └── SecurityConfig.java           ← Spring Security setup
│   ├── 📂 controller/
│   │   └── AuthController.java           ← REST endpoints
│   ├── 📂 model/
│   │   └── User.java                     ← User entity
│   ├── 📂 repository/
│   │   └── UserRepository.java           ← Data access layer
│   ├── 📂 security/
│   │   └── JwtUtil.java                  ← JWT generation & validation
│   └── 📂 service/
│       └── AuthService.java              ← Business logic
├── 📂 src/main/resources/
├── 📄 pom.xml
└── 📄 README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java **21+**
- Maven **3.8+**

### ⚡ Clone & Run

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/JWT-Auth.git
cd JWT-Auth

# 2️⃣ Build the project
mvn clean install

# 3️⃣ Run the application
mvn spring-boot:run
```

> 🌐 Server starts at **`http://localhost:8080`**

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
|:---:|:---|:---|:---:|
| `POST` | `/api/register` | Register a new user | ❌ |
| `POST` | `/api/login` | Login & receive JWT token | ❌ |
| `GET` | `/api/hello` | Access protected resource | ✅ Bearer Token |

---

### 🔸 Register

```http
POST /api/register
Content-Type: application/x-www-form-urlencoded

username=admin&password=admin
```

---

### 🔸 Login & Get Token

```http
POST /api/login
Content-Type: application/x-www-form-urlencoded

username=admin&password=admin
```

**✅ Response:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6...
```

---

### 🔸 Access Protected Route

```http
GET /api/hello
Authorization: Bearer <your_jwt_token>
```

**✅ Response:**
```
Hello! JWT Authentication Successful
```

---

## 📸 Screenshots

### 🔑 Token Generated — `POST /api/login`

![JWT Token Generated](screenshots/Screenshot_2026-03-30_105550.png)

> **200 OK** &nbsp;•&nbsp; JWT token returned in `503ms` &nbsp;•&nbsp; `466 B`

---

### ✅ Protected Route Access — `GET /api/hello`

![JWT Authentication Successful](screenshots/Screenshot_2026-03-30_105520.png)

> **200 OK** &nbsp;•&nbsp; `Hello! JWT Authentication Successful` &nbsp;•&nbsp; `221ms`

---

## 🔄 How It Works

```
  Client               AuthController          AuthService            JwtUtil
    │                        │                      │                     │
    │─── POST /api/login ───►│                      │                     │
    │                        │─── authenticate() ──►│                     │
    │                        │                      │─── generateToken() ►│
    │                        │                      │◄── JWT Token ───────│
    │◄─── JWT Token ─────────│◄─── JWT Token ───────│                     │
    │                        │                      │                     │
    │─── GET /api/hello ────►│                      │                     │
    │    (Bearer Token)       │──── validateToken() ──────────────────── ►│
    │                        │◄─── ✅ valid / ❌ 401 ────────────────────│
    │◄─── 200 / 401 ─────────│                      │                     │
```

---

## ⚙️ Configuration

Edit `src/main/resources/application.properties`:

```properties
# 🌐 Server
server.port=8080

# 🔑 JWT Settings
jwt.secret=your-secret-key-here
jwt.expiration=86400000        # Token valid for 24 hours

# 🗄️ Database (H2 in-memory for dev)
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=
```

---

## 👨‍💻 Author

<div align="center">

**Devanshu Sharma**

[![GitHub](https://img.shields.io/badge/GitHub-your--username-181717?style=for-the-badge&logo=github)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-profile)

*Built with ❤️ using Spring Boot & JWT*

</div>