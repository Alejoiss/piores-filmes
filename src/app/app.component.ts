import { Component, OnInit } from '@angular/core';

import { AppService } from './modules/shared/services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    /* ONLY FOR TESTS */
    constructor(
        private appService: AppService
    ) { }

    ngOnInit(): void {
        // this.appService.getMovieData()
        //     .subscribe(result => {
        //         console.log(result);
        //     });

        // this.appService.getMovieByYear()
        //     .subscribe(result => {
        //         console.log(result);
        //     });
    }
}
