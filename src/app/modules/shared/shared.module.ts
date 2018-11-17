import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { TableComponent } from './components/table/table.component';
import { AppService } from './services/app.service';

@NgModule({
    declarations: [TableWrapperComponent, TableComponent, NavbarComponent],
    imports: [
        CommonModule
    ],
    exports: [
        TableWrapperComponent,
        TableComponent,
        NavbarComponent
    ],
    providers: [
        AppService
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
