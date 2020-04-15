import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RideListComponent } from './ride-list/ride-list.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { AddNewRideComponent } from './add-new-ride/add-new-ride.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RideListComponent,
    BookRideComponent,
    AddNewRideComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
