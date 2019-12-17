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
      authors: '',
      topRated: true
    },
    {
      id: 2,
      title: 'Video Course 2',
      creationDate: new Date('2019-11-16'),
      duration: 15,
      description: 'Course 2 description',
      authors: '',
      topRated: false
    },
    {
      id: 3,
      title: 'Video Course 3',
      creationDate: new Date('2019-11-19'),
      duration: 90,
      description: 'Course 3 description',
      authors: '',
      topRated: false
    }
  ];

  getCourses(): CourseListItem[] {
    return this.courseItems;
  }

  createCourse(title: string, creationDate: Date, duration: number, 
    description: string, authors:string, topRated: boolean) {
      this.courseItems.push({ 
        id: Math.floor((Math.random()*6)+1),
        title: title,
        creationDate: creationDate,
        duration: duration,
        description: description,
        authors: authors,
        topRated: topRated
      });
  }

  getItemById(id: number) {
    return this.courseItems.find(item => item.id === id);
  }

  updateItem(id: number, updatedItem: CourseListItem) {
    let index = this.courseItems.indexOf(this.getItemById(id));
    this.courseItems[index] = updatedItem;
  }

  removeItem(id: number) {
    let index = this.courseItems.indexOf(this.getItemById(id));
    this.courseItems.splice(index, 1);
  }
}
