import { Component, OnInit } from '@angular/core';
import { AllDesignService } from './all-design.component.service';
import { IDesign } from '../design/interfaces/design.component';

@Component({
  selector: 'app-all-design',
  templateUrl: './all-design.component.html',
  styleUrls: ['./all-design.component.css']
})
export class AllDesignComponent implements OnInit {
  constructor(
    private service: AllDesignService,
  ){}
  public designs: IDesign[] = [];
  async ngOnInit(){
    try {
      const { access_token: token } = JSON.parse(window.localStorage.getItem('DATA_USER') || "");
      this.designs = await this.service.getDesigns(token);
      if(!this.designs.length){
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
