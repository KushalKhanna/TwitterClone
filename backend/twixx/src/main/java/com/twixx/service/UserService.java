package com.twixx.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.twixx.model.User;
import com.twixx.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public boolean login(final String userName, final String password) {
        try {
            User user = userRepository.findByUserName(userName);
            if (user == null) {
                System.out.println("No user found");
                return false;
            }
            // Add sign-in logic
//            User userClass = user.get();

            if(password.equals(user.getPassword()))
            {
                System.out.println("Login Succesful");
                return true;
            }
            System.out.println("Invalid Password");
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean signup(String firstName, String lastName, String userName, String password) {
        try {
            User u = new User(firstName, lastName, userName, password);
//            User u = new User();
//            u.setFirstName(firstName);
//            u.setLastName(lastName);
//            u.setUserName(userName);
//            u.setPassword(password);
            userRepository.save(u);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public User getUserInfo(String userName) {
        return userRepository.findByUserName(userName);
    }

    public void coonectUser(String currentUser, String targetUser) {
        User currentUserObj = getUserInfo(currentUser);
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode friendListNode = currentUserObj.getFriendList();

        if (friendListNode == null) {
            // Initialize an empty ArrayNode if the friend list is null
            friendListNode = objectMapper.createArrayNode();
        }

        // Check if targetUser already exists in the list
        if (friendListNode.isArray()) {
            ArrayNode friendListArray = (ArrayNode) friendListNode;

            for (JsonNode node : friendListArray) {
                if (node.asText().equals(targetUser)) {
                    return;
                }
            }

            // Add targetUser to the friend list
            friendListArray.add(targetUser);

            // Update and save the user
            currentUserObj.setFriendList(friendListArray);
            userRepository.save(currentUserObj);
        }
    }

    public void disconnectUser(String currentUser, String targetUser) {
        if (currentUser == null || targetUser == null) {
            return;
        }

        try {
            // Find current user in the database
            User currentUserObj = userRepository.findByUserName(currentUser);
            if (currentUserObj == null) {
                return;
            }

            // Fetch the friend list as JsonNode
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode friendListNode = currentUserObj.getFriendList();

            if (friendListNode == null || !friendListNode.isArray()) {
                return;
            }

            // Convert JsonNode to ArrayNode for modification
            ArrayNode friendListArray = (ArrayNode) friendListNode;

            // Remove targetUser if it exists in the friend list
            boolean userRemoved = false;
            for (int i = 0; i < friendListArray.size(); i++) {
                if (friendListArray.get(i).asText().equals(targetUser)) {
                    friendListArray.remove(i);
                    userRemoved = true;
                    break;
                }
            }

            if (!userRemoved) {
                return;
            }

            // Update and save the user
            currentUserObj.setFriendList(friendListArray);
            userRepository.save(currentUserObj);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}