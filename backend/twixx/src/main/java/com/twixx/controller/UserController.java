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

    @GetMapping("/{userName}")
    public User getUser(@PathVariable String userName) {
        return userService.getUserInfo(userName);
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

    @PostMapping("/signup")
    public boolean login(@RequestParam(value = "firstName") final String firstName,
                         @RequestParam(value = "lastName") final String lastName,
                         @RequestParam(value = "userName") final String userName,
                         @RequestParam(value = "password") final String password) {
        return userService.signup(firstName, lastName, userName, password);
    }

    @PostMapping("/connect")
    public void connectingUser(@RequestParam String currentUser,
                               @RequestParam String targetUser) {
        userService.coonectUser(currentUser, targetUser);
    }

    @PostMapping("/disconnect")
    public void unfollowUser(
            @RequestParam String currentUser,
            @RequestParam String targetUser) {

        userService.disconnectUser(currentUser, targetUser);
    }
}
