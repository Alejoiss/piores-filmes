import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';



describe('appService', () => {
    let service: AppService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });

        // inject the service
        service = TestBed.get(AppService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be a content of 10 movies and first page', () => {
        service.getMovieData({
            page: 0,
            size: 10
        }).subscribe(data => {
            expect(data.content.length).toEqual(10);
            expect(data.first).toEqual(true);
        });
    });

    it('should be a length of 3 years with multiple winners', () => {
        service.getYearsOfMoreWinners()
            .subscribe(data => {
                expect(data.years.length).toEqual(3);
            });
    });

    it('should be "Columbia Pictures" like a best studio', () => {
        service.getStudios()
            .subscribe(data => {
                expect(data.studios[0].name.trim()).toBe('Columbia Pictures');
            });
    });

    it('should be 13 as the longest interval between winner', () => {
        service.getProducersAwardsInterval()
            .subscribe(data => {
                expect(data.max[0].interval).toBe(13);
            });
    });

    it('should be 1990 and 1991 as the years of minimum interval between winners', () => {
        service.getProducersAwardsInterval()
            .subscribe(data => {
                expect(data.min[0].previousWin).toEqual(1990);
                expect(data.min[0].followingWin).toEqual(1991);
            });
    });

    it('should be "Name of movie" like the worst movie of 2000', () => {
        service.getMovieByYear(2000)
            .subscribe(data => {
                expect(data[0].title).toBe('Name of movie');
            });
    });
});
