package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Adoption;
import com.uptc.natufaunabackend.model.Pet;
import com.uptc.natufaunabackend.model.User;
import com.uptc.natufaunabackend.service.AdoptionService;
import com.uptc.natufaunabackend.service.PetService;
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
@RequestMapping("/adoption")
public class AdoptionControl {

    @Autowired
    private AdoptionService adoptionService;
    @Autowired
    private UserService userService;
    @Autowired
    private PetService petService;

    @PostMapping("/newAdoption")
    public String addAdoption(@RequestBody Map<String, Integer> adoptionData) {
        User user = userService.getUser(adoptionData.get("user_id"));
        Pet pet = petService.getPet(adoptionData.get("pet_id"));
        int adoptions = 0;
        for (int i = 0; i < user.getAdoptions().size(); i++) {
            if (user.getAdoptions().get(i).getStatus().equals("En progreso")) {
                adoptions = adoptions + 1;
            }
        }
        if (adoptions == 2) {
            return "Exceeds the number of adoptions";
        }
        Adoption adoption = new Adoption();
        adoption.setUser(user);
        adoption.setPet(pet);
        pet.setAdoption_status(false);
        adoptionService.saveAdoption(adoption);
        return "Adoption saved";
    }

    @GetMapping("/showAdoptions")
    public List<Adoption> getAdoptions() {
        return adoptionService.getAdoptions();
    }

    @GetMapping("/showAdoptions/{page}")
    public List<Adoption> getAdoptionsPage(@PathVariable Integer page) {
        ArrayList<Adoption> adoptionsLimited = new ArrayList<>();
        int elements = 0;
        int startLimit = 0;
        if (page > 0) {
            startLimit = (6*page)-6;
        }

        for (int i = startLimit; i < adoptionService.getAdoptions().size(); i++) {
            if (elements <= 5) {
                adoptionsLimited.add(adoptionService.getAdoptions().get(i));
                elements = elements + 1;
            } else {
                i = adoptionService.getAdoptions().size();
            }
        }

        return adoptionsLimited;
    }

    @GetMapping("/showAdoptions/user/{user_id}")
    public List<Adoption> getAdoptionsUser(@PathVariable int user_id) {
        User user = userService.getUser(user_id);
        return user.getAdoptions();
    }

    @GetMapping("/showAdoption/{id}")
    public ResponseEntity<Adoption> getAdoption(@PathVariable Integer donation_id) {
        try {
            Adoption adoption = adoptionService.getAdoption(donation_id);
            return new ResponseEntity<Adoption>(adoption, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Adoption>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/updateAdoption/{id}")
    public ResponseEntity<String> updateAdoption(@RequestBody Map<String, String> adoptionDataUpdate, @PathVariable Integer id) {
        try {
            Adoption adoptionFound = adoptionService.getAdoption(id);
            if (adoptionDataUpdate.get("adoption_comments") != ""){
                adoptionFound.setAdoption_comments(adoptionDataUpdate.get("adoption_comments"));
            }
            if (adoptionDataUpdate.get("status").equals("Rechazado")) {
                adoptionFound.setStatus(adoptionDataUpdate.get("status"));
                Pet pet = adoptionFound.getPet();
                pet.setAdoption_status(true);
                petService.savePet(pet);
            }else {
                adoptionFound.setStatus(adoptionDataUpdate.get("status"));
            }
            adoptionService.saveAdoption(adoptionFound);
            return new ResponseEntity<String>("Adoption update successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Adoption not update", HttpStatus.NOT_FOUND);
        }
    }
}
