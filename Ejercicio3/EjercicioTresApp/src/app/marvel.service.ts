import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsMarvel } from './Constants/constants';
import { catchError, map, pluck, take, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private http: HttpClient
  ) { }

    

  ngOnInit() {
  }

  getHeroes(): Observable<any> {
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${ConstantsMarvel.PUBLIC_KEY}&hash=${ConstantsMarvel.HASH}&limit=20`;
    return this.http.get<any>(url).pipe(
      map( (resp: any) => resp.data.results),
      catchError( err => {
        return throwError('ThrowError', err);
      } )
    );
  };

  getHeroesWithName(name: string): Observable<any> {
    const urlName = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=${ConstantsMarvel.PUBLIC_KEY}&hash=${ConstantsMarvel.HASH}`;
    return this.http.get<any>(urlName).pipe(
      map( (resp: any) => resp.data.results),
      catchError( err => {
        return throwError('ThrowError', err);
      } )
    );
  };

  getHeroesPlus(limit: number, offset: number): Observable<any> {
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${ConstantsMarvel.PUBLIC_KEY}&hash=${ConstantsMarvel.HASH}&limit=${limit}&offset=${offset}`;
    return this.http.get<any>(url).pipe(
      map( (resp: any) => resp.data.results),
      catchError( err => {
        return throwError('ThrowError', err);
      } )
    );
    
  };

 

}
