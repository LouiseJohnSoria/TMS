import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AllPlayersComponent } from './home/dashboard/all-players/all-players.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { Color1Component } from './color1/color1.component';
import { Color2Component } from './color2/color2.component';
import { Color3Component } from './color3/color3.component';
import { Color4Component } from './color4/color4.component';
import { Color5Component } from './color5/color5.component';
import { Color6Component } from './color6/color6.component';


const routes: Routes = [
  // {path: 'login', component: LoginComponent},
  {path: 'all-players', component: AllPlayersComponent },
  {path: 'color1', component: Color1Component },
  {path: 'color2', component: Color2Component },
  {path: 'color3', component: Color3Component },
  {path: 'color4', component: Color4Component },
  {path: 'color5', component: Color5Component },
  {path: 'color6', component: Color6Component }

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
