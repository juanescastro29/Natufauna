package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Pet;

import java.util.List;

public interface PetService {

    public void savePet(Pet pet);
    public List<Pet> getPets();
    public Pet getPet(Integer id);
    public void deleteSPet(Integer id);

}
