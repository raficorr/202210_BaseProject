import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plants } from './plants';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private apiUrl = environment.baseUrl + 'plant';


constructor(private http: HttpClient) { }

  getPlants (): Observable<Plants[]>{
    return this.http.get<Plants[]>(this.apiUrl);
  }

}
