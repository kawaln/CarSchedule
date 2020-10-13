import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Item } from '../models/items';
import { DatePipe } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})

export class AppointmentPage implements OnInit {

  
  item: Item = {     //Create Item Object
    drop: '',
    service: '',
    comment: '',
    date: '',
    time: '',
    carmake: '',
    carmodel: '',
    caryear: '',
    phonenumber: null,
    email: ''

  }

  timeArray = [
    {time : "08:00 AM - 10:00 AM"},
    {time : "10:00 AM - 12:00 PM"},
    {time : "12:00 PM - 02:00 PM"},
    {time : "02:00 PM - 04:00 PM"},
    {time : "04:00 PM - 06:00 PM"}
];
   yearArray = [
  {caryear : "1995"},
  {caryear : "1996"},
  {caryear : "1997"},
  {caryear : "1998"},
  {caryear : "1999"},
  {caryear : "2000"},
  {caryear : "2001"},
  {caryear : "2002"},
  {caryear : "2003"},
  {caryear : "2004"},
  {caryear : "2005"},
  {caryear : "2006"},
  {caryear : "2007"},
  {caryear : "2008"},
  {caryear : "2009"},
  {caryear : "2010"},
  {caryear : "2011"},
  {caryear : "2012"},
  {caryear : "2013"},
  {caryear : "2014"},
  {caryear : "2015"},
  {caryear : "2016"},
  {caryear : "2017"},
  {caryear : "2018"},
  {caryear : "2019"},
  {caryear : "2020"},
  {caryear : "2021"}
];

carArray = [
  {carmake : "Honda", id: 1},
  {carmake : "Toyota", id: 2},
  {carmake : "Chevrolet", id: 3},
  {carmake : "Ford", id: 4},
  {carmake : "Audi", id: 5},
  {carmake : "Nissan", id: 6}
];

modelArray = [

  {carmodel : "Civic", id: 1},
  {carmodel : "Corolla", id: 2},
  {carmodel : "CR-V", id: 1},
  {carmodel : "Accord", id: 1},
  {carmodel : "Camry", id:2},
  {carmodel : "Prius", id:2},
  {carmodel : "Odyssey", id: 1},
  {carmodel : "RAV4", id:2},
  {carmodel : "Malibu", id:3},
  {carmodel : "Sonic", id:3},
  {carmodel : "Equinox", id:3},
  {carmodel : "Silverado", id:3},
  {carmodel : "Explorer", id:4},
  {carmodel : "Fusion", id:4},
  {carmodel : "Focus", id:4},
  {carmodel : "Escape", id:4},
  {carmodel : "A4", id:5},
  {carmodel : "A6", id:5},
  {carmodel : "TT", id:5},
  {carmodel : "R8", id:5},
  {carmodel : "Sentra", id:6},
  {carmodel : "Rogue", id:6},
  {carmodel : "Altima", id:6},
  {carmodel : "Pathfinder", id:6},
];

categories = [ 
  {name :"Brakes", id: 1},
  {name :"Tires", id: 2},
  {name :"Vehicle Inspection", id: 3},
  {name :"Check Engine Light", id: 4},
  {name :"Air Conditioning", id: 5},
  {name :"Batteries, Starting & Charging", id: 6},
  {name :"Belts & Hoses", id: 7},
  {name :"Exhaust", id: 8},
  {name :"Fuel Systems", id: 9},
  {name :"Heating & Cooling", id: 10},
  {name :"Routine Maintenance", id: 11},
  {name :"Steering, Suspension, & Alignment", id: 12},
  {name :"Transmission", id: 13}
];





selectedCarid: number;
selectedCar: string = '';
selectedDay: string = '';
carFormArray: Array<any> = [];
items: Observable<Item[]>;
itemsCollection: AngularFirestoreCollection<Item>;

dataItem: Item[];

UserEmail: string = '';

  constructor(private appointmentService: AppointmentService,
     public afs: AngularFirestore, public alertController: AlertController,public afAuth: AngularFireAuth,private router: Router ) { }

  ngOnInit() {
  }


  selectChangeCar (event: any) {

    this.selectedCar = event.target.value;

    console.log(this.selectedCar)


        if(this.selectedCar === 'Honda'){ 
       this.selectedCarid = 1;}
    
       if(this.selectedCar === 'Toyota'){
          this.selectedCarid = 2; }
         
       if(this.selectedCar === 'Chevrolet'){
         this.selectedCarid = 3; }
      
        if(this.selectedCar === 'Ford')
       { this.selectedCarid = 4;}

       if(this.selectedCar === 'Audi')
       {  this.selectedCarid = 5;}

       if(this.selectedCar === 'Nissan')
       {  this.selectedCarid = 6;  }
 }

 selectChangeHandler (event: any) {   //Grabs Date from calender and updates time drop down  

  this.selectedDay = event.target.value;  //Date from user calender

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

     if(this.dataItem.length > 0)                                   //Filters current date with available times
     {
     this.timeArray = this.timeArray.filter((el) => {
      return this.dataItem.some((f) => {
        return f.time != el.time;
      });
    }); 

     }
     else{ 
       
      this.timeArray = [
        {time : "08:00 AM - 10:00 AM"},
        {time : "10:00 AM - 12:00 PM"},
        {time : "12:00 PM - 02:00 PM"},
        {time : "02:00 PM - 04:00 PM"},
        {time : "04:00 PM - 06:00 PM"}
    ];
     }
   });   
}

onChange(car:string, isChecked: boolean) {
  if(isChecked) {
    this.carFormArray.push(car);
  } else {
    let index = this.carFormArray.indexOf(car);
    this.carFormArray.splice(index,1);
  }
}



 async onSubmit(){

    var carformat = JSON.stringify(this.carFormArray);
    carformat = carformat.replace("[", "").replace("\"", "").replace("]", "");
    this.item.service = carformat;

    this.UserEmail = this.afAuth.auth.currentUser.email;

    this.item.email = this.UserEmail



    if(this.item.phonenumber != null && this.item.date != '' && this.item.time != '' && this.item.carmake != ''
    && this.item.carmodel != '' &&  this.item.caryear != '' && this.item.drop != ''){

      this.appointmentService.addItem(this.item);
      this.item.carmake= '';
      this.item.carmodel= '';
      this.item.caryear= '';
      this.item.phonenumber= null;
      this.item.comment='';
      this.item.drop = '';
      this.item.service = '';
      this.item.date = '';
      this.item.time = '';

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        message: 'Appointment Has Been Created',
        buttons: ['OK']
  
      });

      await alert.present();  

      this.router.navigate(['home']);


    }
    else
    {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        message: 'Required Fields Are Missing',
        buttons: ['OK']
  
      });

      await alert.present(); 

    }
  }

  HomePage(){
    this.router.navigate(['home']);
  }
}
