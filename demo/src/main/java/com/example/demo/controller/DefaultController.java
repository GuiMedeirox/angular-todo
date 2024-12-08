package com.example.demo.controller;

import com.example.demo.model.Todo;
import com.example.demo.service.TodoHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class DefaultController {

    @Autowired
    private TodoHardcodedService todoService;

    @GetMapping(value="/")
    public HashMap<String, String> defaultMethod(){
        var a = new HashMap<String, String>();
        a.put("message", "Hello, this is a response made in Spring API");
        return a;
    }

    @GetMapping(path="/path-variable/{username}")
    public HashMap<String, String> defaultMethod(@PathVariable String username){
        var a = new HashMap<String, String>();
        a.put("message", "Hello, " +username  +" this is a response made in Spring API");
        return a;
    }

    @GetMapping(path="/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findAll();
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo (@PathVariable long id, @PathVariable String username){
        var todo = todoService.deleteById(id);
        if(todo!=null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
