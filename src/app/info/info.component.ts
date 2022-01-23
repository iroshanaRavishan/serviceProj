import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public information : any = [];
  constructor(private _information : InformationService) { }

  ngOnInit(): void {
    this._information.getInformation().subscribe(Data => this.information = Data);
  }

}
