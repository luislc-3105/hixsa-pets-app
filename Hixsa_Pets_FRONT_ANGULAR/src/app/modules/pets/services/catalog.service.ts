import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "src/app/core/services/http.service";

@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    constructor(
        private httpService: HttpService
    ){}

    listBreedsPet(): Observable<any> {
        return this.httpService.get('catalog/breeds');
    }
}