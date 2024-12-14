package com.twixx.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twixx.model.SignUpRequest;
import com.twixx.model.User;
import com.twixx.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public String getUser(@PathVariable String userId) {
        return "HI";
    }

    @GetMapping("/all-users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Map<String, String> payload) {
        String userName = payload.get("userName");
        String password = payload.get("password");
        return userService.login(userName, password);
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody SignUpRequest signUpRequest) {
        String response = userService.signUpUser(signUpRequest);

        if (response.equals("User registered successfully!")) {
            return ResponseEntity.ok(response); // Status 200
        } else {
            return ResponseEntity.badRequest().body(response); // Status 400 for errors
        }
    }
}
