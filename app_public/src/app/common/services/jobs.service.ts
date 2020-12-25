import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../classes/user';
import { Job } from '../classes/job';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://localhost:3000/api';

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
    return this.http
      .post(url, job)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  public editJobInfo(job: Job): Promise<Job> {
    const url: string = `${this.apiUrl}/ponudba-del/delo/${job._id}`;
    return this.http
      .put(url, job)
      .toPromise()
      .then(response => response as Job)
      .catch(this.handleError);
  }

  public deleteJob(jobID: string): Observable<void> {
    const url: string = `${this.apiUrl}/ponudba-del/delo/${jobID}`;
    return this.http
      .delete<void>(url)
      .pipe(catchError(this.handleError));
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
