package com.example.usermanager.controllers;

import com.example.usermanager.model.User;
import com.example.usermanager.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2")
public class Controller {

    // CRUD Operation.
    @Autowired
    private UserRepository userRepository;

    /// Get All User
    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    /// Get a single user..
    @GetMapping("/users/{id}")
    public Optional<User>getSingleUser(@PathVariable String id) {
        return userRepository.findById(id);
    }

    /// delete an user
    @DeleteMapping("/users/delete/{id}")
    public String deleteAnUser(@PathVariable String id) {
        userRepository.deleteById(id);
        return "User deleted!";
    }

    /// Create a new user.
    @PostMapping("/user/add")
    public ResponseEntity<User>addUser(@RequestBody User newUser) {
        User save = this.userRepository.save(newUser);
        return ResponseEntity.ok(save);
    }
}
