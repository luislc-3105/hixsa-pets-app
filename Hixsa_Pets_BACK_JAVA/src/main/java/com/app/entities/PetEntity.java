package com.app.entities;

import javax.persistence.*;

@Entity
@Table(name="DET_PET")
public class PetEntity {
    @Id
    @Column(name="PET_NUM_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="PET_NAME")
    private String name;

    @Column(name="PET_AGE")
    private String age;

    @Column(name="PET_DESCRIPTION")
    private String description;

    @ManyToOne
    @JoinColumn(name = "PET_BREED_NUM_ID")
    private PetBreedEntity petBreed;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public PetBreedEntity getPetBreed() {
        return petBreed;
    }

    public void setPetBreed(PetBreedEntity petBreed) {
        this.petBreed = petBreed;
    }
}
