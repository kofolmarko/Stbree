import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BROWSER_CACHE } from '../classes/cache';

import { User } from '../classes/user';
import { AuthenticationResult } from '../classes/authentication-result';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_CACHE) private storage: Storage,
    private http: HttpClient
  ) { }

  private apiUrl: string = "http://localhost:3000/api";

  public async login(user: User): Promise<any> {
    return this
      .authenticateLogin(user)
      .then((AuthenticationResult: AuthenticationResult) => {
        this.setToken(AuthenticationResult["token"]);
      });
  }

  public async register(user: User): Promise<any> {
    console.log("auth service");
    return this
      .authenticateRegister(user)
      .then((AuthenticationResult: AuthenticationResult) => {
        this.setToken(AuthenticationResult["token"]);
      });
  }

  public logout(): void {
    this.storage.removeItem('stbree-token');
  }

  private authenticateLogin(user: User): Promise<AuthenticationResult> {
    return this.authentication('prijava', user);
  }

  private authenticateRegister(user: User): Promise<AuthenticationResult> {
    console.log("authenticare regi");
    return this.authentication('registracija', user);
  }

  private authentication(subUrl: string, user: User): Promise<AuthenticationResult> {
    const url: string = `${this.apiUrl}/${subUrl}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then(rezultat => rezultat as AuthenticationResult)
      .catch(this.handleError);
  }

  public getToken(): string {
    return this.storage.getItem('stbree-token');
  }

  public setToken(token: string): void {
    this.storage.setItem('stbree-token', token);
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const usefulContents = JSON.parse(atob(token.split('.')[1]));
      console.log(usefulContents);
      console.log(Date.now() / 1000);
      return usefulContents.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, ime } = JSON.parse(atob(token.split('.')[1]));
      return { email, ime } as User;
    }
  }

  /* P O P R A V I ! ! ! */
  private handleError(error: any): Promise<any> {
    //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error.message || error);
    //return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error.message || error);
    console.error("Error in the service");
    return;
  }
}
