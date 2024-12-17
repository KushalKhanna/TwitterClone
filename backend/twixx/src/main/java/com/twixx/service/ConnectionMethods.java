package com.twixx.service;

import com.twixx.model.User;

public interface ConnectionMethods {
    void addConnection(User user);
    void removeConnection(User user);
    void notifyAllConnections(User user, String postContent);
}
