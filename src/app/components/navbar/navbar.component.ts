import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    private stroageservices: StorageService,
    private router: Router,
    private cartservices: CartService
  ) {}

  loggedout() {
    this.stroageservices.removeLoggedInUser();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  getcount(): number {
    
    let count = this.cartservices.getcount();

    return count;
  }
}
