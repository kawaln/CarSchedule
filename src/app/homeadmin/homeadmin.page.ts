import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {

  constructor(public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

  
  logoutUser():Promise<void> {
    this.router.navigate(['login']);
    return this.afAuth.auth.signOut();
  
  }

}
