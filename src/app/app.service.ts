import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getKnowledges(): Observable<any> {
    return this.http.get('assets/json/knowledges.json')
      .pipe(
        tap(result => {
          // console.log(`getKnowledges`)
        }),
        catchError(this.handleError('getKnowledges', []))
      );
  }

  getSummary(): Observable<any> {
    return this.http.get('assets/json/summary.json')
      .pipe(
        tap(result => {
          // console.log(`getKnowledges`)
        }),
        catchError(this.handleError('summary', []))
      );
  }




  getAvatar(): Observable<any> {
    return this.http.get('assets/json/avatar.json')
      .pipe(
        tap(result => {
          // console.log(`getAvatar`)
        }),
        catchError(this.handleError('getAvatar', []))
      );
  }

  getProfile(): Observable<any> {
    return this.http.get('assets/json/profile.json')
      .pipe(
        tap(result => {
          // console.log(`getProfile`)
        }),
        catchError(this.handleError('getProfile', []))
      );
  }

  getContact(): Observable<any> {
    return this.http.get('assets/json/contact.json')
      .pipe(
        tap(result => {
          // console.log(`getContact`)
        }),
        catchError(this.handleError('getContact', []))
      );
  }

  getPersonalInformation(): Observable<any> {
    return this.http.get('assets/json/personalInformation.json')
      .pipe(
        tap(result => {
          // console.log(`getPersonalInformation`)
        }),
        catchError(this.handleError('getPersonalInformation', []))
      );
  }

  getAcademicInformation(): Observable<any> {
    return this.http.get('assets/json/academicInformation.json')
      .pipe(
        tap(result => {
          // console.log(`getAcademicInformation`)
        }),
        catchError(this.handleError('getAcademicInformation', []))
      );
  }

  getCertifications(): Observable<any> {
    return this.http.get('assets/json/certifications.json')
      .pipe(
        tap(result => {
          // console.log(`getCertifications`)
        }),
        catchError(this.handleError('getCertifications', []))
      );
  }

  

  getWorkExperience(): Observable<any> {
    return this.http.get('assets/json/workExperience.json')
      .pipe(
        tap(result => {
          // console.log(`getWorkExperience`)
        }),
        catchError(this.handleError('getWorkExperience', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
