<div align="center">

# 💬 Real-Time Chat App

### Full-Stack WebSocket Chat Application

[![React](https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge\&logo=react\&logoColor=white)](https://react.dev/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Backend-brightgreen?style=for-the-badge\&logo=springboot\&logoColor=white)](https://spring.io/projects/spring-boot)
[![WebSocket](https://img.shields.io/badge/WebSocket-RealTime-orange?style=for-the-badge\&logo=websocket\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
[![STOMP](https://img.shields.io/badge/STOMP-Protocol-black?style=for-the-badge)](https://stomp.github.io/)
[![Maven](https://img.shields.io/badge/Maven-Build-red?style=for-the-badge\&logo=apachemaven\&logoColor=white)](https://maven.apache.org/)

<p>A modern <strong>real-time chat application</strong> built using React and Spring Boot with WebSocket communication.</p>

</div>

---

## 📋 Table of Contents

* [Overview](#-overview)
* [Tech Stack](#️-tech-stack)
* [Project Structure](#-project-structure)
* [Getting Started](#-getting-started)
* [WebSocket Flow](#-websocket-flow)
* [Screenshots](#-screenshots)
* [Features](#-features)
* [Author](#-author)

---

## 🧠 Overview

This project is a **full-stack real-time chat application** that enables multiple users to communicate instantly.

### Key Highlights:

* ⚡ Real-time messaging using WebSockets
* 👤 Username-based chat system
* 🔄 Bi-directional communication (client ↔ server)
* 🎨 Modern UI with message alignment

---

## 🛠️ Tech Stack

| Technology     | Purpose                 |
| :------------- | :---------------------- |
| ⚛️ React       | Frontend UI             |
| 🌐 SockJS      | WebSocket fallback      |
| 📡 STOMP.js    | Messaging protocol      |
| 🍃 Spring Boot | Backend framework       |
| 🔌 WebSocket   | Real-time communication |
| 📦 Maven       | Build tool              |

---

## 📁 Project Structure

```id="n2pj1v"
exp10/
├── 📂 frontend/
│   ├── src/
│   │   ├── 📂 Components/
│   │   │   ├── Chat.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── Chat.css
│   │   ├── App.js
│   ├── package.json
│
├── 📂 backend/
│   ├── 📂 controller/
│   │   ├── ChatController.java
│   ├── 📂 model/
│   │   ├── Message.java
│   ├── 📂 config/
│   │   ├── WebSocketConfig.java
│   ├── Application.java
```

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js (v16+)
* Java (v17+)
* Maven

---

### 🔹 Backend Setup

```bash id="3lp2tr"
cd backend
mvn spring-boot:run
```

➡ Runs on:

```
http://localhost:8080
```

---

### 🔹 Frontend Setup

```bash id="g6ojh5"
cd frontend
npm install
npm start
```

➡ Runs on:

```
http://localhost:3000
```

---

## 🔌 WebSocket Flow

```
Client (React)
     │
     ▼
 /app/chat  ───────►  Spring Boot Controller
     │
     ▼
 /topic/messages  ◄──── Broadcast to all users
```

---

## 📸 Screenshots

👉 Add your screenshots here
(You can paste images after pushing repo)

---

## ✨ Features

* 💬 Real-time messaging
* 👤 Username-based chat (no anonymous spam)
* ↔️ Left-right message alignment
* 🔁 Auto message updates
* 🎨 Clean UI

---

## 🔄 How It Works

```
User enters name
        │
        ▼
Frontend connects to WebSocket (/ws)
        │
        ▼
User sends message → /app/chat
        │
        ▼
Backend processes message
        │
        ▼
Broadcast to /topic/messages
        │
        ▼
All clients receive message instantly
```

---

## 👨‍💻 Author

<div align="center">

**Devanshu Sharma**

*Built with ❤️ using React & Spring Boot*

</div>
