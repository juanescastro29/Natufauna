package com.uptc.natufaunabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "sponsorships")
public class Sponsorship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sponsorship_id;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;
    @OneToOne
    @JoinColumn(name = "pet_id", referencedColumnName = "pet_id", nullable = false)
    private Pet pet;

    public Sponsorship() {
    }

    public int getSponsorship_id() {
        return sponsorship_id;
    }

    public void setSponsorship_id(int sponsorship_id) {
        this.sponsorship_id = sponsorship_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }
}
