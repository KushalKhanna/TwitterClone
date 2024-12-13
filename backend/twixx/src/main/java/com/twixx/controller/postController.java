package com.example.twixx.controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.twixx.entity.post;
import com.example.twixx.repository.postRepo;



@RestController
@RequestMapping("/user")
public class postController {

    @Autowired
    postRepo postRepo;
   

    @PostMapping("/addPost")
    public void createPost(@RequestBody post data){
        System.out.println("Received Post: " + data.getPostContent());
        postRepo.save(data);


    }

}
