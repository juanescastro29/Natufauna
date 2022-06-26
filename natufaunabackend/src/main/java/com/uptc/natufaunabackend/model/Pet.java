package com.uptc.natufaunabackend.model;

import javax.persistence.*;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pet_id")
    private int pet_id;
    @Column(name = "name")
    private String pet_name;
    @Column(name = "pet_size")
    private String pet_size;
    @Column(name = "pet_characteristics")
    private String pet_characteristics;
    @Column(name = "pet_history")
    private String pet_history;
    @Column(name = "status")
    private String status;


    @OneToOne(mappedBy = "pet")
    private Adoption adoption;
    @OneToOne(mappedBy = "pet")
    private Sponsorship sponsorship;

}
