import { Component, OnInit } from '@angular/core';

import { AppService } from '../../shared/services/app.service';
import { Year } from '../../shared/models/year';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    tableYears = {
        ths: [
            { text: 'Year', class: 'text-left' },
            { text: 'Win Count', class: 'text-right' }
        ],
        tds: []
    };

    constructor(
        private appService: AppService
    ) { }

    ngOnInit() {
        this.appService.getYearsOfMoreWinners()
            .subscribe(result => {
                console.log(result);
                this.mountYearData(result.years);
            });
    }

    mountYearData(years: Year[]) {
        this.tableYears.tds = years.map(year => {
            return [
                { text: year.year, class: 'text-left' },
                { text: year.winnerCount, class: 'text-right' }
            ];
        });
    }
}
