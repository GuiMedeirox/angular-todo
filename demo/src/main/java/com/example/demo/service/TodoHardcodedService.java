package com.example.demo.service;

import com.example.demo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static int todoCounter=0;

    private static List<Todo> todoList = new ArrayList<>(
            List.of(
                    new Todo(++todoCounter,"gmx", "Learn Java", false, new Date()),
                    new Todo(++todoCounter,"gmx", "Learn Angular", false, new Date()),
                    new Todo(++todoCounter,"gmx", "Learn English", true, new Date())
            )
    );

    public List<Todo> findAll(){
        return todoList;
    }

    public Todo deleteById(long id){
        if( findById(id) != null){
            var todo = findById(id);
            todoList.remove(findById(id));
            return todo;
        }
        return null;
    }

    public Todo findById(long id){
        for(Todo f : todoList){
            if(id == f.getId()){
                return f;
            }
        }
        return null;
    }

}