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
@Table(name = "twixxpost")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="post_id")
    private Integer postId;

    @Column(name="user_name")
    private String username;

    @Column(name="postcontent")
    private String postContent;

    public Post(String userName, String postContent) {
        this.username = userName;
        this.postContent = postContent;
    }
}
