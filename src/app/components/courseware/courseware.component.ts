import { IDesign } from './../design/interfaces/design.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CoursewareService } from './courseware.component.service';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit {
  @ViewChild('nav', {read: DragScrollComponent}) ds!: DragScrollComponent;
  constructor(
    private router: Router,
    private service: CoursewareService,
  ){}
  public designs: IDesign[] = [];
  public arrowRight = 'assets/arrowRight.svg';
  public arrowLeft = 'assets/arrowLeft.svg';
  public banner = 'assets/bannerPng.png';
  public firstDesign = '';
  public lastDesign = '';
  async ngOnInit(){
    try {
      const { access_token: token } = JSON.parse(window.localStorage.getItem('DATA_USER') || "");
      this.designs = await this.service.getDesigns(token);
      if(!this.designs.length){
        return;
      }
      this.lastDesign = moment(this.designs[this.designs.length -1].updated_at).format('DD/MM');
      this.firstDesign = moment(this.designs[0].updated_at).format('DD/MM');
    } catch (error) {
      console.log(error);
    }
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  showAllDesigns(){
    this.router.navigate(['/meus-designs']);
  }
}
