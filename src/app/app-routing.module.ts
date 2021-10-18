import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './customer/addcustomer/addcustomer.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { AddshippingaddressComponent } from './ShippingAddress/addshippingaddress/addshippingaddress.component';

const routes: Routes = [ 
  { path: 'viewproduct', component: ViewproductComponent},
  { path: 'addproduct', component: AddproductComponent},
  { path: 'addcustomer', component: AddcustomerComponent},
  { path: 'addshippingaddress', component: AddshippingaddressComponent},
  {path:'',redirectTo:'/viewproduct',pathMatch:'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//{path:'login',Component:LoginmoduleComponent}