import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  OnInit(){
    
  }
  bookSvg = 'assets/booksSvg.svg';
  medalSvg = 'assets/medalSvg.svg';
  drawingSvg = 'assets/drawingSvg.svg';
  youtubeSvg = 'assets/youtubeSvg.svg';

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
