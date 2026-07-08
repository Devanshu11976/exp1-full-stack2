package com.AIML_3A.JWT_Auth.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.AIML_3A.JWT_Auth.model.User;



public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

}
