package com.twixx;

public class User {
    private static User _instance;
    private int user_id;
    private String firstName;
    private String surName;
    private String password;

    private User()
    {
    }
    public static User getGenerator()
    {
        if(_instance == null)
        {
            _instance = new User();
        }
        return _instance;
    }



}
