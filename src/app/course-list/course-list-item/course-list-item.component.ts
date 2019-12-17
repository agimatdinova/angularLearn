import { ConfirmationDialogComponent } from './../../confirmation-dialog/confirmation-dialog.component';
import { CoursesService } from './../courses.service';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  constructor(private coursesService: CoursesService, 
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
  }

  editCourse(id: number) {
    this.router.navigateByUrl('/courses/' + id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to delete this item?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.coursesService.removeItem(id);
      }
    });
  }
}
