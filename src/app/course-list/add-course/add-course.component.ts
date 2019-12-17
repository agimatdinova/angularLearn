import { CoursesService } from './../courses.service';
import { Component, OnInit, Input } from '@angular/core';
import { AddCourse } from './add-course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public newCourse: AddCourse = {
    title: '',
    description: '',
    creationDate: new Date(),
    duration: 0,
    authors: ''
  };
  constructor(private router: Router,
    private coursesService: CoursesService) { }

  ngOnInit() {
  }

  save() {
    this.coursesService.createCourse(this.newCourse.title, this.newCourse.creationDate, this.newCourse.duration, this.newCourse.description, this.newCourse.authors, false);
    this.router.navigateByUrl('/courses');
  }

  cancel(){
    this.router.navigateByUrl('/courses');
  }
}
