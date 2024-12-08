package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class Todo {

    private long id;
    private String username;
    private String description;
    private Date dateAssigned;
    @JsonProperty("isDone")
    private Boolean isDone;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDateAssigned() {
        return dateAssigned;
    }

    public void setDateAssigned(Date dateAssigned) {
        this.dateAssigned = dateAssigned;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public Todo(long id, String username, String description, boolean isDone, Date targetDate){
        this.id=id;
        this.username=username;
        this.description=description;
        this.isDone=isDone;
        this.dateAssigned=targetDate;
    }


}