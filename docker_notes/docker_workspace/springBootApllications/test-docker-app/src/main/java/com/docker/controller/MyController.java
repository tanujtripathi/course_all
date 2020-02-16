package com.docker.controller;

import com.docker.model.MyPojo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/hello")
    public MyPojo hello() {
        return MyPojo.builder().name("Tanuj").adress("Some address").build();
    }
}