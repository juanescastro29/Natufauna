package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserControl {

    @Autowired
    private UserService userService;

    @PostMapping("/newUser")
    public String addUser(@RequestBody User user) {
        userService.saveUser(user);
        return "User saved";
    }

    @GetMapping("/showUsers")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/showUser/{user_id}")
    public ResponseEntity<User> getUser(@PathVariable Integer user_id) {
        try {
            User user = userService.getUser(user_id);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateUser/{user_id}")
    public ResponseEntity<String> updateUser(@RequestBody User user, @PathVariable Integer user_id) {
        try {
            User userFound = userService.getUser(user_id);
            userService.saveUser(user);
            return new ResponseEntity<String>("User update successfully", HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Not user found", HttpStatus.NOT_FOUND);
        }
    }
}
