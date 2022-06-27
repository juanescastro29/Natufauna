package com.uptc.natufaunabackend.model;

import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "donations")
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "donation_id")
    private int donation_id;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private int user_id;
    @Column(name = "date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    @PrePersist
    public void prePersist() {
        this.date = new Date();
    }

}
