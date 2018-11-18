import { Component, Input, OnInit } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-table-wrapper',
    templateUrl: './table-wrapper.component.html',
    styleUrls: ['./table-wrapper.component.scss']
})
export class TableWrapperComponent implements OnInit {

    @Input() title: string;
    @Input() columnClass: string;
    @Input() tableData: any;
    @Input() filterYear: boolean;
    @Input() filterWinner: boolean;
    @Input() useDefaultYear: boolean;

    initialYear = 1980;
    finalYear = new Date().getFullYear();
    selectedYear: any;
    selectedWinner: string;

    constructor(
        private appService: AppService
    ) { }

    ngOnInit() {
        if (this.useDefaultYear) {
            this.selectedYear = this.finalYear;
        } else {
            this.selectedYear = 1;
        }
        this.selectedWinner = '1';
    }

    setYear() {
        if (parseInt(this.selectedYear, 10) === 1) {
            this.appService.yearEmitter.emit(null);
        } else {
            this.appService.yearEmitter.emit(this.selectedYear);
        }
    }

    setWinner() {
        let winner = null;
        if (this.selectedWinner === '2') {
            winner = true;
        } else if (this.selectedWinner === '3') {
            winner = false;
        }

        this.appService.winnerEmitter.emit(winner);
    }
}
