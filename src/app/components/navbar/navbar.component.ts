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
  currentDate = moment().format('DD/MM/YYYY');
  avatarSrc = '../../assets/avatar.png';
  traktoEduLogo = 'assets/traktoEduLogo.svg';
  calendarSvg = 'assets/calendarSvg.svg';
  notificationSvg = 'assets/notificationSVG.svg';
  arrowDownSvg = 'assets/arrowDown.svg';
  logoutSvg = 'assets/logoutSvg.svg';
  userLogo = '';
  
  ngOnInit(){
    const { logo: {url: {high: {url}} } } = JSON.parse(window.localStorage.getItem('DATA_USER') || "");
    this.userLogo = url;
  }
  changeEnvironmentAction(){
    this.router.navigate(['/modulos']);
  }
}
