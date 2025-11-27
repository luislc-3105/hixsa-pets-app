import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { NewPetComponent } from './components/new-pet/new-pet.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';


const routes: Routes = [
  { path: 'list', component: PetsListComponent },
  { path: 'add', component: NewPetComponent },
  { path: 'detail', component: DetailPetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }