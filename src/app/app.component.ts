import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLearn';

  constructor(private authService: AuthService){

  }

  isAuthorized(){
    return this.authService.isAuthenticated();
  }
}
