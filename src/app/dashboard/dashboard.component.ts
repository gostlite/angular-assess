import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { FlightsService } from '../flights.service';



@Component({
  selector: 'app-dashboard',
  // standalone: true,
  // imports: [CommonModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isVisible: Boolean = true;
  async FlightData() {
    const response = await fetch("https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800");
    const statuscode: number= await response.status
    try {
      if (statuscode !== 200)throw new Error("Service cant be reached at the moment")
      return await response.json() ?? [];
    } catch (error) {
      console.error(error)
    }
     
      
  }

  // items:()=> Promise<any[]>;
  items: any[] = []
  flightList:any[]=[]
    // items:any[]=this.FlightData
  constructor(private service:FlightsService) {
    this.items = [{
      name: "gost",
      age: 21,
      gender:"male"
    },
    {
      name: "inner",
      age: 25,
      gender:"female"
      },
    {
      name: "lie",
      age: 31,
      gender:"male"
      },
    {
      name: "truth",
      age: 24,
      gender:"male"
    }]
  }
    ngOnInit(){
    // Initialization code goes here
      this.service.getData().subscribe((data) => {
        console.log(data);
        this.flightList = data.slice(101)
   // do something with the data
});
  }
}
