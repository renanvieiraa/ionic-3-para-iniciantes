import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {

  }

  // Recuperar os dados do localstorage
  getConfigData(): any{
    return localStorage.getItem("config")


  }

  // Grava os dados do localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(showSlide){
      config.username = username;
    }

    localStorage.setItem("config", JSON.stringify(config));

  }
}
