import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { FlightDataStructure } from './flight-data-structure'; 
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }
   getData(): Observable<any> {
  return this.http.get<any>("https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800")
    .pipe(
      catchError(this.handleError)
    );
   }
  
  private handleError(error: any): Observable<any> {
  console.error('An error occurred', error); // log the error to the console
  return throwError('Something went wrong'); // return an observable with a user-friendly error message
}
}
