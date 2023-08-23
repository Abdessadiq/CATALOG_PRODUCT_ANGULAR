import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";

const routes: Routes = [
  {path : "products", component: ProductsComponent},
  {path : "customers", component : CustomersComponent},
];

@NgModule({
  // fait appel au tables routes déclarer en haut..
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
