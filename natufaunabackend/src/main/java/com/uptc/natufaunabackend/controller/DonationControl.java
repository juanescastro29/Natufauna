package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Donation;
import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.service.DonationService;
import com.uptc.natufaunabackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

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
