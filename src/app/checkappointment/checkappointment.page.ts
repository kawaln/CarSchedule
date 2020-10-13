import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Item } from '../models/items';
import { DatePipe } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-checkappointment',
  templateUrl: './checkappointment.page.html',
  styleUrls: ['./checkappointment.page.scss'],
})
export class CheckappointmentPage implements OnInit {

  dataItem: Item[]
  UserEmail: string;

  items: Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private router: Router,public afs: AngularFirestore,public afAuth: AngularFireAuth,private appointmentService: AppointmentService) { 


  }

  HomePage(){
    this.router.navigate(['home']);
  }

  Check(){
    this.UserEmail = this.afAuth.auth.currentUser.email;
    console.log(this.UserEmail);

    
    this.itemsCollection =this.afs.collection('appointment', ref => ref.where('email', '==', this.afAuth.auth.currentUser.email)) //Query

    this.items  = this.itemsCollection.snapshotChanges().pipe(map(changes => {  
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }))
  
    this.items.subscribe(items => {    //Converts the obervable
       this.dataItem = items;
       console.log(this.dataItem)
    });


  }
  

  ngOnInit() {



  }
}
  