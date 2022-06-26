package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class Control {

    @Autowired
    private UserService userService;

    @PostMapping("/post")
    public String addUser (@RequestBody User user) {
        userService.saveUser(user);
        return "User save";
    }


}
