# 🎓 Experiment 8 – REST API with Spring Boot

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?style=for-the-badge&logo=springboot)
![Maven](https://img.shields.io/badge/Maven-Build-red?style=for-the-badge&logo=apachemaven)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?style=for-the-badge&logo=mysql)

A full-featured **Spring Boot REST API** project built with a clean layered MVC architecture. Supports complete **CRUD operations** via HTTP endpoints.

---

## 📁 Project Structure

```
Devanshu/demo/
├── 📂 controller/
│   └── StudentController.java     # Handles HTTP requests
├── 📂 model/
│   └── Student.java               # Entity / data class
├── 📂 repository/
│   └── StudentRepository.java     # Database access (JPA)
├── 📂 service/
│   └── StudentService.java        # Business logic
└── DemoApplication.java           # Main entry point
```

---

## ⚙️ Prerequisites

- Java **21**
- Maven
- MySQL running locally
- Postman (for testing)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd "Exp - 8"
```

### 2. Configure Database
Edit `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3. Run the Project
```bash
# Linux / Mac
./mvnw spring-boot:run

# Windows
mvnw.cmd spring-boot:run
```

Server starts at → `http://localhost:8080`

---

## 🔗 API Endpoints

Base URL: `http://localhost:8080/api/students`

| Method | Endpoint | Description |
|:------:|----------|-------------|
| ![GET](https://img.shields.io/badge/GET-61affe?style=flat-square) | `/api/students` | Fetch all students |
| ![GET](https://img.shields.io/badge/GET-61affe?style=flat-square) | `/api/students/{id}` | Fetch student by ID |
| ![POST](https://img.shields.io/badge/POST-49cc90?style=flat-square) | `/api/students` | Add new student |
| ![PUT](https://img.shields.io/badge/PUT-fca130?style=flat-square) | `/api/students/{id}` | Update student |
| ![DELETE](https://img.shields.io/badge/DELETE-f93e3e?style=flat-square) | `/api/students/{id}` | Delete student |
---

## 📦 Sample Request Body

**POST / PUT** → `Content-Type: application/json`
```json
{
  "id": 1,
  "name": "Devanshu",
  "course": "Computer Science"
}
```

---

## 📸 Screenshots

### ➕ POST – Add Student
![POST](Screenshorts/Post.png)

### 📋 GET – All Students
![GET](Screenshorts/Get.png)

### ✏️ PUT – Update Student
![PUT](Screenshorts/Put.png)

### 🗑️ DELETE – Delete Student
![DELETE](Screenshorts/Delete.png)


---

## 🛠️ Built With

- [Spring Boot](https://spring.io/projects/spring-boot) – Backend framework
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa) – Database ORM
- [MySQL](https://www.mysql.com/) – Relational database
- [Maven](https://maven.apache.org/) – Dependency management

---

## 👨‍💻 Author

**Devanshu**  
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)](https://github.com/Devanshu11976)

---

## 📄 License

This project is for educational purposes only.
