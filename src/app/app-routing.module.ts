import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'homeadmin',
    loadChildren: () => import('./homeadmin/homeadmin.module').then( m => m.HomeadminPageModule)
  },
  {
    path: 'checkappointment',
    loadChildren: () => import('./checkappointment/checkappointment.module').then( m => m.CheckappointmentPageModule)
  },
  {
    path: 'manageappointment',
    loadChildren: () => import('./manageappointment/manageappointment.module').then( m => m.ManageappointmentPageModule)
  },
  {
    path: 'adminappointment',
    loadChildren: () => import('./adminappointment/adminappointment.module').then( m => m.AdminappointmentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
