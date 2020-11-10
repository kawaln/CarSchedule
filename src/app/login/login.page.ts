import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import * as admin from 'firebase-admin'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""
  verfifyemail = true;
  admin: Observable<Admin[]>;
  adminCollection: AngularFirestoreCollection<Admin>;
  dataAdmin: Admin[];

  constructor(public afAuth: AngularFireAuth,private router: Router,public afs: AngularFirestore,public alertController: AlertController) { }

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

      
    this.adminCollection = this.afs.collection('admin', ref => ref.where('email', '==', this.afAuth.auth.currentUser.email))


    this.admin  = this.adminCollection.snapshotChanges().pipe(map(changes => {  
      return changes.map(a => {
        const data = a.payload.doc.data() as Admin;
        data.id = a.payload.doc.id;
        return data;
      });
    }))

    this.admin.subscribe(items => {    //Converts the obervable
      this.dataAdmin = items;
      console.log(this.dataAdmin) 
    
    
    if(this.dataAdmin.length > 0)
    {
        this.router.navigate(['homeadmin']);
        this.email = ""
        this.password = "";
    }
    else
    {
      this.router.navigate(['home']);
      this.email = ""
      this.password = "";
    }
    }); 

    } catch(err){
       console.dir(err);
       const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        message: 'You have entered your email or password incorrectly. Please try again',
        buttons: ['OK'] });

        await alert.present(); 

       this.password = "";
    }
  }
}

