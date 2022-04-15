import { Component, OnInit } from '@angular/core';
import { LCardType } from '../shared/lcard-type.model';
import { LookupValuesService } from '../shared/lookup-values.service';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styles: [
  ]
})
export class CardTypeComponent implements OnInit {

  constructor(public service:LookupValuesService) { }

  modalTitle:string;
  ActivateAddEditCardTypeComp:boolean=false;
  lCardType:LCardType;

  ngOnInit(): void {
    this.service.getCardTypeList();
  }

  editCardType(selectedRecord:LCardType)
  {
    console.log('Button Click');
    this.service.cardFormData = Object.assign({},selectedRecord);
    //this.lCardType = Object.assign({},selectedRecord);
    this.modalTitle = "Edit Card Type";
    this.ActivateAddEditCardTypeComp = true;
  }

  addCardType()
  {
    //this.lCardType = new LCardType();
    this.service.cardFormData = new LCardType();
    this.modalTitle = "Add Card Type";
    this.ActivateAddEditCardTypeComp = true;
  }

  closeCardType()
  {
    this.ActivateAddEditCardTypeComp = false;
    this.service.getCardTypeList();
  }
}
