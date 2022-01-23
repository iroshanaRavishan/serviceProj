import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInformation } from './information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  public _url : string = "./assets/Data/infromation.json";
  constructor(private http : HttpClient) { }

  public getInformation() : Observable <IInformation []> {
    return this.http.get<IInformation []>(this._url);
  }
}
