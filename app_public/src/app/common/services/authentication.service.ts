import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BROWSER_CACHE } from '../classes/cache';
import { environment } from '../../../environments/environment';

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

  private apiUrl: string = environment.apiUrl;

  public async login(user: User): Promise<any> {
    return this
      .authenticateLogin(user)
      .then((AuthenticationResult: AuthenticationResult) => {
        this.setToken(AuthenticationResult["token"]);
      });
  }

  public async register(user: User): Promise<any> {
    let existingEmail;
    this.getUser(user.email)
    .then((user) => existingEmail = user.email)
    .catch((err) => existingEmail = null);

    if(existingEmail != null) {
      return null
    } else {
      return this
      .authenticateRegister(user)
      .then((AuthenticationResult: AuthenticationResult) => {
        this.setToken(AuthenticationResult["token"]);
      });
    }
  }

  public logout(): void {
    this.storage.removeItem('stbree-token');
  }

  private authenticateLogin(user: User): Promise<AuthenticationResult> {
    return this.authentication('prijava', user);
  }

  private authenticateRegister(user: User): Promise<AuthenticationResult> {
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
      const usefulContents = JSON.parse(this.b64Utf8(token.split('.')[1]));
      return usefulContents.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  //dodaj isAdmin

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, ime, priimek, statusInstruktorja } = JSON.parse(this.b64Utf8(token.split('.')[1]));
      //console.log(JSON.parse(this.b64Utf8(token.split('.')[1])))
      return { email, ime, priimek, statusInstruktorja } as User;
    }
  }

  private b64Utf8(string: string): string {
    return decodeURIComponent(
      Array.prototype.map
        .call(
          atob(string),
          (character: string) => {
            return '%' + ('00' + character.charCodeAt(0).toString(16)).slice(-2);
          }
        )
        .join('')
    );
  };

  public getUser(email: string): Promise<User> {
    const url: string = `${this.apiUrl}/uporabnik/${email}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => {
        let { email, ime, priimek, opis, statusInstruktorja, telefonskaStevilka, dogodki, dela }: any = response;
        return { email, ime, priimek, opis, statusInstruktorja, telefonskaStevilka, dogodki, dela } as User;
      })
      .catch(this.handleError);
  }

  public dropDB():Promise<any> {
    console.log("Reached the service...");
    const url: string = `${this.apiUrl}/db/dropDB`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  public dropUsers():Promise<any> {
    console.log("Reached the service...");
    const url: string = `${this.apiUrl}/db/dropUsers`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as any)
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
