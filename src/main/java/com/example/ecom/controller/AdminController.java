package com.example.ecom.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.ecom.model.Admin;

import org.springframework.web.bind.annotation.*;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class AdminController {

    @Autowired private JdbcTemplate jdbc;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Admin admin) {
        String hashed = new BCryptPasswordEncoder().encode(admin.getPassword());
        jdbc.update("INSERT INTO admins (username, password) VALUES (?, ?)", admin.getUsername(), hashed);
        return ResponseEntity.ok("Admin registered");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Admin admin) {
        List<Map<String, Object>> result = jdbc.queryForList("SELECT * FROM admins WHERE username = ?", admin.getUsername());
        if (result.isEmpty()) return ResponseEntity.status(401).body("Invalid credentials");

        String dbPassword = (String) result.get(0).get("password");
        boolean match = new BCryptPasswordEncoder().matches(admin.getPassword(), dbPassword);
        if (!match) return ResponseEntity.status(401).body("Invalid credentials");

        String token = JWT.create()
            .withSubject(String.valueOf(result.get(0).get("id")))
            .sign(Algorithm.HMAC256("secret_key"));

        return ResponseEntity.ok(Map.of("message", "Login successful", "token", token));
    }
}

