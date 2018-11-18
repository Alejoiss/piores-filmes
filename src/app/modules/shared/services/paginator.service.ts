import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PaginatorService {

    pageNumberEvent: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }
}
