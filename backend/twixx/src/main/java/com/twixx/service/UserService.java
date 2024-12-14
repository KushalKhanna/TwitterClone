package com.twixx.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.twixx.model.User;
import com.twixx.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public boolean login(final String userName, final String password) {
        try {
            Optional<User> user = userRepository.findByUserName(userName);
            if (user.isEmpty()) {
                System.out.println("No user found");
                return false;
            }
            // Add sign-in logic
            User userClass = user.get();

            if(password.equals(userClass.getPassword()))
            {
                System.out.println("Login Succesful");
                return true;
            }
            else
            {
                System.out.println("Invalid Password");
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}