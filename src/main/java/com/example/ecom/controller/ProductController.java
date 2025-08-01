package com.example.ecom.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.core.io.UrlResource;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired private JdbcTemplate jdbc;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("/add-product")
    public ResponseEntity<?> addProduct(@RequestParam String name,
                                        @RequestParam double price,
                                        @RequestParam String description,
                                        @RequestParam(required = false) MultipartFile image) throws IOException {

        String fileName = null;
        if (image != null && !image.isEmpty()) {
            fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
            File saveFile = new File(uploadDir, fileName);
            saveFile.getParentFile().mkdirs();
            image.transferTo(saveFile);
        }

        jdbc.update("INSERT INTO products (name, price, description, image) VALUES (?, ?, ?, ?)",
                name, price, description, fileName);

        return ResponseEntity.ok("Product added");
    }

    @GetMapping("/products")
    public ResponseEntity<?> getProducts() {
        List<Map<String, Object>> results = jdbc.queryForList("SELECT * FROM products");
        return ResponseEntity.ok(results);
    }
    @GetMapping("/uploads/{filename}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) throws IOException {
        Path filePath = Paths.get(uploadDir).resolve(filename).normalize();
        Resource resource = new UrlResource(filePath.toUri());

        if (!resource.exists()) {
            return ResponseEntity.notFound().build();
        }

        
        MediaType contentType;
           if (filename.toLowerCase().endsWith(".png")) {
                contentType = MediaType.IMAGE_PNG;
            } else if (filename.toLowerCase().endsWith(".jpg") || filename.toLowerCase().endsWith(".jpeg")) {
                contentType = MediaType.IMAGE_JPEG;
            } else {
                contentType = MediaType.APPLICATION_OCTET_STREAM; // fallback
            }

        return ResponseEntity.ok()
                .contentType(contentType)
                .body(resource);
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id) {
        jdbc.update("DELETE FROM products WHERE id = ?", id);
        return ResponseEntity.ok("Product deleted");
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editProduct(@PathVariable int id,
                                         @RequestParam String name,
                                         @RequestParam double price,
                                         @RequestParam String description,
                                         @RequestParam(required = false) MultipartFile image) throws IOException {

        String fileName = null;
        if (image != null && !image.isEmpty()) {
            fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
            File saveFile = new File(uploadDir, fileName);
            saveFile.getParentFile().mkdirs();
            image.transferTo(saveFile);
        }

        jdbc.update("UPDATE products SET name = ?, price = ?, description = ?, image = ? WHERE id = ?",
                name, price, description, fileName, id);

        return ResponseEntity.ok("Product updated");
    }
}

