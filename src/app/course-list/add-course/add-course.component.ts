import { Component, OnInit, Input } from '@angular/core';
import { AddCourse } from './add-course.model';

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
  constructor() { }

  ngOnInit() {
  }

  save() {

  }

  cancel() {

  }
}
