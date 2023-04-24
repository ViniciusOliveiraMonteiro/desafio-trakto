import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios, { AxiosResponse } from 'axios';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  async onSubmit(): Promise<AxiosResponse> {
    return await axios.post(
      'https://api.trakto.io/auth/signin', 
      this.loginForm.value
    ).then((response) => {
      localStorage.setItem('DATA_USER', JSON.stringify(response.data));
      console.log(localStorage.getItem('DATA_USER'));
      this.router.navigate(['/modulos']);
      return response.data;
    }).catch(error => console.log(error));
  }
}
