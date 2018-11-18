import { PaginatorService } from './../../services/paginator.service';
import { Component, Input, OnInit } from '@angular/core';

import { MovieData } from '../../models/movie-data';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

    @Input() movieData: MovieData;

    constructor(
        private paginatorService: PaginatorService
    ) { }

    ngOnInit() {
    }

    getFirstPage() {
        if (!this.movieData.first) {
            this.paginatorService.pageNumberEvent.emit(0);
        }
    }

    getPreviousPage() {
        if (!this.movieData.first) {
            this.paginatorService.pageNumberEvent.emit(this.movieData.number - 1);
        }
    }

    getPageNumber(page) {
        this.paginatorService.pageNumberEvent.emit(page - 1);
    }

    getNextPage() {
        if (!this.movieData.last) {
            this.paginatorService.pageNumberEvent.emit(this.movieData.number + 1);
        }
    }

    getLastPage() {
        if (!this.movieData.last) {
            this.paginatorService.pageNumberEvent.emit(this.movieData.totalPages - 1);
        }
    }
}
