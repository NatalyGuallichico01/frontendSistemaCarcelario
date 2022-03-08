import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './prision/login/login.component';
import { WardComponent } from './prision/ward/ward.component';
import { WelcomeComponent } from './prision/welcome/welcome.component';




const routes: Routes = [

  { path: 'wards', component: WardComponent },

  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },

  { path: '**', redirectTo: '/', pathMatch:'prefix' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
