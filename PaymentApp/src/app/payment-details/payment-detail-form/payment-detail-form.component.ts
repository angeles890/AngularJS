import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LookupValuesService } from 'src/app/shared/lookup-values.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  // init PD Form Component with Service and Toastr via dependency injection
  constructor(public service:PaymentDetailService, private toastr:ToastrService, public lookupService: LookupValuesService) { }
  
  ngOnInit(): void {
    this.lookupService.getCardTypeList();
  }

  onSubmit(form:NgForm)
  {
    if(this.service.formData.paymentDetailID ==0)
    {
      this.insertPaymentDetail(form);
    }
    else
    {
      this.updatePaymentDetail(form);
    }
  }

  insertPaymentDetail(form:NgForm)
  {
        // envoke method from PaymentDetailSerivce
        this.service.postPaymentDetail().subscribe(
          res=>{
            // for success reponse, clear form
            this.resetForm(form);
            // show succesful entry via toaster pop up
            this.toastr.success('Submitted Succesfully','Payment Detail Register');
            this.service.getDetailsList();
          }, 
          err=>{
            // response Error, log error to console
            console.log(err);
          }
        );
  }

  updatePaymentDetail(form:NgForm)
  {
    this.service.putPaymentDetail().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info('Update Success','Payment Detail Register');
        this.service.getDetailsList();
      },
      err=>{
        console.log(err);
      }
    );
    
  }

  resetForm(form:NgForm)
  {
    //Reset form
    form.form.reset();
    // set formData object to fresh new object
    this.service.formData = new PaymentDetail();
  }
}
