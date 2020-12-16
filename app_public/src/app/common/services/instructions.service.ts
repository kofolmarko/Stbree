import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../classes/user';
import { InstructionsEvent } from '../classes/event';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstructionsService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = "http://localhost:3000/api";

  public getInstructors(): Promise<User[]> {
    const url: string = `${this.apiUrl}/uporabniki`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        response = this.filterInstructors(response);
        return response as User[];
      })
      .catch(this.handleError);
  }

  private filterInstructors(users): User[] {
    for(let i=users.length-1; i>=0; i--) {
      if(!users[i].statusInstruktorja) {
        users.splice(i, 1);
      }
    }
    
    return users;
  }

  public getEvents(): Promise<InstructionsEvent[]> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as InstructionsEvent[])
      .catch(this.handleError);
  }

  public getEventInfo(eventID: string): Promise<InstructionsEvent> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as InstructionsEvent)
      .catch(this.handleError);
  }

  public postNewEvent(event: InstructionsEvent): Promise<any> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki`;
    return this.http
      .post(url, event)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  public editEventInfo(event: InstructionsEvent): Promise<InstructionsEvent> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}`;
    return this.http
      .put(url, event)
      .toPromise()
      .then(response => response as InstructionsEvent)
      .catch(this.handleError);
  }

  public deleteEvent(eventID: string): Observable<void> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}`;
    return this.http
      .delete<void>(url)
      .pipe(catchError(this.handleError));
  }

  public getEventHost(userID: string): Promise<User> {
    const url: string = `${this.apiUrl}/uporabnik/${userID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  /* P O P R A V I ! ! ! */
  private handleError(error: any): Promise<any> {
    //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error.message || error);
    //return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error.message || error);
    console.error("Error in the service");
    return;
  }

}
