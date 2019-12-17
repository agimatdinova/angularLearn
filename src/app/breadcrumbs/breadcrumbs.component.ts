import { CoursesService } from './../course-list/courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public courseTitle: string;
  constructor(private coursesService: CoursesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log(data);
      if((data['id']) !== undefined && (data['id']) !== 'undefined') {
        this.courseTitle = '/' + this.coursesService.getItemById(parseInt(data['id'])).title;
        console.log(this.courseTitle);
      }
    });
  }

}
