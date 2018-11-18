import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { TableComponent } from './components/table/table.component';
import { AppService } from './services/app.service';
import { ArrayOfIntervalPipe } from './pipes/array-of-interval.pipe';

@NgModule({
    declarations: [TableWrapperComponent, TableComponent, NavbarComponent, ArrayOfIntervalPipe],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        TableWrapperComponent,
        TableComponent,
        NavbarComponent,
        ArrayOfIntervalPipe
    ],
    providers: [
        AppService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
