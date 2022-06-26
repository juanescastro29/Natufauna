package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/user")
public class UserControl {

    @Autowired
    private UserService userService;

    @PostMapping("/postUser")
    public String addUser (@RequestBody User user) {
        userService.saveUser(user);
        return "User saved";
    }

    @GetMapping("/getUsers")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Integer id) {
        try {
            User user = userService.getUser(id);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@RequestBody User user, @PathVariable Integer id) {
        try {
            User userFound = userService.getUser(id);
            userService.saveUser(user);
            return new ResponseEntity<String>("User update successfully", HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Not user found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id) {
        try {
            User userDeleted = userService.getUser(id);
            userService.deleteUser(id);
            return new ResponseEntity<String>("User deleted whit id " + id,HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Not user found", HttpStatus.NOT_FOUND);
        }

    }
}
