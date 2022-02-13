import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthenticationComponent } from './authentication.component';
import { LoginStudentComponent } from './login-student/login-student.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { LoginEmployerComponent } from './login-employer/login-employer.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginStudentComponent,
    LoginEmployerComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
