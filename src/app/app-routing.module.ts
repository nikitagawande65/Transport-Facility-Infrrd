import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { AddNewRideComponent } from './add-new-ride/add-new-ride.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RideListComponent } from './ride-list/ride-list.component';


const routes: Routes = [
    { path: '', component: RideListComponent },
    { path: 'book', component: BookRideComponent },
    { path: 'addNewRide', component: AddNewRideComponent },
    { path: '**', component: ErrorPageComponent, data: { message: 'page not found!' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
