package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Pet;
import com.uptc.natufaunabackend.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("/pet")
public class PetControl {

    @Autowired
    private PetService petService;

    @PostMapping("/newPet")
    public String addPet(@RequestBody Pet pet) {
        petService.savePet(pet);
        return "Pet saved";
    }

    @GetMapping("/showPets")
    public List<Pet> getPets() {
        return petService.getPets();
    }

    @GetMapping("/showPets/adoptions")
    public List<Pet> getAdoptions() {
        List<Pet> pets = petService.getPets();
        List<Pet> adoptions = new ArrayList<>();
        for (int i = 0; i < pets.size(); i++) {
            if (pets.get(i).getAdoption_status()){
                adoptions.add(pets.get(i));
            }
        }
        return adoptions;
    }

    @GetMapping("/showPets/adoptions/{page}")
    public  List<Pet> getAdoptions(@PathVariable Integer page) {
        List<Pet> pets = petService.getPets();
        List<Pet> adoptions = new ArrayList<>();
        List<Pet> adoptionsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = 0; i < pets.size(); i++) {
            if (pets.get(i).getAdoption_status()) {
                adoptions.add(pets.get(i));
            }
        }

        for (int i = startLimit; i < adoptions.size(); i++) {
            if (elements <= 5) {
                adoptionsLimited.add(adoptions.get(i));
                elements = elements + 1;
            } else {
                i = adoptions.size();
            }
        }

        return adoptionsLimited;
    }

    @GetMapping("/showPets/sponsorships")
    public List<Pet> getSponsorships() {
        List<Pet> pets = petService.getPets();
        List<Pet> sponsorships = new ArrayList<>();
        for (int i = 0; i < pets.size(); i++) {
            if (pets.get(i).getSponsorship_status()){
                sponsorships.add(pets.get(i));
            }
        }
        return sponsorships;
    }

    @GetMapping("/showPets/sponsorships/{page}")
    public  List<Pet> getSponsorships(@PathVariable Integer page) {
        List<Pet> pets = petService.getPets();
        List<Pet> sponsorships = new ArrayList<>();
        List<Pet> sponsorshipsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = (6*page)-6;

        for (int i = 0; i < pets.size(); i++) {
            if (pets.get(i).getAdoption_status()) {
                sponsorships.add(pets.get(i));
            }
        }

        for (int i = startLimit; i < sponsorships.size(); i++) {
            if (elements <= 5) {
                sponsorshipsLimited.add(sponsorships.get(i));
                elements = elements + 1;
            } else {
                i = sponsorships.size();
            }
        }

        return sponsorshipsLimited;
    }

    @GetMapping("/showPet/{pet_id}")
    public ResponseEntity<Pet> getPet(@PathVariable Integer pet_id) {
        try {
            Pet pet = petService.getPet(pet_id);
            return new ResponseEntity<Pet>(pet, HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<Pet>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updatePet/{pet_id}")
    public ResponseEntity<String> updatePet(@RequestBody Pet pet, @PathVariable Integer pet_id) {
        try {
            Pet petFound = petService.getPet(pet_id);
            petFound.setPet_name(pet.getPet_name());
            petFound.setPet_size(pet.getPet_size());
            petFound.setPet_history(pet.getPet_history());
            petFound.setAdoption_status(pet.getAdoption_status());
            petFound.setSponsorship_status(pet.getSponsorship_status());
            petService.savePet(petFound);
            return new ResponseEntity<String>("Pet update successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Pet not update", HttpStatus.NOT_FOUND);
        }
    }
}
