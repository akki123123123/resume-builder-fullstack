package com.example.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.auth.model.User;
import com.example.auth.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    // -------- Email Validation --------
    private boolean isValidEmail(String email) {
        return email != null && email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");
    }


    // -------- Mobile Validation --------
    private boolean isValidMobile(String mobile) {
        return mobile != null && mobile.matches("^[0-9]{10}$");
    }


    // -------- Register Method --------
    public String register(User user) {

        String email = user.getEmail();
        String mobile = user.getMobile();

        if ((email == null || email.isEmpty()) && (mobile == null || mobile.isEmpty())) {
            return "Please enter email or mobile number";
        }

        // Email validation
        if (email != null && !email.isEmpty()) {

            if (!isValidEmail(email)) {
                return "Invalid email format";
            }

            if (userRepository.findByEmail(email).isPresent()) {
                return "Email already registered";
            }
        }

        // Mobile validation
        if (mobile != null && !mobile.isEmpty()) {

            if (!isValidMobile(mobile)) {
                return "Mobile number must be 10 digits";
            }

            if (userRepository.findByMobile(mobile).isPresent()) {
                return "Mobile number already registered";
            }
        }

        // Encrypt password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return "Registration successful!";
    }


    // -------- Login Method --------
    public String login(String email, String mobile, String password) {

        Optional<User> user = Optional.empty();

        // Login using email
        if (email != null && !email.isEmpty()) {

            if (!isValidEmail(email)) {
                return "Invalid email format";
            }

            user = userRepository.findByEmail(email);
        }

        // Login using mobile
        if (mobile != null && !mobile.isEmpty()) {

            if (!isValidMobile(mobile)) {
                return "Invalid mobile number";
            }

            user = userRepository.findByMobile(mobile);
        }

        if (user.isPresent()) {

            String dbPassword = user.get().getPassword();

            if (passwordEncoder.matches(password, dbPassword)) {
                return "Login successful!";
            }
        }

        return "Invalid email/mobile or password";
    }
}