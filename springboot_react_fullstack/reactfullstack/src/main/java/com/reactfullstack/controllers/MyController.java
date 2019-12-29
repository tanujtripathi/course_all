package com.reactfullstack.controllers;

import com.reactfullstack.model.Todo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin({"http://localhost:3000"})
public class MyController {
    private List<Todo> todos = Arrays.asList(new Todo(1, "tanuj"));

    @GetMapping("/todos")
    public List<Todo> getTodoList() {
        return todos;
    }
}
