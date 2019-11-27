import { ConfirmationDialogComponent } from './../../confirmation-dialog/confirmation-dialog.component';
import { CoursesService } from './../courses.service';
import { Component, OnInit, Input } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  constructor(private coursesService: CoursesService, 
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  editCourse(id: number) {
    this.coursesService.updateItem(id, "Another course", new Date(), 123, "Another description", false);
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
