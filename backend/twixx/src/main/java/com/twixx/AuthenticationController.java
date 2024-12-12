package com.twixx;

import org.springframework.http.ResponseEntity;

public class AuthenticationController {
    private AuthenticationService authenticationService;

    public ResponseEntity<String> login( User loginRequest) {
        boolean isAuthenticated = authenticationService.login(loginRequest.getUsername(), loginRequest.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid username or password");
        }
    }
    
}
