import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Item } from '../models/items';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  itemsCollection: AngularFirestoreCollection<Item>;

  items: Observable<Item[]>

  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore,public afAuth: AngularFireAuth) {

    
    

    this.itemsCollection = this.afs.collection('appointment');
  
    this.items  = this.itemsCollection.snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      }))
      
  }


  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.itemsCollection.add(item);
  }

}
