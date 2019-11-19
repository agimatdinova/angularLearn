import { CourseListItem } from './course-list-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  public courseItems: CourseListItem[] = [
    {
      id: 1,
      title: 'Video Course 1',
      creationDate: new Date('2019-11-10'),
      duration: 125,
      description: 'Course 1 description',
      topRated: true
    },
    {
      id: 2,
      title: 'Video Course 2',
      creationDate: new Date('2019-11-16'),
      duration: 15,
      description: 'Course 2 description',
      topRated: false
    },
    {
      id: 3,
      title: 'Video Course 3',
      creationDate: new Date('2019-11-19'),
      duration: 90,
      description: 'Course 3 description',
      topRated: false
    }
  ];

  getCourses(): CourseListItem[] {
    return this.courseItems;
  }

  createCourse(id: number, title: string, creationDate: Date, duration: number, 
    description: string, topRated: boolean) {
      this.courseItems.push({ 
        id: id,
        title: title,
        creationDate: creationDate,
        duration: duration,
        description: description,
        topRated: topRated
      });

  }

  getItemById(id: number) {
    return this.courseItems.find(item => item.id === id);
  }

  updateItem(id: number, title: string, creationDate: Date, duration: number, 
    description: string, topRated: boolean) {
    let index = this.courseItems.indexOf(this.getItemById(id));
    this.courseItems[index] = { 
      id: id,
      title: title,
      creationDate: creationDate,
      duration: duration,
      description: description,
      topRated: topRated
    };
  }

  removeItem(id: number) {
    let index = this.courseItems.indexOf(this.getItemById(id));
    this.courseItems.splice(index, 1);
  }
}
