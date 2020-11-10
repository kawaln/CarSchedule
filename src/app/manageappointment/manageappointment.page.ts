import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppointmentService } from '../services/appointment.service';
import { Item } from '../models/items';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manageappointment',
  templateUrl: './manageappointment.page.html',
  styleUrls: ['./manageappointment.page.scss'],
})
export class ManageappointmentPage implements OnInit {

  selectedDay: string = '';
  items: Observable<Item[]>;
  itemsCollection: AngularFirestoreCollection<Item>;
  dataItem: Item[];
  itemDoc: AngularFirestoreDocument<Item>





  constructor(private router: Router,public afs: AngularFirestore,
    public afAuth: AngularFireAuth,private appointmentService: AppointmentService,public alertController: AlertController) { }

  ngOnInit() {
  }


  selectChangeHandler (event: any) {  

    this.selectedDay = event.target.value;  //Date from calender calender

    this.itemsCollection =this.afs.collection('appointment', ref => ref.where('date', '==', this.selectedDay)) //Query

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

 async deleteAppointment(event,item){

    this.itemDoc = this.afs.doc(`appointment/${item.id}`)
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Delete Appointment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (no) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
           this.itemDoc.delete();
          }
        }
      ]
    });

    await alert.present(); 
  }



 HomePage(){
    this.router.navigate(['homeadmin']);
  }

}
