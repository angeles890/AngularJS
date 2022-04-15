import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html'
})
export class PaymentDetailsComponent implements OnInit {

  // init component with reference to PaymentDetailService via dependency injection
  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  // functions within this lifecylce hook are envoked when the component is completely rendered 
  ngOnInit(): void {
    this.service.getDetailsList();
  }

  populateForm(selectedRecord:PaymentDetail)
  {
    // Create an empty object, and assign it to value of selected record
    // Need to do this to seperate the form instance from the data table record instance
    this.service.formData = Object.assign({},selectedRecord) ;
  }

  onDelete(id:number)
  {
    if(confirm('Are you sure you want to delete this record?'))
    {
      this.service.deletePaymentDetail(id)
      .subscribe(
        res=>{
          this.service.getDetailsList();
          this.toastr.error('Deleted Succesfully','Payment Detail Register');
        }, 
        err=>{ console.log(err)}
      );
    }
  }

}
