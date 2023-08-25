import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products!: Array<any>;

  constructor(private productsServices:ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsServices.getProducts();
  }

  handleDeleteProduct(product:any) {
    let index = this.products.indexOf(product);
    this.products.splice(index,1);

  }
}
