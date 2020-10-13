import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckappointmentPageRoutingModule } from './checkappointment-routing.module';

import { CheckappointmentPage } from './checkappointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckappointmentPageRoutingModule
  ],
  declarations: [CheckappointmentPage]
})
export class CheckappointmentPageModule {}
