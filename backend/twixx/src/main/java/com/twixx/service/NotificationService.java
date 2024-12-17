package com.twixx.service;

import com.twixx.model.Notification;
import com.twixx.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<Notification> getNotificationsByUserName(String userName) {
        return notificationRepository.findByUserName(userName);
    }

    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

//    public void markAsRead(Integer notificationId) {
//        Notification notification = notificationRepository.findById(notificationId).orElseThrow(() -> new RuntimeException("Notification not found"));
//        notification.setRead(true);
//        notificationRepository.save(notification);
//    }
}
