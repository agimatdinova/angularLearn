import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { SearchPipe } from '../search.pipe';

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
      creationDate: new Date('2019-11-10'),
      duration: 125,
      description: 'Course 1 description',
      topRated: true
    },
    {
      id: 1,
      title: 'Video Course 2',
      creationDate: new Date('2019-11-16'),
      duration: 15,
      description: 'Course 2 description',
      topRated: false
    },
    {
      id: 1,
      title: 'Video Course 3',
      creationDate: new Date('2019-11-19'),
      duration: 90,
      description: 'Course 3 description',
      topRated: false
    }
  ];
  public searchInput='Text to search';

  constructor() { }

  ngOnInit() {
  }

  loadMore(){
    console.log('Loading more courses');
  }
  
  search(){
    this.courseItems = new SearchPipe().transform(this.courseItems, this.searchInput);
  }
}
