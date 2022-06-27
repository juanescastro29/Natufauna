package com.uptc.natufaunabackend.controller;

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

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

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
        Sponsorship sponsorship = new Sponsorship();
        sponsorship.setUser(user);
        sponsorship.setPet(pet);
        pet.setSponsorship_status("Whit sponsorship");
        sponsorshipService.saveSponsorship(sponsorship);
        return "Sponsorship saved";
    }

    @GetMapping("/showSponsorships")
    public List<Sponsorship> getSponsorships() {
        return sponsorshipService.getSponsorships();
    }

    @GetMapping("/showSponsorships/user/{user_id}")
    public List<Sponsorship> getUserSponsorship(@PathVariable int user_id) {
        User user = userService.getUser(user_id);
        return user.getSponsorships();
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
            sponsorshipService.deleteSponsorship(sponsorship_id);
            return new ResponseEntity<String>("Sponsorship deleted", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("No sponsorship found", HttpStatus.NOT_FOUND);
        }
    }

}
