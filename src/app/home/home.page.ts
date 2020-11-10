import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import * as admin from 'firebase-admin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public afAuth: AngularFireAuth,private router: Router) {}


  logoutUser():Promise<void> {
  this.router.navigate(['login']);
  return this.afAuth.auth.signOut();

}



}
