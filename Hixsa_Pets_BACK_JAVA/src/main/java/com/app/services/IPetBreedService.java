package com.app.services;

import com.app.entities.PetBreedEntity;
import com.app.entities.PetEntity;

import java.util.List;

public interface IPetBreedService {

    List<PetBreedEntity> findAll();

    PetBreedEntity saveOrUpdate(PetBreedEntity petBreedEntity);
}
