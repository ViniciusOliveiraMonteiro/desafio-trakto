import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import axios, { AxiosResponse } from 'axios';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trakto';
}
