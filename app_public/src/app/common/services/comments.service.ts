import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { InstructionsEvent } from '../classes/event';
import { BROWSER_CACHE } from '../classes/cache';
import { AuthenticationService } from './authentication.service';
import { Komentar } from '../components/komentarji/komentarji-seznam/komentarji-seznam.component';

@Injectable({
  providedIn: 'root'
})
export class  CommentsService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    @Inject(BROWSER_CACHE) private cache: Storage 
  ) { }

  private apiUrl: string = environment.apiUrl;

  /* Nov komentar */
  public postNewComment(event: InstructionsEvent, comment: Komentar): Promise<any> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .post(url, comment, httpProperties)
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
