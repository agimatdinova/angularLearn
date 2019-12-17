import { EditCourseComponent } from './course-list/edit-course/edit-course.component';
import { NoContentComponent } from './no-content/no-content.component';
import { AddCourseComponent } from './course-list/add-course/add-course.component';
import { LoginComponent } from './core/login/login.component';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { Route } from "@angular/router";

export const ROUTES: Route[] = [
    { path: '', redirectTo: 'courses', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'courses', component: CourseListComponent},
    { path: 'login', component: LoginComponent},
    { path: 'courses/new', component: AddCourseComponent},
    { path: 'courses/:id', component: EditCourseComponent},
    { path: '**', component: NoContentComponent}
];