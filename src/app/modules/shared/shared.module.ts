import { PaginatorService } from './services/paginator.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { TableComponent } from './components/table/table.component';
import { AppService } from './services/app.service';
import { ArrayOfIntervalPipe } from './pipes/array-of-interval.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
    declarations: [
        TableWrapperComponent,
        TableComponent,
        NavbarComponent,
        ArrayOfIntervalPipe,
        PaginatorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        TableWrapperComponent,
        TableComponent,
        NavbarComponent,
        ArrayOfIntervalPipe,
        PaginatorComponent
    ],
    providers: [
        AppService,
        PaginatorService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
