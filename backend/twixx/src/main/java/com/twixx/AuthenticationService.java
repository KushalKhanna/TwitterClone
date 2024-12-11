package com.twixx;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

public class AuthenticationService {
    
    private UserRepository userRepository;

    public boolean login(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.map(u -> u.getPassword().equals(password)).orElse(false);
    }

}
