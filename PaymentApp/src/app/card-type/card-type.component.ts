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

  ngOnInit(): void {
    this.service.getCardTypeList();
  }

  populateForm(selectedRecord:LCardType)
  {
    this.service.cardFormData = Object.assign({},selectedRecord);
  }
}
