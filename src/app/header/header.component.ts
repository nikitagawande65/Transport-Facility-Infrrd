import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleMenu() {
    window.scrollTo(0, 0); 
    this.isOpen = this.isOpen ? false: true;
 }

}
