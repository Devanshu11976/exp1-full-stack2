package com.AIML_3A.RBAC_Auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.AIML_3A.RBAC_Auth.model.Role;
import com.AIML_3A.RBAC_Auth.model.User;
import com.AIML_3A.RBAC_Auth.repository.UserRepository;
import com.AIML_3A.RBAC_Auth.security.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String register(String username, String password, String role) {
        if (userRepository.findByUsername(username) != null) {
            return "Username already exists";
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(Role.valueOf(role.toUpperCase()));
        userRepository.save(user);
        return "User registered successfully";
    }

    public String login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            return jwtUtil.generateToken(username, user.getRole().name());
        }
        return "Invalid Credentials";
    }
}
