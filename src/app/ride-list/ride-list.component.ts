import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';
import { DATA } from '../mock_data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {
  rideList = [];

  constructor(private transportSrc: TransportService,private router: Router) { }
  ngOnInit(): void {
    this.getAllRides();
  }
  getAllRides(): void {
    this.transportSrc.getRides()
      .subscribe(rideList => this.rideList = rideList);
  }

  search(term: string): void {
    console.log(term)
    if (term == undefined || term == null || term == ''){
    this.transportSrc.getRides()
      .subscribe(rideList => {
        if(rideList.vacantSeat >0 )
        return;
          else
          this.rideList = rideList
      }
       );
    }
    else{
    let termCase = term.split('');
    let str = termCase[0].toUpperCase();
    this.rideList = DATA.filter(data => data.vehicleType.includes(str))
    }
}
onClick(data){
  if(data['vacantSeat'] <1){
    alert("Seat is not available. Please find some other ride.");
    return;
  }
  this.transportSrc.currentride(data)
  this.router.navigate(['/book']);
}

}
