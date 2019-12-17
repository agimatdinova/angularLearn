import { RouterModule, Router } from '@angular/router';
import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseListItem[];
  public searchInput='';
  public searchInputPlaceholder='Text to search';

  constructor(private coursesService: CoursesService, 
    private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  loadMore(){
    console.log('Loading more courses');
  }
  
  getCourses(): void {
    this.courseItems = this.coursesService.getCourses();
  }

  search() {
    this.courseItems = new SearchPipe().transform(this.coursesService.getCourses(), this.searchInput);
    this.searchInput = '';
  }

  addCourse() {
    this.router.navigateByUrl('/courses/new');
  }
}
