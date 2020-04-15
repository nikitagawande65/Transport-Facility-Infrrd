import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { DATA } from './mock_data';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  data:any=[]
  rideData= {};
  bookingId=[];
  constructor() { }
  getRides():Observable<any> {
    return of(DATA);
   }
   saveData(obj){
    DATA.push(obj);
  
    }
     checkForUniqueId(id){
      for( let d of DATA){
        if(d.employeeId == id){
          return false;
        }
      }
        return true;
      }

      currentride(data){
        this.rideData = data;
      }
      getUniqueBookingId(id){
        this.bookingId.push(id);
      }
      checkForUniqueEmpBookingId(eid){
        for( let id of this.bookingId){
          if(id == eid){
            return false;
          }
        }
        return true;
        }
        updateVacantSeat(id){
          for( let d of DATA){
            if(d.employeeId == id){
             d.vacantSeat = d.vacantSeat -1;
             console.log('vacant',d.vacantSeat);
            }
          }
        }
  
}
