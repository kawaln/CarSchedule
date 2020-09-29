import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""
  verfifyemail = true;

  constructor(public afAuth: AngularFireAuth,private router: Router) { }

  ngOnInit() {
  }

  async login() {
  

    const { email, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email,password)
     
      if(this.verfifyemail!=this.afAuth.auth.currentUser.emailVerified)
      {
        alert('Please click on the link in your email to finish your registraion');
        this.afAuth.auth.currentUser.sendEmailVerification();
      }
      else{
      this.router.navigate(['home']);
      this.email = ""
      this.password = "";
      }
    } catch(err){
       console.dir(err);
       alert('You have entered your email or password incorrectly. Please try again');
       this.password = "";
    }
  }

  nextpage() {
    this.router.navigate(['/register']);
  }

}
