import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products!:Array<any>;

  constructor() {
    this.products = [
      { id: 1, name: 'Computer', price: 12000 },
      { id: 2, name: 'Smart Phone', price: 12000 },
      { id: 3, name: 'printner', price: 12000 },
      { id: 4, name: 'calculator', price: 12000 },
      { id: 5, name: 'door', price: 12000 },
      { id: 6, name: 'keybeard', price: 12000 },
      { id: 7, name: 'souris', price: 12000 },
      { id: 8, name: 'ecran', price: 12000 },
    ];
  }
  getProducts(){
  return this.products;
  }
}
