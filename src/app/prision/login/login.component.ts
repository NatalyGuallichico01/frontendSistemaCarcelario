/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
export class LoginComponent implements OnInit {

  myFormLogin!: FormGroup;
  textBtn: string = "Login";
  public ResponseTrue:string="";
  ResponseFalse: object = {};
  MessageError: string = "";
  Token: string = "";

  constructor(public servc: LoginService, private router: Router) {

  }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.myFormLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    
  }

  checkLocalStorage(){
    if(localStorage.getItem('tokenUser')){
      this.router.navigate(['/dashboard'])
    }
  }


  lginComponent() {
    console.log(this.myFormLogin.value.email);
    console.log(this.myFormLogin.value.password);
    console.log("Bienvenido");
    const email = this.myFormLogin.value.email;
    const password = this.myFormLogin.value.password;
    //const description = this.myFormWard.value.descriptionF;
    this.servc.loginUser(email, password).subscribe((r) => {
      this.ResponseTrue = r.token;
      localStorage.setItem('tokenUser', this.ResponseTrue);
      localStorage.setItem('InfoUser', r.user.name);
      console.log(r.user)
      this.MessageError = "";
      this.myFormLogin = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),

      });
      this.router.navigate(['/dashboard']);
    }, (error) => {
      console.log("respuesta error", error);
      console.log("respuesta error", error.error.errors.email[0]);
      this.ResponseFalse = error;
      this.MessageError = error.error.errors.email[0];
    });

  }


}






/*
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientelaravelService } from 'src/app/service/clientelaravel.service';
import { Ward } from 'src/app/service/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  report: Report[] = [];

  myFormWard!: FormGroup;

  actualizar:boolean = false;

  textBtn:string="Register";

  constructor (public servc:ClientelaravelService)
  {
    // this.servc.getWards().subscribe(r=>{
    //   console.warn(r);
    //   console.table(r[0]);
    // })
  }

  ngOnInit(): void {
      this.getWardsComponent()

      this.myFormWard = new FormGroup({
        idF : new FormControl(''),
        nameF: new FormControl(''),
        locationF: new FormControl(''),
        descriptionF: new FormControl(''),
      });
  }

  getWardsComponent()
  {
    this.servc.getWards().subscribe((r) => {
      return this.wards = r;
    });
  }

  addWardComponent()
  {
    if (this.actualizar==false)
    {
          const name = this.myFormWard.value.nameF;
          const location = this.myFormWard.value.locationF;
          const description = this.myFormWard.value.descriptionF;
          this.servc.addWard(name, location, description).subscribe((r) =>
          {
              this.getWardsComponent();

              this.myFormWard = new FormGroup({
                idF : new FormControl(''),
                nameF: new FormControl(''),
                locationF: new FormControl(''),
                descriptionF: new FormControl(''),
              });
            });
          }
    else
    {
      const id = this.myFormWard.value.idF;
      const name = this.myFormWard.value.nameF;
      const location = this.myFormWard.value.locationF;
      const description = this.myFormWard.value.descriptionF;

      this.servc.updateWard(name, location, description,id).subscribe((r) =>
        {
          this.getWardsComponent();

          this.myFormWard = new FormGroup({
            idF : new FormControl(''),
            nameF: new FormControl(''),
            locationF: new FormControl(''),
            descriptionF: new FormControl(''),
          });

          this.textBtn = "Register"
        });

    }
    

  }

  updateWardComponent(id: any)
  {
    this.servc.getWardById(id).subscribe((r) =>
    {

      this.myFormWard = new FormGroup({

        idF : new FormControl(`${r.id}`),
        nameF: new FormControl(`${r.name}`),
        locationF: new FormControl(`${r.location}`),
        descriptionF: new FormControl(`${r.description}`)
      });

      this.actualizar = true;

      this.textBtn = "Update"

    });
  }


  deleteWard(id:any)
  {
    console.warn(id)

    if (!confirm('Warning!!!  You are about to change the status for the ward'))
    {
      return false;
    }
    else
    {
      this.servc.deleteWard(id).subscribe((r) =>
      {
        this.getWardsComponent();
      });
      return true;
    }
  }


}
*/