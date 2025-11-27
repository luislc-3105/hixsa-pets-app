import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PetsService {
    private petData;

    constructor(
        private httpService: HttpService
    ){}

    listAllPets(): Observable<any> {
        return this.httpService.get('pets');
    }

    addNewPet(data): Observable<any> {
        const body = {
            ...data
        }
        console.log("addNewPet", body)
        return this.httpService.post('pets', body);
    }

    updatePet(data): Observable<any> {
        const body = {
            ...data
        }
        console.log("updatePet", body)
        return this.httpService.post('pets', body);
    }

    deletePetById(id:any): Observable<any> {
        return this.httpService.delete('pets', new HttpParams().set('id',id));
    }

    setDataForEditItem(data) {
        this.petData = data;
    }

    getDataForEditItem() {
        return this.petData;
    }
}