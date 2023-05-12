import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports:[],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appName';
  uname: any;
  password: any;
  verified = false;

  authenticate():any{
    if (this.uname === "admin" && this.password === "admin") {
      this.verified = true;
      this.router.navigate(["/dashboard"])
    }
  }
  // items:any[]=this.FlightData
  constructor(private router:Router) {
  }
}
