import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../classes/user';
import { InstructionsEvent } from '../classes/event';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BROWSER_CACHE } from '../classes/cache';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InstructionsService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    @Inject(BROWSER_CACHE) private cache: Storage  
  ) { }

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
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .post(url, event, httpProperties)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  public editEventInfo(event: InstructionsEvent): Promise<InstructionsEvent> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .put(url, event, httpProperties)
      .toPromise()
      .then(response => response as InstructionsEvent)
      .catch(this.handleError);
  }

  public deleteEvent(eventID: string): Observable<void> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .delete<void>(url, httpProperties)
      .pipe(catchError(this.handleError));
  }

  public signUp(eventID: string): Promise<any> {
    const currentUserEmail = this.authenticationService.getCurrentUser().email;
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}/prijava`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
    .post(url, {currentUserEmail}, httpProperties)
    .toPromise()
    .then(response => response as any)
    .catch(this.handleError);
  }

  public getEventHost(userEmail: string): Promise<User> {
    const url: string = `${this.apiUrl}/uporabnik/${userEmail}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  /* P O P R A V I ! ! ! */
  private handleError(error: any): Promise<any> {
    //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error);
    return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error);
    // console.error("Error in the service");
    // return;
  }

}
