package com.twixx.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="notification_id")
    private Integer notificationId;

    @Column(name="user_name")
    private String userName;

    @Column(name="message")
    private String message;

    @Column(name="is_read")
    private boolean isRead;

//    public Notification() {
//    }

    public Notification(String userName, String message, boolean isRead) {
        this.userName = userName;
        this.message = message;
        this.isRead = isRead;
    }
}
