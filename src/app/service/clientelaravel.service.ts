import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Ward } from './Ward';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientelaravelService {
  
  //wardsUrl:string=environment.wardsUrl;
  //wardsUrl:string = "http://127.0.0.1:8000/api/wards"
  wardsUrl:string = "https://appcarceles1.herokuapp.com/api/wards"
  logoutUrl: string = "https://appcarceles1.herokuapp.com/api/logout"

  constructor(private httpc: HttpClient)
  { }
  
  logoutUser(token: any) {
   let tokenBearer='Bearer ' + token;
   let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
   let data={}
    return this.httpc.post(this.logoutUrl,data, {headers:reqHeader});
}

  getWards(): Observable<Ward[]>
  {
    return this.httpc.get<Ward[]>(this.wardsUrl)
  }

  /*addWard(name:string, location:string, description:string)
  {

    let objectWard:Ward = {name,location,description}

     return this.httpc.post(this.wardsUrl,objectWard);
  }*/

  addWard(name: string, location: string, description: string) {

    let objectWard: Ward = { name, location, description }
    let token :any;
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
    let reqHeader = new HttpHeaders({'Authorization':tokenBearer});

    return this.httpc.post(this.wardsUrl, objectWard,{headers:reqHeader});
  }

  getWardById(idWard:any)
  {
    //return this.httpc.get<Ward>(`${this.wardsUrl}/${idWard}`);
    let token :any;
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
     let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
    return this.httpc.get<Ward>(`${this.wardsUrl}/${idWard}`,{headers:reqHeader});
  }


  updateWard(name:string, location:string, description:string,idWard:any)
  {
    /*let objectWard:Ward = {name,location,description}
    
    return this.httpc.put(`${this.wardsUrl}/${idWard}`,objectWard)*/
    let token :any;
    let objectWard: Ward = { name, location, description }
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
    let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
    
    return this.httpc.put(`${this.wardsUrl}/${idWard}`, objectWard,{headers:reqHeader});


  }

  deleteWard(idWard:any)
  {
    //return this.httpc.delete(`${this.wardsUrl}/${idWard}`)
    let token :any;
     token =localStorage.getItem('tokenUser');
     let tokenBearer='Bearer ' + token;
     console.log("tokenuser",tokenBearer)
    let reqHeader = new HttpHeaders({'Authorization':tokenBearer});
    return this.httpc.delete(`${this.wardsUrl}/${idWard}`, {headers:reqHeader})
  }















}
