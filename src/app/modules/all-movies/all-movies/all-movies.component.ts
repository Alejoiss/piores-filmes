import { PaginatorService } from './../../shared/services/paginator.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AppService } from '../../shared/services/app.service';
import { MovieData } from '../../shared/models/movie-data';

@Component({
    selector: 'app-all-movies',
    templateUrl: './all-movies.component.html',
    styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit, OnDestroy {

    tableMovies = [{
        ths: [
            { text: 'Id', class: 'text-center' },
            { text: 'Title', class: 'text-center' },
            { text: 'Year', class: 'text-center' },
            { text: 'Winner', class: 'text-center' }
        ],
        tds: []
    }];

    selectedYear: number = null;
    selectedWinner: boolean = null;
    subYear: Subscription;
    subWinner: Subscription;
    subPage: Subscription;
    movieData: MovieData;
    selectedPage = 0;

    constructor(
        private appService: AppService,
        private paginatorService: PaginatorService
    ) { }

    ngOnInit() {
        this.getMovieData();
        this.subscribeYear();
        this.subscribeWinner();
        this.subscribePage();
    }

    getMovieData() {
        this.appService.getMovieData({
            page: this.selectedPage,
            size: 10,
            year: this.selectedYear,
            winner: this.selectedWinner
        }).subscribe(result => {
            this.movieData = result;
            this.mountMovieByYear(result);
        });
    }

    mountMovieByYear(movies: MovieData) {
        this.tableMovies[0].tds = movies.content.map(movie => {
            return [
                { text: movie.id, class: 'text-center' },
                { text: movie.title, class: 'text-center' },
                { text: movie.year, class: 'text-center' },
                { text: movie.winner ? 'Yes' : 'No', class: 'text-center' }
            ];
        });
    }

    subscribeYear() {
        this.subYear = this.appService.yearEmitter
            .subscribe(year => {
                if (this.selectedYear !== year) {
                    this.selectedPage = 0;
                }
                this.selectedYear = year;
                this.getMovieData();
            });
    }

    subscribeWinner() {
        this.subWinner = this.appService.winnerEmitter
            .subscribe(winner => {
                if (this.selectedWinner !== winner) {
                    this.selectedPage = 0;
                }
                this.selectedWinner = winner;
                this.getMovieData();
            });
    }

    subscribePage() {
        this.subPage = this.paginatorService.pageNumberEvent
            .subscribe(page => {
                this.selectedPage = page;
                this.getMovieData();
            });
    }

    ngOnDestroy() {
        if (this.subWinner) {
            this.subWinner.unsubscribe();
        }
        if (this.subYear) {
            this.subYear.unsubscribe();
        }
        if (this.subPage) {
            this.subPage.unsubscribe();
        }
    }
}
