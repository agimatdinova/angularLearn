import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'durationFormat'
})
export class DurationPipe implements PipeTransform {
    transform(duration: number): string {
        if (!duration) {
            return ''
        }
        if (duration < 60) {
            return duration + ' min'
        } else {
            return Math.floor(duration / 60) + ' h ' + duration % 60 + ' min';
        }
    }
}