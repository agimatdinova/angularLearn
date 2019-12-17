import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private router: Router) { }
  
  login(){
    console.log("Loggen in :)");
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigateByUrl('/courses');

  }

  logout(){
    console.log("Logget out :)")
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  getUserInfo(){
    
  }
}
