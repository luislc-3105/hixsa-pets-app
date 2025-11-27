package com.app.services;

import com.app.entities.PetEntity;

import java.util.List;

public interface IPetService {

    List<PetEntity> findAll();

    PetEntity saveOrUpdate(PetEntity petEntity);

    void detelePetById(Long id);
}
