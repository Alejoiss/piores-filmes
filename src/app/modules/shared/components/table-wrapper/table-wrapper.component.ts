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

    initialYear = 1980;
    finalYear = new Date().getFullYear();
    selectedYear: number;

    constructor(
        private appService: AppService
    ) { }

    ngOnInit() {
        this.selectedYear = this.finalYear;
    }

    setYear() {
        this.appService.yearEmitter.emit(this.selectedYear);
    }
}
