package com.app.controller;

import java.util.List;

import com.app.entities.PetBreedEntity;
import com.app.services.PetBreedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/catalog")
public class CatalogController {

	@Autowired
	private PetBreedService petBreedService;


	@GetMapping("/breeds")
	public List<PetBreedEntity> getAllPetBreeds(){
		return petBreedService.findAll();
	}
}
