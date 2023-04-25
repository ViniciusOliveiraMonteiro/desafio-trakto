import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}
  public bookPng = '';
  public medalPng = '';
  public drawingPng = '';
  public youtubePng = '';

  ngOnInit(): void{
    this.bookPng = 'assets/bookPng.png';
    this.medalPng = 'assets/medalPng.png';
    this.drawingPng = 'assets/drawingPng.png';
    this.youtubePng = 'assets/youtubePng.png';
  }

  selectModule(event: MouseEvent): void {
    switch ((event.target as Element).id) {
      case 'book':
        this.router.navigate(['/material-didatico']);
        break;
      case 'medal':

        break;
      case 'drawing':

        break;
      case 'youtube':

        break;
    }
  }
}
