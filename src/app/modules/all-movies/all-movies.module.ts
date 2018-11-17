import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [AllMoviesComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class AllMoviesModule { }
