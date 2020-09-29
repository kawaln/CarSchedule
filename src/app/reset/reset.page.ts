import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  
  email: string = ""
  
  constructor(public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

  async recover() {

    const { email } = this

    try{

     const res = await this.afAuth.auth.fetchSignInMethodsForEmail(email)

      if (res.length){
       this.afAuth.auth.sendPasswordResetEmail(email)
       alert('You will recieve a link to reset your password at ' + this.email + '.' +
           'If you are unable to find the link, please check your spam and junk folder')
           this.router.navigate(['/login']);
    }
      else if (!res.length) {
      alert('This email does not exist')
      }
    }
    catch{
      alert('Email is invalid')
      this.email = ""
    }
    

  }

}
