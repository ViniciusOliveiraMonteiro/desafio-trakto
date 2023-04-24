import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-all-design',
  templateUrl: './all-design.component.html',
  styleUrls: ['./all-design.component.css']
})
export class AllDesignComponent implements OnInit {
  constructor(){}
  designs = [];
  async ngOnInit(){
    const { access_token: token } = JSON.parse(window.localStorage.getItem('DATA_USER') || "");
    await axios.get(
      'https://api.trakto.io/document',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then((response) => {
      this.designs = response.data.data;
    }).catch((error) => console.log(error));
  }
}
