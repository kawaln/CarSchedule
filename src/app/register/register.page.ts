import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = ""
  password: string = ""
  confirmpassword: string = ""


  ngOnInit() {
  }

  constructor(public afAuth: AngularFireAuth,private router: Router) { }


  async signup() {

    if(this.email == "")
    {
      alert("Please input a  email");
    }
    
    if(this.password == "")
    {
      alert("Please input a  password");
    }

    if(this.password != this.confirmpassword)
    {
      alert("Passwords do not match please try again")
      this.password = ""
      this.confirmpassword = ""
    }
    else{
 

  try{
   const user = await this.afAuth.auth.createUserWithEmailAndPassword(
     this.email,this.password)
   


    this.afAuth.auth.currentUser.sendEmailVerification();
    alert("An email has been sent to verify your email address.")
    this.router.navigate(['login']);

    } catch(err){
      alert(err);
    }
  }
  }
}
