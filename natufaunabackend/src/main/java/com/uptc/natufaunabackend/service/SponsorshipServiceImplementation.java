package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Sponsorship;
import com.uptc.natufaunabackend.repository.SponsorshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SponsorshipServiceImplementation implements SponsorshipService {

    @Autowired
    private SponsorshipRepository sponsorshipRepository;

    @Override
    public void saveSponsorship(Sponsorship sponsorship) {
        sponsorshipRepository.save(sponsorship);
    }

    @Override
    public List<Sponsorship> getSponsorships() {
        return sponsorshipRepository.findAll();
    }

    @Override
    public Sponsorship getSponsorship(Integer id) {
        return sponsorshipRepository.findById(id).get();
    }
}
