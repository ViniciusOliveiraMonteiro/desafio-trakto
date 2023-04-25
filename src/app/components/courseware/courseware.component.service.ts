import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import axios from "axios";
import { IDesign } from "../design/interfaces/design.component";

@Injectable({
  providedIn: 'root'
})

export class CoursewareService {
  constructor(){}
  public getDesigns(params: string): Promise<IDesign[]> {
    return axios.get(
      'https://api.trakto.io/document?updated_between_start=2023-04-21&total_per_page=10&order_by=updated_at&order_orientation=desc',
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