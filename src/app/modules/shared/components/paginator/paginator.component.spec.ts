import { PaginatorService } from './../../services/paginator.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayOfIntervalPipe } from './../../pipes/array-of-interval.pipe';
import { PaginatorComponent } from './paginator.component';
import { MovieData } from '../../models/movie-data';
import { Page } from '../../models/page';


describe('PaginatorComponent', () => {
    let component: PaginatorComponent;
    let fixture: ComponentFixture<PaginatorComponent>;
    let service: PaginatorService;
    const movieData: MovieData = new MovieData();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PaginatorComponent,
                ArrayOfIntervalPipe
            ]
        })
            .compileComponents();

        movieData.content = [];
        movieData.number = 1;
        movieData.totalPages = 10;
        movieData.last = false;

        service = TestBed.get(PaginatorService);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('next page should be equal 2', () => {
        component.movieData = movieData;
        fixture.detectChanges();
        const page = component.getNextPage();
        expect(page).toEqual(2);

        service.pageNumberEvent
            .subscribe(number => {
                expect(number).toEqual(2);
            });
    });

    it('last page should be equal 9', () => {
        component.movieData = movieData;
        fixture.detectChanges();
        const page = component.getLastPage();
        expect(page).toEqual(9);
    });
});
