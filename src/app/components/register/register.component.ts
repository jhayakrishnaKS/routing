import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private register: AuthService,private router:Router) {}

  onSubmitForm(RegisForm: NgForm) {
    this.register.newUser(RegisForm.value);
    this.router.navigate(['/login']);
    console.log(RegisForm);
  }
}
