import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWork } from './work';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  public _url : string = "https://www.hpb.health.gov.lk/api/get-current-statistical";

  constructor(private http : HttpClient) { }
  public getWorkers() : Observable <IWork []> {
    return this.http.get<IWork []>(this._url);
  }
}
