package com.tanuj.hibernate.controller;

import com.tanuj.hibernate.entities.Student;
import com.tanuj.hibernate.entities.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
public class MyController {

    @Autowired
    private StudentRepository repository;

    @GetMapping("/save")
    public String saveInStudent() {
        Student student = new Student("Tanuj", "Tripathi", "tanujtripathi93@gmail.com");

        List<String> images = student.getImages();
        images.add("myImage1");
        images.add("myImage1");
        images.add("myImage1");

        repository.save(student);
        return "Success";
    }
}
