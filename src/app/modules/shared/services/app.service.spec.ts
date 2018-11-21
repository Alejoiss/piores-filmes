import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { AppService } from './app.service';



describe('appService', () => {
    let service: AppService;
    const domain = 'https://tools.texoit.com/backend-java/api/movies';
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule]
        });

        // inject the service
        service = TestBed.get(AppService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be "Battlefield Earth" like the worst movie of 2000', () => {
        service.getMovieByYear(2000).subscribe((data: any) => {
            expect(data[0].title).toBe('Battlefield Earth');
        });

        const req = httpMock.expectOne(`${domain}?winner=true&year=2000`, 'call to api');
        expect(req.request.method).toBe('GET');

        req.flush([{
            title: 'Battlefield Earth'
        }]);

        httpMock.verify();
    });
});
