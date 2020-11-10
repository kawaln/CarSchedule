import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageappointmentPageRoutingModule } from './manageappointment-routing.module';

import { ManageappointmentPage } from './manageappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageappointmentPageRoutingModule
  ],
  declarations: [ManageappointmentPage]
})
export class ManageappointmentPageModule {}
