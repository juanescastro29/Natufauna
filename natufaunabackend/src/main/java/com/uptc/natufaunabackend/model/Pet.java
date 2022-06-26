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
    @Column(name = "status", nullable = false)
    private String status;

    @OneToOne(mappedBy = "pet")
    private Adoption adoption;
    @OneToOne(mappedBy = "pet")
    private Sponsorship sponsorship;

}
