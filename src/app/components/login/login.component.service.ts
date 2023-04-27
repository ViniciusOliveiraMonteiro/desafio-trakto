import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import axios from "axios";
import { IAuthUser } from "./interfaces/login.component.interface";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(){}
  public login(params: FormGroup): Promise<IAuthUser> {
    return axios.post(
      'https://api.trakto.io/auth/signin', 
      params
    ).then((response) => {
      return response.data;
    }).catch(error => {
      return false;
    });
  }
}