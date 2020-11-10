import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminappointmentPage } from './adminappointment.page';

const routes: Routes = [
  {
    path: '',
    component: AdminappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminappointmentPageRoutingModule {}
