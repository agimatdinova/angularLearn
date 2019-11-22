import { CoursesService } from './../courses.service';
import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.coursesService.removeItem(id);
  }

  editCourse(id: number) {
    this.coursesService.updateItem(id, "Another course", new Date(), 123, "Another description", false);
  }
}
