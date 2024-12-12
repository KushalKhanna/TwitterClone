package com.twixx;

public class User {
    private static User _instance;
    private int user_id;
    private String username;
    private String firstName;
    private String surName;
    private String password;

    //Singleton pattern constructor. I want to incorporate the user_id with this    
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

    //Block of Getters and Setters for potential future use
    public int getID()
    {
        return this.user_id;
    }
    public void setID(int id)
    {
        this.user_id = id;
    }
    public String getUsername()
    {
        return this.username;
    }
    public void setUsername(String username)
    {
        this.username = username;
    }
    public String getFirstName()
    {
        return this.firstName;
    }
    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }
    public String getSurName()
    {
        return this.surName;
    }
    public void setSurName(String surName)
    {
        this.surName = surName;
    }
    public String getPassword()
    {
        return this.password;
    }
    public void setPassword(String password)
    {
        this.password = password;
    }

}
