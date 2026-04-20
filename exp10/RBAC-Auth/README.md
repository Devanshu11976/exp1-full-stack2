<div align="center">

# 🔐 RBAC-Auth

### Role-Based Access Control with JSON Web Tokens

[![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=java&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.5-brightgreen?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-✔-brightgreen?style=for-the-badge&logo=springsecurity&logoColor=white)](https://spring.io/projects/spring-security)
[![Maven](https://img.shields.io/badge/Maven-Build-red?style=for-the-badge&logo=apachemaven&logoColor=white)](https://maven.apache.org/)
[![JWT](https://img.shields.io/badge/JWT-Auth-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

<p>A production-ready <strong>Spring Boot</strong> REST API implementing <strong>Role-Based Access Control (RBAC)</strong> using JWT — extending JWT authentication with granular role-based authorization.</p>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [How It Works](#-how-it-works)
- [Configuration](#️-configuration)
- [Author](#-author)

---

## 🧠 Overview

**RBAC-Auth** is a RESTful authorization service built with **Spring Boot 3.3.5** and **Java 21**. It provides:

- ✅ User **Registration** with role assignment (`ROLE_USER` / `ROLE_ADMIN`)
- ✅ **JWT Token** generation with embedded role claim
- ✅ **Role-protected routes** — different resources per role
- ✅ **JWT Filter** validates token and sets security context on every request
- ✅ Stateless, scalable authorization — no sessions needed

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|:---|:---:|:---|
| ☕ Java | 21 | Core language |
| 🍃 Spring Boot | 3.3.5 | Application framework |
| 🔒 Spring Security | via Boot | Authentication & authorization |
| 🌐 Spring Web | via Boot | REST API layer |
| 🔑 JWT | 0.11.5 | Token generation & validation |
| 🗄️ Spring Data JPA | via Boot | Data persistence |
| 🐬 MySQL | — | Relational database |
| 📦 Maven | — | Build & dependency management |

---

## 📁 Project Structure

```
RBAC-Auth/
├── 📂 src/main/java/com.AIML_3A.RBAC_Auth/
│   ├── 🚀 RbacAuthApplication.java           ← Entry point
│   ├── 📂 config/
│   │   └── SecurityConfig.java               ← Spring Security + role rules
│   ├── 📂 controller/
│   │   ├── AuthController.java               ← /register, /login
│   │   └── ResourceController.java           ← Role-protected endpoints
│   ├── 📂 model/
│   │   ├── Role.java                         ← ROLE_USER / ROLE_ADMIN enum
│   │   └── User.java                         ← User entity with role
│   ├── 📂 repository/
│   │   └── UserRepository.java               ← Data access layer
│   ├── 📂 security/
│   │   ├── JwtUtil.java                      ← JWT generation & validation
│   │   └── JwtFilter.java                    ← Token extraction per request
│   └── 📂 service/
│       └── AuthService.java                  ← Business logic
├── 📂 src/main/resources/
│   └── application.properties
├── 📄 pom.xml
└── 📄 README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java **21+**
- Maven **3.8+**
- MySQL **8+** running locally

### ⚡ Setup

```bash
# 1️⃣ Create the database
mysql -u root -p
CREATE DATABASE rbac_demo;

# 2️⃣ Build the project
mvn clean install

# 3️⃣ Run the application
mvn spring-boot:run
```

> 🌐 Server starts at **`http://localhost:8080`**

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required | Role |
|:---:|:---|:---|:---:|:---:|
| `POST` | `/api/register` | Register a new user | ❌ | — |
| `POST` | `/api/login` | Login & receive JWT token | ❌ | — |
| `GET` | `/api/user/dashboard` | User resource | ✅ | USER / ADMIN |
| `GET` | `/api/admin/dashboard` | Admin resource | ✅ | ADMIN only |

---

### 🔸 Register as USER

```http
POST /api/register
Content-Type: application/x-www-form-urlencoded

username=john&password=john123&role=ROLE_USER
```

### 🔸 Register as ADMIN

```http
POST /api/register
Content-Type: application/x-www-form-urlencoded

username=admin&password=admin123&role=ROLE_ADMIN
```

### 🔸 Login & Get Token

```http
POST /api/login
Content-Type: application/x-www-form-urlencoded

username=admin&password=admin123
```

**✅ Response:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 🔸 Access User Route

```http
GET /api/user/dashboard
Authorization: Bearer <token>
```

### 🔸 Access Admin Route

```http
GET /api/admin/dashboard
Authorization: Bearer <admin_token>
```

---

## 🔄 How It Works

```
  Client               JwtFilter              SecurityConfig         Controller
    │                      │                       │                     │
    │─── POST /login ──────────────────────────────────────────────────►│
    │◄── JWT (role=ADMIN) ─────────────────────────────────────────────│
    │                      │                       │                     │
    │─── GET /admin/── ───►│                       │                     │
    │   Bearer Token        │── extractRole() ─────►│                     │
    │                      │                       │── hasAuthority ─────►│
    │                      │                       │   (ROLE_ADMIN)       │
    │◄── 200 / 403 ────────────────────────────────────────────────────│
```

---

## ⚙️ Configuration

Edit `src/main/resources/application.properties`:

```properties
# 🌐 Server
server.port=8080

# 🗄️ Database
spring.datasource.url=jdbc:mysql://localhost:3306/rbac_demo
spring.datasource.username=root
spring.datasource.password=your_password

# 🔑 JWT
jwt.secret=myverysecuresecretkeymyverysecuresecretkey
jwt.expiration=86400000   # 24 hours
```

---

## 👨‍💻 Author

<div align="center">

**Devanshu Sharma**

*Built with ❤️ using Spring Boot, Spring Security & JWT*

</div>
