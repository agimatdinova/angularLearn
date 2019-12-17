import { CoursesService } from './../courses.service';
import { CourseListItem } from './../course-list-item.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.courseItem = this.coursesService.getItemById(parseInt(data['id']));
    });
  }

  save(){
    this.coursesService.updateItem(this.courseItem.id, this.courseItem);
    this.router.navigateByUrl('/courses');
  }

  cancel(){
    this.router.navigateByUrl('/courses');
  }
}
