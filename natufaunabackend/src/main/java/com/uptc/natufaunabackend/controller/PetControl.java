package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Pet;
import com.uptc.natufaunabackend.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/pet")
public class PetControl {

    @Autowired
    private PetService petService;

    @PostMapping("/postPet")
    public String addPet(@RequestBody Pet pet) {
        petService.savePet(pet);
        return "Pet saved";
    }

    @GetMapping("/getPets")
    public List<Pet> getPets() {
        return petService.getPets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPet(@PathVariable Integer id) {
        try {
            Pet pet = petService.getPet(id);
            return new ResponseEntity<Pet>(pet, HttpStatus.OK);
        }catch (NoSuchElementException e) {
            return new ResponseEntity<Pet>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updatePet(@RequestBody Pet pet, @PathVariable Integer id) {
        try {
            Pet petFound = petService.getPet(id);
            petService.savePet(pet);
            return new ResponseEntity<String>("Pet update sucessfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Pet not update", HttpStatus.NOT_FOUND);
        }
    }
}
