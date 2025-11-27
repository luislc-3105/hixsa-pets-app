import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PetsService } from '../../services/pets.service';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss']
})
export class NewPetComponent implements OnInit {
  listBreedsPet: any[] = [];

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private petsService: PetsService,
    private catalogService: CatalogService
  ){}

  ngOnInit(): void {
    this.initCatalogs();
    this.initForm();
  }

  initCatalogs(){
    this.catalogService.listBreedsPet().subscribe(result => {
      this.listBreedsPet = result;
    });
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      pet_name: new FormControl('',[Validators.required]),
      pet_breed: new FormControl('',[Validators.required]),
      pet_age: new FormControl('',[Validators.required]),
      pet_description: new FormControl('',[])
    });
  }

  onSubmitForm() {
    console.log('saving')
    if(this.formGroup.valid) {
      if (window.confirm("¿Desea agregar a la nueva mascota")) {
        this.formGroup.disable();
        this.addNew();        
      }
    }
  }

  addNew() {
    const newFormData = this.getNewFormData();
    console.log(newFormData);

    this.petsService.addNewPet(newFormData).subscribe(result => {
      console.log('result', result)
      this.formGroup.enable();
      alert('La mascota se ha agregado exitosamente!');
      this.router.navigate(['/pets/list']);
    },error => {
      this.formGroup.enable();
      alert('Ocurrió un error al agregar la mascota!' + error);
    });
  }

  getNewFormData() {
    const newData = {
      id: null,
      name: this.formGroup.get('pet_name').value,
      age: this.formGroup.get('pet_age').value,
      description: this.formGroup.get('pet_description').value,
      petBreed: {
        id: this.formGroup.get('pet_breed').value
      }
    }
    return newData;
  }

  onCancel() {
    this.router.navigate(['/pets/list']);
  }
}
