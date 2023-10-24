import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const Authservice:AuthService=inject(AuthService);
  const router:Router=inject(Router);
  if(Authservice.isLoggedIn()){
    return true;
  }
  router.navigate(['/login']);
  return false;
};

