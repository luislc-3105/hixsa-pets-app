import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PetsService } from '../../services/pets.service';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'app-detail-pet',
  templateUrl: './detail-pet.component.html',
  styleUrls: ['./detail-pet.component.scss']
})
export class DetailPetComponent implements OnInit {
  petId:number;
  petData: any;

  listBreedsPet: any[] = [];

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private petsService: PetsService,
    private catalogService: CatalogService,
  ){}

  ngOnInit(): void {
    this.initCatalogs();

    this.petData = this.petsService.getDataForEditItem();
    this.initForm();
    if(this.petData){
      console.log('petData',this.petData);
      this.initPetData();
    } else {
      this.router.navigate(['/pets/list']);
    }
    
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

  initPetData() {
    this.petId = this.petData.id;

    this.formGroup.get("pet_name").setValue(this.petData.name);
    this.formGroup.get("pet_breed").setValue(this.petData.petBreed.id);
    this.formGroup.get("pet_age").setValue(this.petData.age);
    this.formGroup.get("pet_description").setValue(this.petData.description);
  }

  onSubmitForm() {
    console.log('save')
    if(this.formGroup.valid) {
      if (window.confirm("¿Desea actualizar los datos de la mascota?")) {
        this.formGroup.disable();
        this.updatePetData();
      }
    }
  }

  updatePetData() {
    this.petsService.updatePet(this.getFormData()).subscribe(result => {
      console.log('updatePet response', result)
      this.formGroup.enable();
      alert('La mascota ha sido actualizada correctamente!');
      //this.router.navigate(['/pets/list']);
    },error => {
      this.formGroup.enable();
      alert('Ocurrió un error al actualizar la mascota!' + error);
    });
  }

  getFormData() {
    const updateData = {
      id: this.petData.id,
      name: this.formGroup.get('pet_name').value,
      age: this.formGroup.get('pet_age').value,
      description: this.formGroup.get('pet_description').value,
      petBreed: {
        id: this.formGroup.get('pet_breed').value
      }
    }
    return updateData;
  }

  onCancelUpdate() {
    this.formGroup.reset();
    this.router.navigate(['/pets/list']);
  }
}