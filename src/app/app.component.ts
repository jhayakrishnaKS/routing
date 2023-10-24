import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
  constructor(private stroageServices: StorageService) {}

  ngOnInit(): void {
    this.stroageServices.loadUsers();
  }

  isLoggedIn(): boolean {
    return this.stroageServices.isLoggedInUser();
  }
}