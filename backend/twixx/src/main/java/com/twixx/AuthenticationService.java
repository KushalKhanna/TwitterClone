package com.twixx;

import java.util.Optional;

public class AuthenticationService {
    
    private UserRepository userRepository;

    public boolean login(String username, String password) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.map(u -> u.getPassword().equals(password)).orElse(false);
    }

}
