import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageappointmentPage } from './manageappointment.page';

const routes: Routes = [
  {
    path: '',
    component: ManageappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageappointmentPageRoutingModule {}
