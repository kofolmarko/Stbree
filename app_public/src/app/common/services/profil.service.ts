import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //podobno kot axios

import { User } from '../classes/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BROWSER_CACHE } from '../classes/cache';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    @Inject(BROWSER_CACHE) private cache: Storage
    ) { }

  private apiUrl = 'http://localhost:3000/api';


  // public editUserInfo(user: User): Promise<User> {
  //   const url: string = `${this.apiUrl}/uporabnik/${user._id}`;
  //   return this.http
  //     .put(url, user)
  //     .toPromise()
  //     .then(response => response as User)
  //     .catch(this.handleError);
  // }

  public editUserInfo(user: User): Promise<User> {
    const url: string = `${this.apiUrl}/uporabnik/${user.email}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .put(url, user, httpProperties)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  // public gradeUser(userEmail: string): Promise<any> {
  //   const currentUserEmail = this.authenticationService.getCurrentUser().email;
  //   const url: string = `${this.apiUrl}/uporabnik/ocena/${userEmail}`;
  //   const httpProperties = {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
  //     })
  //   };
  //   return this.http
  //   .post(url, {currentUserEmail}, httpProperties)
  //   .toPromise()
  //   .then(response => response as any)
  //   .catch(this.handleError);
  // }

  // public editUserPassword(user: User): Promise<User> {
  //   const url: string = `${this.apiUrl}/uporabnik/${user.email}`;
  //   const httpProperties = {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
  //     })
  //   };
  //   return this.http
  //     .put(url, user, httpProperties)
  //     .toPromise()
  //     .then(response => response as User)
  //     .catch(this.handleError);
  // }

  public deleteUser(userEmail: string): Observable<void> {
    const url: string = `${this.apiUrl}/uporabnik/${userEmail}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .delete<void>(url, httpProperties)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error("Error in the service", error);
    return Promise.reject(error.message || error);
  }
}
