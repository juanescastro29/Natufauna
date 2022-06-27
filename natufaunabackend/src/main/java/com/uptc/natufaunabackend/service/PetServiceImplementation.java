package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Pet;
import com.uptc.natufaunabackend.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetServiceImplementation implements PetService {

    @Autowired
    private PetRepository petRepository;

    @Override
    public void savePet(Pet pet) {
        petRepository.save(pet);
    }

    @Override
    public List<Pet> getPets() {
        return petRepository.findAll();
    }

    @Override
    public Pet getPet(Integer id) {
        return petRepository.findById(id).get();
    }
}
