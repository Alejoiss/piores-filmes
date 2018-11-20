import { PaginatorService } from './../../services/paginator.service';
import { Component, Input, OnInit } from '@angular/core';

import { MovieData } from '../../models/movie-data';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

    @Input() movieData: MovieData;

    constructor(
        private paginatorService: PaginatorService
    ) { }

    getFirstPage() {
        if (!this.movieData.first) {
            this.paginatorService.pageNumberEvent.emit(0);
            return 0;
        }
    }

    getPreviousPage() {
        if (!this.movieData.first) {
            const page = this.movieData.number - 1;
            this.paginatorService.pageNumberEvent.emit(page);
            return page;
        }
    }

    getPageNumber(page) {
        this.paginatorService.pageNumberEvent.emit(page - 1);
        return page - 1;
    }

    getNextPage() {
        if (!this.movieData.last) {
            const page = this.movieData.number + 1;
            this.paginatorService.pageNumberEvent.emit(page);
            return page;
        }
    }

    getLastPage() {
        if (!this.movieData.last) {
            const page = this.movieData.totalPages - 1;
            this.paginatorService.pageNumberEvent.emit(page);
            return page;
        }
    }
}
