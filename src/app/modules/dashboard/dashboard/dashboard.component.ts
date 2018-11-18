import { Component, OnInit } from '@angular/core';

import { Studio } from '../../shared/models/studio';
import { Year } from '../../shared/models/year';
import { AppService } from '../../shared/services/app.service';
import { IntervalData } from './../../shared/models/interval-data';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    tableYears = [{
        ths: [
            { text: 'Year', class: 'text-left' },
            { text: 'Win Count', class: 'text-right' }
        ],
        tds: []
    }];

    tableStudios = [{
        ths: [
            { text: 'Name', class: 'text-left' },
            { text: 'Win Count', class: 'text-right' }
        ],
        tds: []
    }];
    limitTableStudios = 3;

    tablesProducers = [{
        caption: 'Maximun',
        ths: [
            { text: 'Producer', class: 'text-left' },
            { text: 'Interval', class: 'text-right' },
            { text: 'Previous Year', class: 'text-right' },
            { text: 'Following Year', class: 'text-right' }
        ],
        tds: []
    }, {
        caption: 'Minimun',
        ths: [
            { text: 'Producer', class: 'text-left' },
            { text: 'Interval', class: 'text-right' },
            { text: 'Previous Year', class: 'text-right' },
            { text: 'Following Year', class: 'text-right' }
        ],
        tds: []
    }];

    constructor(
        private appService: AppService
    ) { }

    ngOnInit() {
        this.getYearsOfMoreWinners();
        this.getStudios();
        this.getProducersAwardsInterval();
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
                { text: year.year, class: 'text-left' },
                { text: year.winnerCount, class: 'text-right' }
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
                    { text: studio.name, class: 'text-left' },
                    { text: studio.winCount, class: 'text-right' }
                ];
            }
        });
    }

    getProducersAwardsInterval() {
        this.appService.getProducersAwardsInterval()
            .subscribe(result => {
                console.log(result);
                this.mountProducersAwardsIntervalData(result);
            });
    }

    mountProducersAwardsIntervalData(interval: IntervalData) {
        this.tablesProducers[0].tds = interval.max.map((max, i) => {
            return [
                { text: max.producer, class: 'text-left' },
                { text: max.interval, class: 'text-right' },
                { text: max.previousWin, class: 'text-right' },
                { text: max.followingWin, class: 'text-right' }
            ];
        });

        this.tablesProducers[1].tds = interval.min.map((min, i) => {
            return [
                { text: min.producer, class: 'text-left' },
                { text: min.interval, class: 'text-right' },
                { text: min.previousWin, class: 'text-right' },
                { text: min.followingWin, class: 'text-right' }
            ];
        });
    }
}
