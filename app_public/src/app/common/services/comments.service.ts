import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { InstructionsEvent } from '../classes/event';
import { BROWSER_CACHE } from '../classes/cache';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import { Komentar } from '../../common/classes/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    @Inject(BROWSER_CACHE) private cache: Storage
  ) { }

  private apiUrl: string = environment.apiUrl;

  /* Nov komentar */
  public postNewComment(event: InstructionsEvent, comment: Komentar): Promise<any> {
    // console.log("Podatki so prišli v service, in sicer so naslednji:");
    // console.log(event);
    // console.log(comment);
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}/komentarji`;
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

  public editComment(comment: Komentar, event: InstructionsEvent): Promise<Komentar> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${event._id}/komentarji/${comment._id}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .put(url, comment, httpProperties)
      .toPromise()
      .then(response =>  response as any)
      .catch(this.handleError);
  }

  public deleteComment(eventID: string, commentID: string): Observable<void> {
    const url: string = `${this.apiUrl}/instrukcije-dogodki/dogodek/${eventID}/komentarji/${commentID}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .delete<void>(url, httpProperties)
      .pipe(catchError(this.handleError));
  }

  /* P O P R A V I ! ! ! */
  private handleError(error: any): Promise<any> {
    //console.error('Error in the service.', error.error["sporočilo"] || error.error.errmsg || error);
    return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error);
    // console.error("Error in the service");
    // return;
  }

}
