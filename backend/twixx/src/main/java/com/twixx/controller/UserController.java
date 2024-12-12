package com.twixx.controller;

import com.twixx.model.User;
import com.twixx.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public boolean login(@RequestParam(value = "userName") final String userName,
                         @RequestParam(value = "password") final String password) {
        return userService.login(userName, password);
    }
}
