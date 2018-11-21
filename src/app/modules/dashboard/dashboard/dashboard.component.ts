import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Movie } from '../../shared/models/movie';
import { Studio } from '../../shared/models/studio';
import { Year } from '../../shared/models/year';
import { AppService } from '../../shared/services/app.service';
import { IntervalData } from './../../shared/models/interval-data';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

    tableYears = [{
        ths: [
            { text: 'Year', class: 'text-center' },
            { text: 'Win Count', class: 'text-center' }
        ],
        tds: []
    }];

    tableStudios = [{
        ths: [
            { text: 'Name', class: 'text-center' },
            { text: 'Win Count', class: 'text-center' }
        ],
        tds: []
    }];
    limitTableStudios = 3;

    tablesProducers = [{
        caption: 'Maximun',
        ths: [
            { text: 'Producer', class: 'text-center' },
            { text: 'Interval', class: 'text-center' },
            { text: 'Previous Year', class: 'text-center' },
            { text: 'Following Year', class: 'text-center' }
        ],
        tds: []
    }, {
        caption: 'Minimun',
        ths: [
            { text: 'Producer', class: 'text-center' },
            { text: 'Interval', class: 'text-center' },
            { text: 'Previous Year', class: 'text-center' },
            { text: 'Following Year', class: 'text-center' }
        ],
        tds: []
    }];

    tableMovieByYear = [{
        ths: [
            { text: 'Id', class: 'text-center' },
            { text: 'Title', class: 'text-center' },
            { text: 'Year', class: 'text-center' }
        ],
        tds: []
    }];

    defaultYear = new Date().getFullYear();
    subYear: Subscription;

    constructor(
        private appService: AppService
    ) { }

    ngOnInit() {
        this.getYearsOfMoreWinners();
        this.getStudios();
        this.getProducersAwardsInterval();
        this.getMovieByYear();
        this.subscribeYear();
        this.appService.yearEmitter.emit(this.defaultYear);
    }

    getYearsOfMoreWinners() {
        this.appService.getYearsOfMoreWinners()
            .subscribe(result => {
                this.mountYearData(result.years);
            });
    }

    mountYearData(years: Year[]) {
        this.tableYears[0].tds = years.map(year => {
            return [
                { text: year.year, class: 'text-center' },
                { text: year.winnerCount, class: 'text-center' }
            ];
        });
    }

    getStudios() {
        this.appService.getStudios()
            .subscribe(result => {
                this.mountStudioData(result.studios);
            });
    }

    mountStudioData(studios: Studio[]) {
        this.tableStudios[0].tds = studios.map((studio, i) => {
            if (i < this.limitTableStudios || !this.limitTableStudios) {
                return [
                    { text: studio.name, class: 'text-center' },
                    { text: studio.winCount, class: 'text-center' }
                ];
            }
        });
    }

    getProducersAwardsInterval() {
        this.appService.getProducersAwardsInterval()
            .subscribe(result => {
                this.mountProducersAwardsIntervalData(result);
            });
    }

    mountProducersAwardsIntervalData(interval: IntervalData) {
        this.tablesProducers[0].tds = interval.max.map((max) => {
            return [
                { text: max.producer, class: 'text-center' },
                { text: max.interval, class: 'text-center' },
                { text: max.previousWin, class: 'text-center' },
                { text: max.followingWin, class: 'text-center' }
            ];
        });

        this.tablesProducers[1].tds = interval.min.map((min) => {
            return [
                { text: min.producer, class: 'text-center' },
                { text: min.interval, class: 'text-center' },
                { text: min.previousWin, class: 'text-center' },
                { text: min.followingWin, class: 'text-center' }
            ];
        });
    }

    getMovieByYear() {
        this.appService.getMovieByYear(this.defaultYear)
            .subscribe(result => {
                this.mountMovieByYear(result);
            });
    }

    mountMovieByYear(movies: Movie[]) {
        this.tableMovieByYear[0].tds = movies.map(movie => {
            return [
                { text: movie.id, class: 'text-center' },
                { text: movie.title, class: 'text-center' },
                { text: movie.year, class: 'text-center' }
            ];
        });
    }

    subscribeYear() {
        this.subYear = this.appService.yearEmitter
            .subscribe(year => {
                this.defaultYear = year;
                this.getMovieByYear();
            });
    }

    ngOnDestroy() {
        this.subYear.unsubscribe();
    }
}
