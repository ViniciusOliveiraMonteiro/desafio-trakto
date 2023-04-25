import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() displayLogoutButton!: string;
  @Input() backgroundColor!: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}
  public currentDate = moment().format('DD/MM/YYYY');
  public avatarSrc = '';
  public logoutSvg = 'assets/logoutSvg.svg';
  
  ngOnInit(): void{
    const { logo } = JSON.parse(window.localStorage.getItem('DATA_USER') || "");
    this.avatarSrc = logo?.url?.high?.url;
    this.avatarSrc = this.avatarSrc ? this.avatarSrc : 'assets/avatar.png';
  }
  changeEnvironmentAction(): void {
    this.router.navigate(['/modulos']);
  }

  logout(): void {
    this.router.navigate(['']);
  }
}
