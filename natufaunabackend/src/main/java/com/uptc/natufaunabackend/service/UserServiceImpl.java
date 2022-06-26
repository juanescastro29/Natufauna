package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser(Integer id) {
        return userRepository.findById(id).get();
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
}

