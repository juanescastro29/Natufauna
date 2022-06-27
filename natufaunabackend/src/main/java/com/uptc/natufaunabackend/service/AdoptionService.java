package com.uptc.natufaunabackend.service;

import com.uptc.natufaunabackend.model.Adoption;

import java.util.List;

public interface AdoptionService {

    public void saveAdoption(Adoption adoption);
    public List<Adoption> getAdoptions();
    public Adoption getAdoption(Integer id);

}
