import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { TransportService } from '../transport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-ride',
  templateUrl: './add-new-ride.component.html',
  styleUrls: ['./add-new-ride.component.css']
})
export class AddNewRideComponent implements OnInit {
  addRideForm :FormGroup;
  data:[];
  isUnique : boolean = false;
  submitted = false;
    constructor(private fb:FormBuilder, private transportSrc:TransportService,
      private router: Router){
   
      this.addRideForm = this.fb.group({
        empid:['', Validators.required],
        type:['', Validators.required],
        number:['', Validators.required],
        seat:['', Validators.required],
        time:['', Validators.required],
        pickup:['', Validators.required],
        destination:['', Validators.required],

      }) 
  
    }
  
  ngOnInit(): void {
  }
  onSave(){
    this.submitted = true;
    let empid = this.addRideForm.controls['empid'].value;
    let res = this.transportSrc.checkForUniqueId(empid)
    if(!res){
      alert("Employee ID is already exist, please enter valid employee id");
      return;
    }
    if (this.addRideForm.invalid) {
      return;
  }
 
    var reqObj= {};

    reqObj['employeeId'] = this.addRideForm.controls['empid'].value;
    let termCase = this.addRideForm.controls['type'].value;
    let str = termCase[0].toUpperCase() + termCase.slice(1);
 
    reqObj['vehicleType'] = str;
    reqObj['vehicleNumber'] = this.addRideForm.controls['number'].value;
    reqObj['vacantSeat'] = this.addRideForm.controls['seat'].value;
    reqObj['time'] = this.addRideForm.controls['time'].value;
    reqObj['pickupPoint'] = this.addRideForm.controls['pickup'].value;
    reqObj['destination'] = this.addRideForm.controls['destination'].value;

    this.transportSrc.saveData(reqObj)
this.myFunction()

  }
  get f() { return this.addRideForm.controls; }
 myFunction() {
var r= confirm(" Ride Details has been submitted successfully...");
if (r==true)
  {
    this.router.navigate(['/']);
  }
}

}
