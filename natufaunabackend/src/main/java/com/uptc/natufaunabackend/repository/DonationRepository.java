package com.uptc.natufaunabackend.repository;

import com.uptc.natufaunabackend.model.Donation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonationRepository extends JpaRepository<Donation, Integer> {
}