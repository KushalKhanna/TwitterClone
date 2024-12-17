package com.twixx.controller;

import com.twixx.model.Post;
import com.twixx.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    private final Map<String, List<String>> notifications = new HashMap<>();

    @PostMapping("/all-posts")
    public List<Post> allPosts(@RequestParam(value = "userName") final String userName) {
        return postService.getAllUserPosts(userName);
    }

    @PostMapping("/add-post")
    public void createPost(@RequestParam(value = "userName") final String userName,
                           @RequestParam(value = "postContent") final String postContent) {
        postService.addPost(userName, postContent);
    }

    @GetMapping("/{userName}")
    public List<Post> getNotifications(@PathVariable final String userName) {
//        List<String> notifications = getNotificationsForUser(userName);
//
//        if (notifications.isEmpty()) {
//            return ResponseEntity.noContent().build(); // No notifications
//        }
//        return ResponseEntity.ok(notifications);
        return postService.findByUsername(userName);
    }

//    public List<String> getNotificationsForUser(String username) {
//        // Return the user's notifications or an empty list if none exist
//        return notifications.getOrDefault(username, new ArrayList<>());
//    }
//
//    public void addNotificationForUser(String username, String notification) {
//        // Get the user's current notifications or initialize a new list
//        notifications.computeIfAbsent(username, k -> new ArrayList<>());
//
//        // Add the new notification
//        notifications.get(username).add(notification);
//    }
}
