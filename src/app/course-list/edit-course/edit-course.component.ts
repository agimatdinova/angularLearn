import { CourseListItem } from './../course-list-item.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel(){
    this.router.navigateByUrl('/courses');
  }
}
