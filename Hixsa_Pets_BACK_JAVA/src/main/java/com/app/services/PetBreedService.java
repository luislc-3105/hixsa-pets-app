package com.app.services;

import com.app.entities.PetBreedEntity;
import com.app.entities.PetEntity;
import com.app.repository.PetBreedRepository;
import com.app.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetBreedService implements IPetBreedService{

    @Autowired
    PetBreedRepository petBreedRepository;

    @Override
    public List<PetBreedEntity> findAll() {
        return petBreedRepository.findAll();
    }

    @Override
    public PetBreedEntity saveOrUpdate(PetBreedEntity petBreedEntity) {
        return petBreedRepository.save(petBreedEntity);
    }
}
