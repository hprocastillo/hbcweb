import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {LoginSystemComponent} from './components/login-system/login-system.component';
import {HomeSystemComponent} from './components/home-system/home-system.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarSystemComponent} from './components/navbar-system/navbar-system.component';
import {ContactsSystemComponent} from './components/contacts-system/contacts-system.component';
import { ApplicantsSystemComponent } from './components/applicants-system/applicants-system.component';


@NgModule({
  declarations: [
    LoginSystemComponent,
    HomeSystemComponent,
    NavbarSystemComponent,
    ContactsSystemComponent,
    ApplicantsSystemComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SystemModule {
}
