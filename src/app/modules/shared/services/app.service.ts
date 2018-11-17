import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';
import { MovieData } from './../models/movie-data';
import { Studio } from './../models/studio';
import { YearsData } from './../models/years-data';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    domain = 'https://tools.texoit.com/backend-java/api/movies';

    constructor(
        private http: HttpClient
    ) { }

    getMovieData(page = 1, size = 10, winner = true, year = 2018): Observable<MovieData> {
        return this.http.get<MovieData>(`${this.domain}?page=${page}&size=${size}&winner=${winner}&year=${year}`);
    }

    getYearsOfMoreWinners(): Observable<YearsData> {
        return this.http.get<YearsData>(`${this.domain}?projection=years-with-multiple-winners`);
    }

    getStudios(): Observable<Studio[]> {
        return this.http.get<Studio[]>(`${this.domain}?projection=studios-with-win-count`);
    }

    getProducersAwardsInterval(): Observable<any> {
        return this.http.get<any>(`${this.domain}?projection=max-min-win-interval-for-producers`);
    }

    getMovieByYear(year = 2018): Observable<Movie> {
        return this.http.get<Movie>(`${this.domain}?winner=true&year=${year}`);
    }
}
