package com.example.auth.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
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

    // Store OTP temporarily
    private Map<String, String> otpStore = new HashMap<>();


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



         //send otp
         public String sendOtp(String login){

             Optional<User> user;

             if(login.contains("@")){
                 user = userRepository.findByEmail(login);
             }else{
                 user = userRepository.findByMobile(login);
             }

             if(user.isEmpty()){
                 return "User not found";
             }

             String otp = String.valueOf(new Random().nextInt(900000) + 100000);

             otpStore.put(login, otp);

             System.out.println("OTP for " + login + " : " + otp);

             return otp;   // return OTP
         }


    // -------- VERIFY OTP --------
    public String verifyOtp(String login, String otp){

        if(!otpStore.containsKey(login)){
            return "OTP not generated";
        }

        if(otpStore.get(login).equals(otp)){
            otpStore.remove(login);
            return "OTP verified";
        }

        return "Invalid OTP";
    }
    public String updatePassword(String login, String password){

        Optional<User> user;

        if(login.contains("@")){
            user = userRepository.findByEmail(login);
        }else{
            user = userRepository.findByMobile(login);
        }

        if(user.isPresent()){

            User u = user.get();

            u.setPassword(passwordEncoder.encode(password));

            userRepository.save(u);

            return "Password updated successfully";
        }

        return "User not found";
    }

}
