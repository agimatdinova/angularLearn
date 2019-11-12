import { BorderColorDirective } from './border.color.directive';
import { SearchSectionModule } from './../search-section/search-section.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';



@NgModule({
  declarations: [
    CourseListComponent, 
    CourseListItemComponent,
    BorderColorDirective
  ],
  imports: [
    CommonModule,
    SearchSectionModule
  ],
  exports: [CourseListComponent]
})
export class CourseListModule { }
