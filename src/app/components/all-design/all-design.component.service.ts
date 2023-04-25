import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import axios from "axios";
import { IDesign } from "../design/interfaces/design.component";

@Injectable({
  providedIn: 'root'
})

export class AllDesignService {
  constructor(){}
  public getDesigns(params: string): Promise<IDesign[]> {
    return axios.get(
      'https://api.trakto.io/document',
      {
        headers: {
          'Authorization': `Bearer ${params}`
        }
      }
    ).then((response) => {
      return response.data.data;
    }).catch((error) => console.log(error));
  }
}