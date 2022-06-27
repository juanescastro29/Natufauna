package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Sponsorship;

import java.util.List;

public interface SponsorshipService {

    public void saveSponsorship(Sponsorship sponsorship);
    public List<Sponsorship> getSponsorships();
    public Sponsorship getSponsorship(Integer id);
    public void deleteSponsorship(Integer id);

}
