import { Injectable } from '@angular/core';
import { IFan } from '../Models/ifan';

@Injectable({
  providedIn: 'root'
})
export class FanListService {

    fanList : IFan [] = [];




  private _fanList : IFan[] = []
  constructor() { }


}
