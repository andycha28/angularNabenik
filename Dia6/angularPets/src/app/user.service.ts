import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn(): boolean{
      let actualUser: any = localStorage.getItem('user');
      if (typeof actualUser === 'string') {
       return true;
      } else {
      return false;
      }
}

initSession(user: string) {
  localStorage.setItem('user', user);
  return true;
}

clearSession(){
  localStorage.removeItem('user');
  return false;
}

}
