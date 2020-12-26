import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../classes/user';
import { Job } from '../classes/job';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BROWSER_CACHE } from '../classes/cache';
import { AuthenticationService } from './authentication.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    @inject(BROWSER_CACHE) private cache: Storage  
  ) { }

  private apiUrl: string = environment.apiUrl;

  public getJobs(): Promise<Job[]> {
    const url: string = `${this.apiUrl}/ponudba-del`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Job[])
      .catch(this.handleError);
  }

  public getJobInfo(jobID: string): Promise<Job> {
    const url: string = `${this.apiUrl}/ponudba-del/delo/${jobID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Job)
      .catch(this.handleError);
  }

  public postNewJob(job: Job): Promise<any> {
    const url: string = `${this.apiUrl}/ponudba-del`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .post(url, job)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  public editJobInfo(job: Job): Promise<Job> {
    const url: string = `${this.apiUrl}/ponudba-del/delo/${job._id}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .put(url, job)
      .toPromise()
      .then(response => response as Job)
      .catch(this.handleError);
  }

  public deleteJob(jobID: string): Observable<void> {
    const url: string = `${this.apiUrl}/ponudba-del/delo/${jobID}`;
    const httpProperties = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.cache.getItem('stbree-token')}`
      })
    };
    return this.http
      .delete<void>(url)
      .pipe(catchError(this.handleError));
  }

  public signUp(jobID: string): Promise<any> {
    const currentUserEmail = this.authenticationService.getCurrentUser().email;
    const url: string = `${this.apiUrl}/ponudba-del/delo/${jobID}/prijava`;
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

  public getJobHost(userID: string): Promise<User> {
    const url: string = `${this.apiUrl}/uporabnik/${userID}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as User)
      .catch(this.handleError);
  }

  private handleError(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
}
