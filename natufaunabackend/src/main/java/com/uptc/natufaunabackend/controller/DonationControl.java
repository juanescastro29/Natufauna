package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Donation;
import com.uptc.natufaunabackend.model.Sponsorship;
import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.service.DonationService;
import com.uptc.natufaunabackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("/donation")
public class DonationControl {

    @Autowired
    private DonationService donationService;
    @Autowired
    private UserService userService;

    @PostMapping("/newDonation")
    public String addDonation(@RequestBody Map<String, Integer> donationData) {
        if (donationData.get("user_id") != null){
            User user = userService.getUser(donationData.get("user_id"));
            Donation donation = new Donation();
            donation.setUser(user);
            donation.setDonation_value(donationData.get("donation_value"));
            donationService.saveDonation(donation);
            return "Donation saved";
        }else {
            return "No donation value";
        }
    }

    @GetMapping("/showDonations")
    public List<Donation> getDonations() {
        return donationService.getDonations();
    }

    @GetMapping("/showDonations/user/{user_id}")
    public List<Donation> getDonationsUser(@PathVariable int user_id) {
        User user = userService.getUser(user_id);
        return user.getDonations();
    }

    @GetMapping("/showSponsorships/{page}")
    public List<Donation> getAdoptionsPage(@PathVariable Integer page) {
        ArrayList<Donation> donationsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < donationService.getDonations().size(); i++) {
            if (elements <= 5) {
                donationsLimited.add(donationService.getDonations().get(i));
                elements = elements + 1;
            } else {
                i = donationService.getDonations().size();
            }
        }

        return donationsLimited;
    }

    @GetMapping("/showDonation/{donation_id}")
    public ResponseEntity<Donation> getDonation(@PathVariable int donation_id) {
        try {
            Donation donation = donationService.getDonation(donation_id);
            return new ResponseEntity<Donation>(donation, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Donation>(HttpStatus.NOT_FOUND);
        }
    }

}
