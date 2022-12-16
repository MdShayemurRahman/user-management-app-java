package com.example.usermanager;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class User {

    @Id // annotate with id
    private String id;

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Gender gender;
    private Address address;
    private String occupation;

    public User(String firstName,
                String lastName,
                String email,
                String phoneNumber,
                Gender gender,
                Address address,
                String occupation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.address = address;
        this.occupation = occupation;
    }
}