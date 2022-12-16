package com.example.usermanager.repo;

import com.example.usermanager.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository
        extends MongoRepository<User, String> {
        Optional<User> findUserByEmail(String email);
}
