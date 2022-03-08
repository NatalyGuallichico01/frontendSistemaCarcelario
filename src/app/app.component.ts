import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientelaravelService } from './service/clientelaravel.service';
import { LogoutService} from './service/logout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'frontend';

  constructor (public servc:ClientelaravelService)
  {

    this.servc.getWards().subscribe(r=>{

      console.warn(r);

      console.table(r[0]);

    })
  }
  LogoutUser():void{
    let token =localStorage.getItem('tokenUser');
    this.servc.logoutUser(token).subscribe((r) => {
      console.log(r)
     localStorage.removeItem("tokenUser");
     localStorage.removeItem("InfoUser");
     //this.router.navigate(['/welcome']);
   }, (error) => {
     console.log("respuesta error logout", error);
 
   });
   }

}





