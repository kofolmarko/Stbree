import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Sporocila } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';

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

    return this.http
    .post(url, podatkiObrazca)
    .toPromise()
    .then(odgovor => odgovor)
    .catch(this.obdelajNapako)
  }

  public posljiKontakt(emailUporabnika: string, podatkiObrazca: any): Promise<any> {
    const url: string = `${this.apiUrl}/chat/${emailUporabnika}/${podatkiObrazca.emailKontakta}`;

    return this.http
    .post(url, podatkiObrazca)
    .toPromise()
    .then(odgovor => odgovor)
    .catch(this.obdelajNapako)
  }

  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
}
