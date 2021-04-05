import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componants/login/login.component';
import { FacebookGuard } from './guards/facebook.guard';
import { HomeComponent } from './componants/home/home.component';
import { RegisterComponent } from './componants/register/register.component';


const routes: Routes =[
  {

    path :'',
    component : HomeComponent,
    canActivate:[FacebookGuard]
    // loadChildren: () => import('./componants/home/home.module').then(m => m.HomeModule),
    
  },
  {
    path : 'login',
    component: RegisterComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
