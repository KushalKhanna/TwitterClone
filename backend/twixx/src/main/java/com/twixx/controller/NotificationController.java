package com.twixx.controller;

import com.twixx.model.Notification;
import com.twixx.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping("/{userName}")
    public List<Notification> getNotifications(@PathVariable String userName) {
        return notificationService.getNotificationsByUserName(userName);
    }

//    @PostMapping("/add")
//    public ResponseEntity<Notification> addNotification(@RequestBody Notification notification) {
//        Notification createdNotification = notificationService.addNotification(notification);
//        return ResponseEntity.status(201).body(createdNotification);
//    }

//    @PostMapping("/mark-as-read/{notificationId}")
//    public ResponseEntity<Void> markAsRead(@PathVariable Long notificationId) {
////        notificationService.markAsRead(notificationId);
//        return ResponseEntity.noContent().build();
//    }
}
