import { Injectable } from '@angular/core';
import { LCardType } from './lcard-type.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LookupValuesService {

  constructor(private http:HttpClient ) { }

  //Card Lookup Values
  cardFormData: LCardType = new LCardType();
  cardTypeList:LCardType[];
  readonly cardTypeURL = "https://localhost:44397/api/LCardTypes";

  // POST
  // api/LCardTypes
  postCardType(){
    return this.http.post(this.cardTypeURL,this.cardFormData);
  }

  // GET
  // api/LCardTypes
  // returns list of card types
  getCardTypeList()
  {
    this.http.get(this.cardTypeURL)
    .toPromise()
    .then(res=> this.cardTypeList = res as LCardType[]);
  }

}
