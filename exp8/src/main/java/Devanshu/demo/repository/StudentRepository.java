package Devanshu.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import Devanshu.demo.model.Student;


public interface StudentRepository extends JpaRepository<Student,Integer>{
}