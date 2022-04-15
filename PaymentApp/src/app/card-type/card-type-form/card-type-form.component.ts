import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LCardType } from 'src/app/shared/lcard-type.model';
import { LookupValuesService } from 'src/app/shared/lookup-values.service';

@Component({
  selector: 'app-card-type-form',
  templateUrl: './card-type-form.component.html',
  styles: [
  ]
})
export class CardTypeFormComponent implements OnInit {

  constructor(public service:LookupValuesService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    if(this.service.cardFormData.pkCardTypeId ==0)
    {
      this.insert(form);
    }
  }

  insert(form:NgForm)
  {
    this.service.postCardType().subscribe(
      res=>{
        // Clear form
        this.resetForm(form);
        // show notification
        this.toastr.success('Submitted Succesfully','Card Type');
      },
      err=>{console.log(err)}
    );
  }

  resetForm(form:NgForm)
  {
    //Reset form
    form.form.reset();
    this.service.cardFormData = new LCardType();

  }
}
