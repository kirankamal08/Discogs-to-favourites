import { Injectable } from '@angular/core';
import {HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Dicogs} from './dicogs';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisFinderService {
  selectedRec:Dicogs;
  discogs:Dicogs[];
  readonly baseURL = 'http://localhost:3000/discogs';
  readonly DelURL = 'http://localhost:3000/discogs/remove';
  constructor(private _http:HttpClient) { }

 consumerKey = 'fdcuhtjKYqnpoIrvAaQK';
 consumerSecret = 'UkMawUgGphTQmPjFIzfItIASxmwMjUvf';
 //private api_url = "https://api.discogs.com/database/search?q=Nirvana&key=fdcuhtjKYqnpoIrvAaQK&secret=UkMawUgGphTQmPjFIzfItIASxmwMjUvf";
 private api_url = "https://api.discogs.com/database/search";
 private filter_url = "http://localhost:3000/discogs/show";
  
 getDicogs(searchParam) {
   var url = this.api_url+'?q='+searchParam+'&key=fdcuhtjKYqnpoIrvAaQK&secret=UkMawUgGphTQmPjFIzfItIASxmwMjUvf';
    return this._http.get(url).
    pipe(map(res => res));
 // return fetch('https://api.discogs.com/database/search?q='+searchParam+'&key=fdcuhtjKYqnpoIrvAaQK&secret=UkMawUgGphTQmPjFIzfItIASxmwMjUvf');
  }
  postDiscogs(data:Dicogs) {
   // console.log(data);
   // return this._http.post(this.baseURL, data).pipe(catchError(this.handleError));
    return this._http.post(this.baseURL, data).pipe(catchError(this.handleError));
   //console.log(data);
  }

  /* getDiscogs(page) {
    return this._http.get(this.baseURL);
  } */
  getDiscogs(page) {
  return this._http.get(`http://localhost:3000/discogs?page=${page}`);
  }
 

  searchedGenre(filterparam,page) {
  // filterparam = 'ska';
    //const filtertext = { params: new HttpParams({fromString:"style="+filterparam}) };
    const filtertext = { params: new HttpParams({fromString:`style=`+filterparam+`&pageF=`+page}) };
   // return this._http.get(this.filter_url,filtertext);
     //return this._http.get(`http://localhost:3000/discogs/show/?pageF=${page}`,filtertext);
   //  console.log(filterparam);
    // console.log(filtertext);
     return this._http.get(`http://localhost:3000/discogs/show/`,filtertext);
  }

  /* searchedGenre(filterparam,data) {
    const filtertext = { params: new HttpParams({fromString:"style="+filterparam}) };
    return this._http.get(`http://localhost:3000/discogs/show?page=${data}`,filtertext);
  } */

  handleError(error: HttpErrorResponse){
    console.log("lalalalalalalala");
    return throwError(error);
    }

    delDiscogs(id:String) {
      return this._http.delete(this.DelURL + `/${id}`);
     //var url = this._http.delete(this.DelURL + `/${id}`);
    }
}
