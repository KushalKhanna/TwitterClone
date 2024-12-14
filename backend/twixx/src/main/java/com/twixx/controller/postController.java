package com.twixx.controller;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twixx.model.post;
import com.twixx.repository.postRepository;


@RequestMapping("/user")
@RestController
public class postController {

    @Autowired
    postRepository postRepo;
   

    @PostMapping("/addpost")
    public void createPost(@RequestBody post data){
        System.out.println("Received Post: " + data.getPostContent());
        postRepo.save(data);


    }

}
