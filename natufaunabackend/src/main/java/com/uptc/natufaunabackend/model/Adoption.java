package com.uptc.natufaunabackend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "adoptions")
public class Adoption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adoption_id")
    private int adoption_id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", nullable = false)
    private User user;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pet_id", referencedColumnName = "pet_id", nullable = false)
    private Pet pet;
    @Column(name = "date")
    @JsonFormat(pattern="dd-MM-yyyy HH:mm", timezone="GMT-5")
    private Date date;
    @Column(name = "last_update")
    @JsonFormat(pattern="dd-MM-yyyy HH:mm", timezone="GMT-5")
    private Date date_update;
    @Column(name = "adoption_comments", nullable = false)
    private String adoption_comments;
    @Column(name = "status")
    private String status;

    @PrePersist
    public void prePersist() {
        this.date = new Date();
        this.status = "En progreso";
        this.adoption_comments = "El proceso de adopcion esta en progreso";
    }

    @PreUpdate
    public void preUpdate() {
        this.date_update = new Date();
    }

    public Adoption() {
    }

    public int getAdoption_id() {
        return adoption_id;
    }

    public void setAdoption_id(int adoption_id) {
        this.adoption_id = adoption_id;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getDate_update() {
        return date_update;
    }

    public void setDate_update(Date date_update) {
        this.date_update = date_update;
    }

    public String getAdoption_comments() {
        return adoption_comments;
    }

    public void setAdoption_comments(String adoption_comments) {
        this.adoption_comments = adoption_comments;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
