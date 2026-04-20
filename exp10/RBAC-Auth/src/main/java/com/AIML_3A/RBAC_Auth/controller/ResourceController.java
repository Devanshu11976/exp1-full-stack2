package com.AIML_3A.RBAC_Auth.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ResourceController {

    @GetMapping("/user/dashboard")
    public String userDashboard() {
        return "Welcome to User Dashboard — accessible by USER and ADMIN";
    }

    @GetMapping("/admin/dashboard")
    public String adminDashboard() {
        return "Welcome to Admin Dashboard — accessible by ADMIN only";
    }
}
