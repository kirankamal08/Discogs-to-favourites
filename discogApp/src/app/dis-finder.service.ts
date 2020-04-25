import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisFinderService {
  constructor(private _http:HttpClient) { }

 consumerKey = 'fdcuhtjKYqnpoIrvAaQK';
 consumerSecret = 'UkMawUgGphTQmPjFIzfItIASxmwMjUvf';
 private api_url = "https://api.discogs.com/database/search?q=Nirvana&key=fdcuhtjKYqnpoIrvAaQK&secret=UkMawUgGphTQmPjFIzfItIASxmwMjUvf";
  
 getDicogs(searchParam) {
    //console.log(searchParam);
    return this._http.get(this.api_url).
    pipe(map(res => res));
  }
}
