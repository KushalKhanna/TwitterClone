package com.twixx.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.twixx.model.Notification;
import com.twixx.model.Post;
import com.twixx.model.User;
import com.twixx.repository.PostRepository;
import com.twixx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService implements ConnectionMethods {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NotificationService notificationService;

//    ConnectionHub c = ConnectionHub.getInstance();

    public List<Post> getAllUserPosts(String userName) {
        return postRepository.findByUsername(userName);
    }

    public void addPost(String userName, String postContent) {
        postRepository.save(new Post(userName, postContent));
        User user = getUserInfo(userName);
//        c.notifyAllConnections(user, postContent);
        notifyAllConnections(user, postContent);
    }

    private User getUserInfo(String userName) {
        try {
            User user = userRepository.findByUserName(userName);
            if (user == null) {
                System.out.println("No user found");
//                return;
            }
            return user;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<Post> findByUsername(String userName) {
        return postRepository.findByUsername(userName);
    }

    @Override
    public void addConnection(User user) {
//        connections.add()
        System.out.println("IN addConnection");

    }

    @Override
    public void removeConnection(User user) {
        System.out.println("IN removeConnection");
    }

    @Override
    public void notifyAllConnections(User user, String postContent) {
        System.out.println("IN notifyAllConnections");
        JsonNode friendsList = user.getFriendList();
        for (JsonNode friendNode : friendsList) {
            String friend = friendNode.asText();
            try {
                notifyFriend(friend, postContent);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private void notifyFriend(String friend, String postContent) {
        try {
            Notification notification = new Notification(friend, postContent, false);
            notificationService.addNotification(notification);
            System.out.println("Notified friend: " + friend);
        } catch (Exception e) {
            System.out.println("Failed to notify friend: " + friend);
            e.printStackTrace();
        }
    }
}
