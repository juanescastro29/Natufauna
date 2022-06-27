package com.uptc.natufaunabackend.model;

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
    @Column(name = "name", nullable = false)
    private String pet_name;
    @Column(name = "pet_size", nullable = false)
    private String pet_size;
    @Column(name = "pet_characteristics", nullable = false)
    private String pet_characteristics;
    @Column(name = "pet_history", nullable = false)
    private String pet_history;
    @Column(name = "status")
    private String status;

    @OneToOne(mappedBy = "pet")
    private Adoption adoption;
    @OneToOne(mappedBy = "pet")
    private Sponsorship sponsorship;

    @PrePersist
    public void prePersist() {
        this.status = "In adoption";
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

    public String getPet_size() {
        return pet_size;
    }

    public void setPet_size(String pet_size) {
        this.pet_size = pet_size;
    }

    public String getPet_characteristics() {
        return pet_characteristics;
    }

    public void setPet_characteristics(String pet_characteristics) {
        this.pet_characteristics = pet_characteristics;
    }

    public String getPet_history() {
        return pet_history;
    }

    public void setPet_history(String pet_history) {
        this.pet_history = pet_history;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
