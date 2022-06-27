package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Adoption;
import com.uptc.natufaunabackend.repository.AdoptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptionServiceImplementation implements AdoptionService {

    @Autowired
    public AdoptionRepository adoptionRepository;

    @Override
    public void saveAdoption(Adoption adoption) {
        adoptionRepository.save(adoption);
    }

    @Override
    public List<Adoption> getAdoptions() {
        return adoptionRepository.findAll();
    }

    @Override
    public Adoption getAdoption(Integer id) {
        return adoptionRepository.findById(id).get();
    }
}
