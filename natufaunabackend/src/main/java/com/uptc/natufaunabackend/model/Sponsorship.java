package com.uptc.natufaunabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "sponsorships")
public class Sponsorship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sponsorship_id;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;
    @OneToOne
    @JoinColumn(name = "pet_id", referencedColumnName = "pet_id")
    private Pet pet;

}
