import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss']
})
export class LoginStudentComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    if(this.loginFormGroup.valid) {
      this.authenticationService.login(this.loginFormGroup.value).subscribe(result => {
        console.log(result);
        
      })
    }
  }
}
