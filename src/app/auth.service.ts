import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor() { }
  
  login(){
    console.log("Loggen in :)");
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout(){
    console.log("Logget out :)")
    localStorage.setItem('isAuthenticated', 'false');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  getUserInfo(){
    
  }
}
