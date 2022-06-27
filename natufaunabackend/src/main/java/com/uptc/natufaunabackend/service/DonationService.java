package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Donation;

import java.util.List;

public interface DonationService {

    public void saveDonation(Donation donation);
    public List<Donation> getDonations();
    public Donation getDonation(Integer id);

}
