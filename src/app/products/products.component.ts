import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<any> | undefined;

  constructor() {}

  ngOnInit(): void {
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
}
