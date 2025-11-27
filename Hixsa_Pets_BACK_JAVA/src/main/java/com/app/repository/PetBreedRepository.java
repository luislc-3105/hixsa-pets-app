package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.app.entities.PetBreedEntity;

@Repository
public interface PetBreedRepository extends JpaRepository<PetBreedEntity, Long> {
}
