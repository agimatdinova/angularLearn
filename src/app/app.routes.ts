import { CourseListComponent } from './course-list/course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { Route } from "@angular/router";

export const ROUTES: Route[] = [
    { path: '', redirectTo: 'courses-page', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'courses-page', component: CourseListComponent},
];