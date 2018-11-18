import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayOfInterval'
})
export class ArrayOfIntervalPipe implements PipeTransform {

    transform(initial: number, final: number): number[] {
        const interval = [];

        for (let i = initial; i <= final; i++) {
            interval.push(i);
        }

        return interval;
    }
}
