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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  save() {

  }

  cancel(){
    this.router.navigateByUrl('/courses');
  }
}
