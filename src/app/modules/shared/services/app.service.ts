import { IntervalData } from './../models/interval-data';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';
import { MovieData } from './../models/movie-data';
import { StudioData } from './../models/studio-data';
import { YearsData } from './../models/years-data';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    domain = 'https://tools.texoit.com/backend-java/api/movies';

    yearEmitter: EventEmitter<number> = new EventEmitter<number>();
    winnerEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private http: HttpClient
    ) { }

    getMovieData(page = 1, size = 10, winner = true, year = 2018): Observable<MovieData> {
        return this.http.get<MovieData>(`${this.domain}?page=${page}&size=${size}&winner=${winner}&year=${year}`);
    }

    getYearsOfMoreWinners(): Observable<YearsData> {
        return this.http.get<YearsData>(`${this.domain}?projection=years-with-multiple-winners`);
    }

    getStudios(): Observable<StudioData> {
        return this.http.get<StudioData>(`${this.domain}?projection=studios-with-win-count`);
    }

    getProducersAwardsInterval(): Observable<IntervalData> {
        return this.http.get<IntervalData>(`${this.domain}?projection=max-min-win-interval-for-producers`);
    }

    getMovieByYear(year: number): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.domain}?winner=true&year=${year}`);
    }
}
