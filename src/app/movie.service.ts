import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import {MOVIES} from './mock-movies';
import {Movie} from './movie';

@Injectable()
export class MovieService {
    constructor(private http: Http) { }
    private movieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=1c27e642d8cedef632716f85732ec043';
    getMovies():Promise <Movie []> {
        //return Promise.resolve(MOVIES);
        return this.http.get(this.movieUrl)
               .toPromise()
               .then(response => response.json().results as Movie[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}