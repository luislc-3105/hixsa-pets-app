package com.app.services;

import com.app.entities.PetEntity;
import com.app.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService implements IPetService{

    @Autowired
    PetRepository petRepository;

    @Override
    public List<PetEntity> findAll() {
        return petRepository.findAll();
    }

    @Override
    public PetEntity saveOrUpdate(PetEntity petEntity) {
        return petRepository.save(petEntity);
    }

    public void detelePetById(Long id) {
        petRepository.deleteById(id);
    }
}
