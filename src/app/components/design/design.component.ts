import { Component, Input } from '@angular/core';
import { IDesign } from './interfaces/design.component';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  @Input() design!: IDesign;
  constructor(){}
  openTraktorEditor(event: MouseEvent): void {
    let traktoId = (event.target as Element).id;
    window.open(`https://editor.trakto.io/editor/${traktoId}`)
  }

}
