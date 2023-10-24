import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string='';
  constructor(private authService:AuthService,private router:Router){}
  onSubmit(loginForm:NgForm){
    // console.log(loginForm);
    // console.log(loginForm.value);
    if(this.authService.inValidUser(loginForm.value)){
      this.router.navigate([''],{replaceUrl: true});
    }else{
      this.error='Invalid credentials';
    }  
  }  
}
