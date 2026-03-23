package Devanshu.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import Devanshu.demo.model.Student;
import org.springframework.web.bind.annotation.DeleteMapping;
import Devanshu.demo.service.StudentService;


@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
    private StudentService service;

    @GetMapping
    public List<Student> getStudents() {
        return service.getAllStudents();
    }
    
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable int id) {
    	return service.getStudentById(id);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        student.setId(id);
        return service.updateStudent(student);
    }

    // DELETE - delete student ✅ ADD THIS
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
        return "Student " + id + " deleted successfully";
    }
}