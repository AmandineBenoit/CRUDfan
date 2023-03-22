import { Component } from '@angular/core';
import { IFan } from 'src/app/Models/ifan';
import { FanListService } from 'src/app/Services/fan-list.service';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.scss']
})
export class FanListComponent {

  fanList : IFan[] = [];
  name! : string;
  birth_date! : Date

  constructor(private _sf : FanListService){

  }


  addFan(): void {
    let newFan : IFan = {
      name : this.name,
      birth_date: this.birth_date
    }
  }

  OnInit() {

  }
}
