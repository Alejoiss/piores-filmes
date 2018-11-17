import { Sort } from './sort';
import { Page } from './page';
import { Movie } from './movie';

export class MovieData {
    content: Movie[];
    pageable: Page;
    totalElements: number;
    last: boolean;
    totalPages: number;
    first: boolean;
    sort: Sort;
    number: number;
    numberOfElements: number;
    size: number;
}
