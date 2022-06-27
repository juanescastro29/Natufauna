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

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

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
        Adoption adoption = new Adoption();
        adoption.setUser(user);
        adoption.setPet(pet);
        adoptionService.saveAdoption(adoption);
        return "Adoption saved";
    }

    @GetMapping("/showAdoptions")
    public List<Adoption> getAdoptions() {
        return adoptionService.getAdoptions();
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
            adoptionFound.setAdoption_comments(adoptionDataUpdate.get("adoption_comments"));
            adoptionFound.setStatus(adoptionDataUpdate.get("status"));
            adoptionService.saveAdoption(adoptionFound);
            return new ResponseEntity<String>("Adoption update successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Adoption not update", HttpStatus.NOT_FOUND);
        }
    }
}
