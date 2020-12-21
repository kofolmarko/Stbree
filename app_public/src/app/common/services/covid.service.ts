import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = "https://api.covid19api.com/total/country/slovenia/status/confirmed";

  public getCovidInfo(): Promise<any> {
    const url: string = this.apiUrl;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        console.log(response);
        return response as any;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error.message || error);
    //return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error.message || error);
    console.error("Error in the service");
    console.log(error);
    return Promise.reject(error.error);
  }
}
