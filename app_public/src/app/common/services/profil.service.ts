import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //podobno kot axios

import { User } from '../classes/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';

  public getUser(userID: string): Promise<User> {
    const url: string = `${this.apiUrl}/uporabnik/${userID}` //dodaj ID
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  public editUserInfo(user: User): Promise<User> {
    const url: string = `${this.apiUrl}/uporabnik/${user._id}`;
    return this.http
      .put(url, user)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  public deleteUser(userID: string): Observable<void> {
    const url: string = `${this.apiUrl}/uporabnik/${userID}`;
    return this.http
      .delete<void>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error("Error in the service", error);
    return Promise.reject(error.message || error);
  }
}
