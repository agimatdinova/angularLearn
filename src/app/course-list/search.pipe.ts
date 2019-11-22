import { Pipe, PipeTransform } from "@angular/core";
import { CourseListItem } from './course-list-item.model';

@Pipe({
    name: 'searchByTitle'
})
export class SearchPipe implements PipeTransform {
    transform(allCourses: CourseListItem[], input: string): CourseListItem[] {
        if (!allCourses || !input) {
            return allCourses
        }
        return allCourses.filter((task) => task.title.toUpperCase().includes(input.toUpperCase()));
    }
}