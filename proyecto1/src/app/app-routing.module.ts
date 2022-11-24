//import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesComponent } from './pages/pages.component';
import { ProductoComponent } from './pages/producto/producto.component';

 const routes:Routes = [
    //rutas protegidas
    {path:'',
    component:PagesComponent,
    children:[
    //pages
    {path:'dashboard', component:DashboardComponent},
    {path:'catalogue', component:CatalogoComponent},
    {path:'products', component:ProductoComponent},
    //{path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]},
    //auth
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},

    
    {path:'**', component:NotFoundComponent}    
 ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    //CommonModule
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }