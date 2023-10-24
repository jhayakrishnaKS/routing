import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Users } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService, private router: Router) {}

  inValidUser(user: Users): boolean {
    let users: Users[] = this.storageService.getAllUsers();
    let isUser: boolean = false;
    for (let u of users) {
      if (u.email === user.email && u.password === user.password) {
        isUser = true;
        this.storageService.setLoggedInUser(u);
        break;
      }
    }
    return isUser;
  }

  newUser(RegisForm: Users): void {
    let users: Users[] = this.storageService.getAllUsers();
    let signUp: Users = {
      id: users.length + 1,
      email: RegisForm.email,
      password: RegisForm.password,
    };

    users.push(signUp);
    this.storageService.setUsers(users);
  }

  isLoggedIn(): boolean {
    return this.storageService.isUserLoggedIn();
  }

  logOut(): void {
    this.storageService.removeLoggedInUser();
  }

  getLoggedInUser(): Users |null {
    return this.storageService.getLoggedInUser();
  }
}
