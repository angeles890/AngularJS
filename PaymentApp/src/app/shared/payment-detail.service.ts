import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http:HttpClient) { }

  formData:PaymentDetail = new PaymentDetail();
  detailsList: PaymentDetail[];

  readonly baseURL = "https://localhost:44397/api/PaymentDetails";
  // POST 
  // api/PaymentDetails
  // submits Form with PaymentDetail Model for creation
  postPaymentDetail(){
    return this.http.post(this.baseURL,this.formData);
  }

  // PUT
  // api/PaymentDetails/
  // Updates a given Paymentdetails object
  putPaymentDetail()
  {
    return this.http.put(`${this.baseURL}/${this.formData.paymentDetailID}`,this.formData);
  }

  // GET 
  // api/PaymentDetails
  // Returns a List<PaymentDetail>
  getDetailsList()
  {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res=> this.detailsList = res as PaymentDetail[]);
  }

  // DELETE: 
  // api/PaymentDetails/5
  // Removes item
  deletePaymentDetail(id:number)
  {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
