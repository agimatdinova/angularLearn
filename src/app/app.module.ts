import { LoginModule } from './core/login/login.module';
import { ROUTES } from './app.routes';
import { HomeModule } from './home/home.module';
import { CourseListModule } from './course-list/course-list.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SearchPipe } from './course-list/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    ConfirmationDialogComponent,
    SearchPipe
  ],
  imports: [
    CoreModule,
    CourseListModule,
    LoginModule,
    HomeModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
