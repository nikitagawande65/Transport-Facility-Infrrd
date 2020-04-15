import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportService } from '../transport.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
data={}
bookRideForm :FormGroup;
type:any;
time:any;
number:any;
submitted:boolean=false;
  constructor(private fb:FormBuilder,private transportSrc: TransportService,private router: Router)  {
    this.bookRideForm = this.fb.group({
      id:['', Validators.required],
      

    }) 

   }

  ngOnInit(): void {
      this.data = this.transportSrc.rideData;
   this.type= this.data['vehicleType']
   this.number = this.data['vehicleNumber']
   this.time = this.data['time'];
  }

  get f() { return this.bookRideForm.controls; }

  onClick(){
    this.submitted = true;
  let empid = this.bookRideForm.controls['id'].value;
    let res = this.transportSrc.checkForUniqueId(empid);
    let uniqueEmpBookingId = this.transportSrc.checkForUniqueEmpBookingId(empid)
    if(!res){
      alert("You have already added ride with " +empid+ " employee id. please enter valid employee id");
      return;
    }
    if(!uniqueEmpBookingId){
      alert("You have already booked ride. please enter valid employee id");
      return;
    }
    if (this.bookRideForm.invalid) {
      return;
  }
  this.transportSrc.getUniqueBookingId(empid)
  this.transportSrc.updateVacantSeat(this.data['employeeId'])
  var r= confirm("Your Booking is confirmed...");
if (r==true)
  {
    this.router.navigate(['/']);
  }
  


}
}