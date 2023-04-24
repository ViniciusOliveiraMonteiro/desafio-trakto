import { Component, Input } from '@angular/core';
import { Design } from './design.model';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  @Input() design!: Design;
  constructor(){}
  openTraktorEditor(event: MouseEvent): void {
    let traktoId = (event.target as Element).id;
    window.open(`https://editor.trakto.io/editor/${traktoId}`)
  }

}
