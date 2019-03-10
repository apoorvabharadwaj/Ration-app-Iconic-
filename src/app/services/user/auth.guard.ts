import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}	
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
	firebase.auth().onAuthStateChanged((user: firebase.User) => {
	if (user) {
		resolve(true);
	} else {
		console.log('User is not logged in');
		this.router.navigate(['/login']);
		resolve(false);
	}
	});
	});
  }
}
