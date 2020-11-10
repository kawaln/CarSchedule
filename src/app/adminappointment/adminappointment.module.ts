import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminappointmentPageRoutingModule } from './adminappointment-routing.module';

import { AdminappointmentPage } from './adminappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminappointmentPageRoutingModule
  ],
  declarations: [AdminappointmentPage]
})
export class AdminappointmentPageModule {}
