import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllMoviesComponent } from './modules/all-movies/all-movies/all-movies.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'all-movies', component: AllMoviesComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
