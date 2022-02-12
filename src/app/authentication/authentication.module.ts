import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginStudentComponent } from '../login-student/login-student.component';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginStudentComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatSliderModule,
  ]
})
export class AuthenticationModule { }
