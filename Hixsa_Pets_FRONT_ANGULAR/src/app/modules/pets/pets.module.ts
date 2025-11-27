import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { PetsListComponent } from './components/pets-list/pets-list.component';
import { PetsRoutingModule } from './pets-routing.module';
import { NewPetComponent } from './components/new-pet/new-pet.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';

@NgModule({
  declarations: [
    PetsListComponent,
    NewPetComponent,
    DetailPetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }