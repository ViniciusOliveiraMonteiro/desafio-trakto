import { Component, OnInit, ViewChild } from '@angular/core';
import axios from 'axios';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit {
  @ViewChild('nav', {read: DragScrollComponent}) ds!: DragScrollComponent;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}
  designs = [] as any[];
  arrowRight = 'assets/arrowRight.svg';
  arrowLeft = 'assets/arrowLeft.svg';
  banner = 'assets/coursewareBanner.svg';
  firstDesign = '';
  lastDesign = '';
  async ngOnInit(){
    const { access_token: token } = JSON.parse(window.localStorage.getItem('DATA_USER') || "");
    await axios.get(
      'https://api.trakto.io/document?updated_between_start=2023-04-21&total_per_page=10&order_by=updated_at&order_orientation=desc',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then((response) => {
      this.designs = response.data.data;
      this.lastDesign = moment(this.designs.pop().updated_at).format('DD/MM');
      this.firstDesign = moment(this.designs.shift().updated_at).format('DD/MM');
    }).catch((error) => console.log(error));
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
