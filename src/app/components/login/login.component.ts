import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios, { AxiosResponse } from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.module.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private service : LoginService
  ) {}

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });;
  public isSubmit = false;

  async onSubmit(): Promise<void> {
    this.isSubmit = true;
    try {
      if(!this.loginForm.valid){
        this.isSubmit = false;
        this.loginForm.markAllAsTouched();
        return;
      }
      let response = await this.service.login(this.loginForm.value);
      if(!response){
        this.isSubmit = false;
        this.loginForm.get('password')?.setErrors({invalidCredentials: true});
        return;
      }
      localStorage.setItem('DATA_USER', JSON.stringify(response));
      this.isSubmit = false;
      this.router.navigate(['/modulos']);
    } catch (error) {
      console.log(error);
    }
  }
}
