import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storage;
  constructor() { }
  
  login(){
    console.log("Loggen in :)");
  }

  logout(){
    console.log("Logget out :)")
  }

  isAuthenticated(){
    return true;
  }

  getUserInfo(){
    
  }
}
