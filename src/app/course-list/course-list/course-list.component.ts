import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseListItem[] = [
    {
      id: 1,
      title: 'Video Course 1',
      creationDate: new Date('2019-10-16T00:00:00'),
      duration: '1 h 26 min',
      description: 'Course 1 description',
    },
    {
      id: 1,
      title: 'Video Course 2',
      creationDate: new Date('2019-10-16T00:00:00'),
      duration: '1 h 26 min',
      description: 'Course 2 description',
    },
    {
      id: 1,
      title: 'Video Course 3',
      creationDate: new Date('2019-10-16T00:00:00'),
      duration: '1 h 26 min',
      description: 'Course 3 description',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}