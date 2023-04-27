import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.component.service';
import { IAuthUser } from './interfaces/login.component.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service : LoginService
  ) {}

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  public isSubmit = false;
  public response!: IAuthUser;

  async onSubmit(): Promise<void> {
    this.isSubmit = true;
    try {
      if(!this.loginForm.valid){
        this.isSubmit = false;
        this.loginForm.markAllAsTouched();
        return;
      }
      this.response = await this.service.login(this.loginForm.value);
      if(!this.response){
        this.isSubmit = false;
        this.loginForm.get('password')?.setErrors({invalidCredentials: true});
        return;
      }
      localStorage.setItem('DATA_USER', JSON.stringify(this.response));
      this.isSubmit = false;
      this.router.navigate(['/modulos']);
    } catch (error) {
      console.log(error);
    }
  }
}
