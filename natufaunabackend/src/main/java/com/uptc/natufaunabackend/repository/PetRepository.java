package com.uptc.natufaunabackend.repository;

import com.uptc.natufaunabackend.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Integer> {
}