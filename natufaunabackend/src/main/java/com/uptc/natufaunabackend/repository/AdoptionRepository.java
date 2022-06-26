package com.uptc.natufaunabackend.repository;

import com.uptc.natufaunabackend.model.Adoption;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdoptionRepository extends JpaRepository<Adoption, Integer> {
}