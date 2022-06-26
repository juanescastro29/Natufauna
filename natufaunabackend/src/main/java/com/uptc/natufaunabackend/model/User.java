package com.uptc.natufaunabackend.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "user_id")
    private int user_id;
    @Column(name = "name")
    private String user_name;
    @Column(name = "lastName")
    private String user_lastName;
    @Column(name = "password")
    private String password;
    @Column(name = "username")
    private String username;
    @Column(name = "email")
    private String email;

    @OneToMany(mappedBy = "user")
    private List<Adoption> adoptions;
    @OneToMany(mappedBy = "user")
    private List<Donation> donations;

}
