import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table-wrapper',
    templateUrl: './table-wrapper.component.html',
    styleUrls: ['./table-wrapper.component.scss']
})
export class TableWrapperComponent implements OnInit {

    @Input() title: string;
    @Input() columnClass: string;
    @Input() tableData: any;

    constructor() { }

    ngOnInit() {
    }

}
