package com.example.usermanager;

import com.example.usermanager.model.Address;
import com.example.usermanager.model.Gender;
import com.example.usermanager.model.User;
import com.example.usermanager.repo.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

@SpringBootApplication
public class UsermanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermanagerApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(
			UserRepository repository, MongoTemplate mongoTemplate) {
		return args -> {
			Address address = new Address(
					"Bangladesh",
					"Sylhet",
					"6230"
			);
			String email = "saym@gmail.com";
			User user = new User(
					"sayem99",
					"user",
					email,
					"044985",
					Gender.MALE,
					address,
					"sw"
			);


			// check if the user exist or not (matching email).
			// usingMongoTemplateAndQuery(repository, mongoTemplate, email, user);

			repository.findUserByEmail(email)
					.ifPresentOrElse(s -> {
						System.out.println("User already exists!!");
					}, () -> {
						System.out.println("New User Created!");
						repository.insert(user);
					});
		};
	}

	private static void usingMongoTemplateAndQuery(UserRepository repository, MongoTemplate mongoTemplate, String email, User user) {
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));

		List <User> users = mongoTemplate.find(query, User.class);

		if(users.size() > 1) {
			throw new IllegalStateException(
					"Found this Email used by other user " + email);
		}

		if(users.isEmpty()) {
			System.out.println("New User Created!");
			repository.insert(user);
		} else {
			System.out.println("User already exists!!");
		}
	}
}
