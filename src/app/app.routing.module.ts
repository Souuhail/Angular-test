import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';


const ROUTES:Routes=[
  {path:"",redirectTo:"residence",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"appartment",component:AppartmentComponent},
  {path:"formulaire",component:FormulaireComponent},
  {path:"user-add",component:UserAddComponent},
  {path:"user-list",component:UserListComponent},
    
 // {path:"**",component:NotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
