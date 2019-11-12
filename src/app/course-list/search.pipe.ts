import { Pipe, PipeTransform } from "@angular/core";
import { CourseListItem } from './course-list-item.model';

@Pipe({
    name: 'searchByTitle'
})
export class SearchPipe implements PipeTransform {
    transform(allCourses: CourseListItem[], title: string): CourseListItem[] {
        if (!allCourses || !title) {
            return allCourses
        }
        return allCourses.filter((task) => task.title.toUpperCase() === title.toUpperCase());
    }
}