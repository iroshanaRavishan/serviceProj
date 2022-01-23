import { Component, OnInit } from '@angular/core';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {

  public workerDetails : any = [];
  
  constructor(private _workerDetails : WorkersService) { }

  ngOnInit(): void {
    this._workerDetails.getWorkers().subscribe(Data => this.workerDetails = Data);
  }

}
