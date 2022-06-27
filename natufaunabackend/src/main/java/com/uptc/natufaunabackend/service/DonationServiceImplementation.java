package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Donation;
import com.uptc.natufaunabackend.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationServiceImplementation implements DonationService {

    @Autowired
    private DonationRepository donationRepository;

    @Override
    public void saveDonation(Donation donation) {
        donationRepository.save(donation);
    }

    @Override
    public List<Donation> getDonations() {
        return donationRepository.findAll();
    }

    @Override
    public Donation getDonation(Integer id) {
        return donationRepository.findById(id).get();
    }
}
