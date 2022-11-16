package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Adoption;
import com.uptc.natufaunabackend.model.Pet;
import com.uptc.natufaunabackend.model.Sponsorship;
import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.service.PetService;
import com.uptc.natufaunabackend.service.SponsorshipService;
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
@RequestMapping("/sponsorship")
public class SponsorshipControl {

    @Autowired
    private SponsorshipService sponsorshipService;
    @Autowired
    private UserService userService;
    @Autowired
    private PetService petService;

    @PostMapping("/newSponsorship")
    public String addSponsorship(@RequestBody Map<String, Integer> sponsorshipData) {
        User user = userService.getUser(sponsorshipData.get("user_id"));
        Pet pet = petService.getPet(sponsorshipData.get("pet_id"));
        int sponsorships = 0;
        for (int i = 0; i < user.getAdoptions().size(); i++) {
            if (user.getAdoptions().get(i).getStatus().equals("Activo")) {
                sponsorships = sponsorships + 1;
            }
        }

        if (sponsorships == 5) {
            return "Exceeds the number of sponsorships";
        }

        Sponsorship sponsorship = new Sponsorship();
        sponsorship.setUser(user);
        sponsorship.setPet(pet);
        pet.setSponsorship_status(false);
        sponsorshipService.saveSponsorship(sponsorship);
        return "Sponsorship saved";

    }

    @GetMapping("/showSponsorships")
    public List<Sponsorship> getSponsorships() {
        return sponsorshipService.getSponsorships();
    }

    @GetMapping("/showSponsorships/{page}")
    public List<Sponsorship> getAdoptionsPage(@PathVariable Integer page) {
        ArrayList<Sponsorship> sponsorshipsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < sponsorshipService.getSponsorships().size(); i++) {
            if (elements <= 5) {
                sponsorshipsLimited.add(sponsorshipService.getSponsorships().get(i));
                elements = elements + 1;
            } else {
                i = sponsorshipService.getSponsorships().size();
            }
        }
        return sponsorshipsLimited;
    }

    @GetMapping("/showSponsorships/{page}/{user_id}")
    public List<Sponsorship> getAdoptionsPageUser(@PathVariable Integer page, @PathVariable Integer user_id) {
        ArrayList<Sponsorship> sponsorshipsLimited = new ArrayList<>();
        List<Sponsorship> sponsorshipUser = new ArrayList<>();
        sponsorshipUser = userService.getUser(user_id).getSponsorships();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = startLimit; i < sponsorshipUser.size(); i++) {
            if (elements <= 5) {
                sponsorshipsLimited.add(sponsorshipUser.get(i));
                elements = elements + 1;
            } else {
                i = sponsorshipService.getSponsorships().size();
            }
        }
        return sponsorshipsLimited;
    }

    @GetMapping("/showSponsorship/{sponsorship_id}")
    public ResponseEntity<Sponsorship> getSponsorship(@PathVariable int sponsorship_id) {
        try {
            Sponsorship sponsorship = sponsorshipService.getSponsorship(sponsorship_id);
            return new ResponseEntity<Sponsorship>(sponsorship, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Sponsorship>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteSponsorship/{sponsorship_id}")
    public ResponseEntity<String> deleteSponsorship(@PathVariable int sponsorship_id) {
        try {
            Sponsorship sponsorship = sponsorshipService.getSponsorship(sponsorship_id);
            Pet pet = sponsorship.getPet();
            pet.setSponsorship_status(true);
            petService.savePet(pet);
            sponsorshipService.deleteSponsorship(sponsorship_id);
            return new ResponseEntity<String>("Sponsorship deleted", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("No sponsorship found", HttpStatus.NOT_FOUND);
        }
    }

}
