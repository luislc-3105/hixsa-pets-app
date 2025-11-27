import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetsService } from '../../services/pets.service';

const EXAMPLE_USER_ID = 2;

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit{
  userData: any;
  userFullname: string;
  petList: any[] = [];

  constructor(
    private router: Router,
    private petsService: PetsService
  ) { }

  ngOnInit(): void {
    this.listPets()
  }

  private listPets() {
    this.petsService.listAllPets().subscribe(response => {
      console.log('listPetList', response);
      this.petList = response;
    });
  }

  onEditRow(row) {
    this.petsService.setDataForEditItem(row);
    this.router.navigate(['/pets/detail']);
  }

  onDeleteRow(row) {
    if (window.confirm("¿Está seguro que desea eliminar esta mascota?" + row.name)) {
        this.petsService.deletePetById(row.id).subscribe(result => {
            console.log('deletePetById response', result)
            alert('La mascota ha sido eliminada correctamente!');
            this.listPets();
        },error => {
            alert('Ocurrió un error al eliminar la mascota!' + error);
        });
      }
  }
}
