import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { User, Sporocila } from '../classes/user';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BROWSER_CACHE } from '../classes/cache';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    @Inject(BROWSER_CACHE) private cache: Storage  
    ) { }

  private apiUrl: string = environment.apiUrl;

  public pridobiKontakte(email: string): Promise<any> {
   
    const url: string = `${this.apiUrl}/chat/${email}`;

    return this.http
    .get(url)
    .toPromise()
    .then(odgovor => odgovor)
    .catch(this.obdelajNapako);
  }

  public pridobiSporocila(email: string, idPrejemnika: string): Promise<any> {
    const url: string = `${this.apiUrl}/chat/${email}/${idPrejemnika}`;

    return this.http
    .get(url)
    .toPromise()
    .then(odgovor => odgovor)
    .catch(this.obdelajNapako)
  }

  public posljiSporocilo(email: string, podatkiObrazca: any): Promise<any> {
    const url: string = `${this.apiUrl}/chat/${email}`;

    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };

    return this.http
    .post(url, podatkiObrazca, httpProperties)
    .toPromise()
    .then(odgovor => odgovor)
    .catch(this.obdelajNapako)
  }

  public posljiKontakt(emailUporabnika: string, podatkiObrazca: any): Promise<any> {
    const url: string = `${this.apiUrl}/chat/${emailUporabnika}/${podatkiObrazca.emailKontakta}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };

    return this.http
    .post(url, podatkiObrazca, httpProperties)
    .toPromise()
    .then(odgovor => odgovor)
    .catch(this.obdelajNapako)
  }

  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
}
