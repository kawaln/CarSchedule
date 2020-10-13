import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckappointmentPage } from './checkappointment.page';

const routes: Routes = [
  {
    path: '',
    component: CheckappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckappointmentPageRoutingModule {}
