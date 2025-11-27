package com.app.controller;

import com.app.entities.PetEntity;
import com.app.services.PetService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/pets")
public class PetController {

    @Autowired
    private PetService petService;

    @GetMapping
    public List<PetEntity> getAllPets(){
        return petService.findAll();
    }

    @PostMapping("")
    public ResponseEntity<?> saveOrUpdatePet(@RequestBody PetEntity pet){
        try {
            PetEntity petEntity = petService.saveOrUpdate(pet);
            return new ResponseEntity<PetEntity>(petEntity, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<String>("BAD REQUEST",HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping
    public ResponseEntity<?> deletePet(@RequestParam Long id){
        try {
            petService.detelePetById(id);
            return new ResponseEntity<String>("DELETED", HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<String>("BAD REQUEST",HttpStatus.BAD_REQUEST);
        }
    }
}
