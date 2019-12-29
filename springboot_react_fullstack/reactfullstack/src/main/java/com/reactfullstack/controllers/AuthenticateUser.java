package com.reactfullstack.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class AuthenticateUser {

    @GetMapping("/authenticate")
    public String authenticateUser() {
        //TODO get Details from DB
        return "Authenticated";
    }

}
