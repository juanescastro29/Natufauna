package com.uptc.natufaunabackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import org.aspectj.bridge.IMessage;
import org.springframework.lang.Nullable;

import javax.persistence.*;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pet_id")
    private int pet_id;
    @Column(name = "pet_name", nullable = false)
    private String pet_name;
    @Transient
    private String pet_image;
    @Column(name = "pet_history", nullable = false)
    private String pet_history;
    @Column(name = "pet_age", nullable = false)
    private String pet_age;
    @Column(name = "pet_size", nullable = false)
    private String pet_size;
    @Column(name = "pet_color", nullable = false)
    private String pet_color;
    @Column(name = "pet_race", nullable = false)
    private String pet_race;
    @Column(name = "adoption_status")
    private Boolean adoption_status;
    @Column(name = "sponsorship_status")
    private Boolean sponsorship_status;


    @OneToOne(mappedBy = "pet")
    @JsonIgnore
    private Adoption adoption;
    @OneToOne(mappedBy = "pet")
    @JsonIgnore
    private Sponsorship sponsorship;

    @PrePersist
    public void prePersist() {
        this.adoption_status = true;
        this.sponsorship_status = true;
        this.pet_image = "";
    }

    public Pet() {
    }

    public int getPet_id() {
        return pet_id;
    }

    public void setPet_id(int pet_id) {
        this.pet_id = pet_id;
    }

    public String getPet_name() {
        return pet_name;
    }

    public void setPet_name(String pet_name) {
        this.pet_name = pet_name;
    }

    public String getPet_image() {
        return pet_image;
    }

    public void setPet_image(String pet_image) {
        this.pet_image = pet_image;
    }

    public String getPet_history() {
        return pet_history;
    }

    public void setPet_history(String pet_history) {
        this.pet_history = pet_history;
    }

    public String getPet_age() {
        return pet_age;
    }

    public void setPet_age(String pet_age) {
        this.pet_age = pet_age;
    }

    public String getPet_size() {
        return pet_size;
    }

    public void setPet_size(String pet_size) {
        this.pet_size = pet_size;
    }

    public String getPet_color() {
        return pet_color;
    }

    public void setPet_color(String pet_color) {
        this.pet_color = pet_color;
    }

    public String getPet_race() {
        return pet_race;
    }

    public void setPet_race(String pet_race) {
        this.pet_race = pet_race;
    }

    public Boolean getAdoption_status() {
        return adoption_status;
    }

    public void setAdoption_status(Boolean adoption_status) {
        this.adoption_status = adoption_status;
    }

    public Boolean getSponsorship_status() {
        return sponsorship_status;
    }

    public void setSponsorship_status(Boolean sponsorship_status) {
        this.sponsorship_status = sponsorship_status;
    }

    public Adoption getAdoption() {
        return adoption;
    }

    public void setAdoption(Adoption adoption) {
        this.adoption = adoption;
    }

    public Sponsorship getSponsorship() {
        return sponsorship;
    }

    public void setSponsorship(Sponsorship sponsorship) {
        this.sponsorship = sponsorship;
    }
}
