import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ArrayOfIntervalPipe } from '../../pipes/array-of-interval.pipe';
import { AppService } from '../../services/app.service';
import { TableComponent } from '../table/table.component';
import { TableWrapperComponent } from './table-wrapper.component';


describe('TableWrapperComponent', () => {
    let component: TableWrapperComponent;
    let fixture: ComponentFixture<TableWrapperComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableWrapperComponent,
                TableComponent,
                ArrayOfIntervalPipe
            ],
            imports: [
                FormsModule,
                HttpClientModule
            ],
            providers: [
                AppService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
