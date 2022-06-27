package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Sponsorship;
import com.uptc.natufaunabackend.service.SponsorshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/sponsorship")
public class SponsorshipControl {

    @Autowired
    private SponsorshipService sponsorshipService;
    @Autowired
    private 

    @PostMapping("/newSponsorship")
    public String addSponsorship(@RequestBody Map<String, Integer> sponsorshipData) {

        sponsorshipService.saveSponsorship(sponsorship);
        return "Sponsorship saved";
    }


}
