package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CAT_PET_BREED")
public class PetBreedEntity {
    @Id
    @Column(name = "PET_BREED_NUM_ID")
    private Long id;

    @Column(name = "PET_BREED_NAME")
    private String name;

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
}
