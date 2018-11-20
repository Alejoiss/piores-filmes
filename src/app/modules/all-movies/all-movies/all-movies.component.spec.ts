import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../../shared/services/app.service';
import { PaginatorService } from '../../shared/services/paginator.service';
import { SharedModule } from '../../shared/shared.module';
import { AllMoviesComponent } from './all-movies.component';


describe('AllMoviesComponent', () => {
    let component: AllMoviesComponent;
    let fixture: ComponentFixture<AllMoviesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AllMoviesComponent],
            imports: [SharedModule, HttpClientModule],
            providers: [
                AppService,
                PaginatorService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AllMoviesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
