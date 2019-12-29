package com.example.docker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class DockerDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DockerDemoApplication.class, args);
    }

}

@RestController
class MyRestController {

    @PostConstruct
    public void pre(){

        System.out.println("HERE");
    }
    @GetMapping("/hello")
    public String myMethod() {
        return "Hello";
    }
}
