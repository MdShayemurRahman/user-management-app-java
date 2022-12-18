package com.example.usermanager.controllers;

import com.example.usermanager.exception.UserNotFoundException;
import com.example.usermanager.model.User;
import com.example.usermanager.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin("http://localhost:3000")
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

    /// update a user
    @PutMapping("/users/update/{id}")
    public User updateUser(
            @RequestBody User newUser,
            @PathVariable String id) throws UserPrincipalNotFoundException {
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirstName(newUser.getFirstName());
                    user.setLastName(newUser.getLastName());
                    user.setEmail(newUser.getEmail());
                    user.setPhoneNumber(newUser.getPhoneNumber());
                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    /// Create a new user.
    @PostMapping("/user/add")
    public ResponseEntity<User>addUser(@RequestBody User newUser) {
        User save = this.userRepository.save(newUser);
        return ResponseEntity.ok(save);
    }
}
