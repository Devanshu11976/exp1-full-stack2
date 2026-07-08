package Devanshu.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Devanshu.demo.model.Student;
import Devanshu.demo.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // GET all students
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // GET by ID ✅ fixed deprecated getById()
    public Student getStudentById(int id) {
        return repository.findById(id).orElse(null);
    }

    // POST - save new student
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // PUT - update student ✅ ADDED
    public Student updateStudent(Student student) {
        return repository.save(student);
    }

    // DELETE - delete student ✅ ADDED
    public void deleteStudent(int id) {
        repository.deleteById(id);
    }
}