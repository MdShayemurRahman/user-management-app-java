package com.example.usermanager;

import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {
    @GetMapping(value = "/all")
    public String helloWorld() {
        return "Hello";
    }

}
