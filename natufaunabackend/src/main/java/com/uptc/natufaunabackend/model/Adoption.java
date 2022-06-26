package com.uptc.natufaunabackend.model;
import com.sun.istack.NotNull;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "adoptions")
public class Adoption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adoption_id")
    private int adoption_id;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;
    @OneToOne
    @JoinColumn(name = "pet_id", referencedColumnName = "pet_id")
    private Pet pet;
    @Column(name = "date")
    private Date date;
    @Column(name = "last_update", nullable = false)
    private Date date_update;
    @Column(name = "status")
    private String status;

    @PrePersist
    public void prePersist() {
        this.date = new Date();
    }

    @PreUpdate
    public void preUpdate() {
        this.date_update = new Date();
    }

}
