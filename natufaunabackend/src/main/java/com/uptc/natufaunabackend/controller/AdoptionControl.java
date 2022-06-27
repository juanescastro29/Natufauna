package com.uptc.natufaunabackend.controller;

import com.uptc.natufaunabackend.model.Adoption;
import com.uptc.natufaunabackend.service.AdoptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/adoption")
public class AdoptionControl {

    @Autowired
    private AdoptionService adoptionService;

    @PostMapping("/postAdoption")
    public String addAdoption(@RequestBody Adoption adoption) {
        adoptionService.saveAdoption(adoption);
        return "Adoption saved";
    }

    @GetMapping("/getAdoptions")
    public List<Adoption> getAdoptions() {
        return adoptionService.getAdoptions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Adoption> getAdoption(@PathVariable Integer id) {
        try {
            Adoption adoption = adoptionService.getAdoption(id);
            return new ResponseEntity<Adoption>(adoption, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Adoption>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateAdoption(@RequestBody Adoption adoption, @PathVariable Integer id) {
        try {
            Adoption adoptionFound = adoptionService.getAdoption(id);
            adoptionService.saveAdoption(adoption);
            return new ResponseEntity<String>("Adoption update sucessfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<String>("Adoption not update", HttpStatus.NOT_FOUND);
        }
    }
}
