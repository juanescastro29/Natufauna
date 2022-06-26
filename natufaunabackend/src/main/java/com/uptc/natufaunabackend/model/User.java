package com.uptc.natufaunabackend.model;

import com.sun.istack.NotNull;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id")
    private int user_id;
    @Column(name = "first_name", nullable = false)
    private String user_first_name;
    @Column(name = "last_name", nullable = false)
    private String user_last_name;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "email", nullable = false)
    private String email;
    @OneToMany(mappedBy = "user")
    private List<Adoption> adoptions;
    @OneToMany(mappedBy = "user")
    private List<Donation> donations;

    public User() {

    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUser_first_name() {
        return user_first_name;
    }

    public void setUser_first_name(String user_first_name) {
        this.user_first_name = user_first_name;
    }

    public String getUser_last_name() {
        return user_last_name;
    }

    public void setUser_last_name(String user_last_name) {
        this.user_last_name = user_last_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Nullable
    public List<Adoption> getAdoptions() {
        return adoptions;
    }

    public void setAdoptions(@Nullable List<Adoption> adoptions) {
        this.adoptions = adoptions;
    }

    @Nullable
    public List<Donation> getDonations() {
        return donations;
    }

    public void setDonations(@Nullable List<Donation> donations) {
        this.donations = donations;
    }
}
