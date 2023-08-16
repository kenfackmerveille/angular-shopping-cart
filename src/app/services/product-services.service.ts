import { Injectable } from '@angular/core';
import { Products } from '../interface/interface';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private add: CartService){

  }


  products: Products[] = [
    {
      id: 1,
      Image : "../../assets/jeans 2.jpg",
      names: "jean mixte" ,
      price: 320
    },
    {
      id: 2,
      Image : "../../assets/polo.jfif",
      names: "polo homme" ,
      price: 250
    },
    {
      id: 3,
      Image : "../../assets/chemise.jfif",
      names: "chemise mixte" ,
      price: 50
    },
    // {
    //   id: 4,
    //   Image : "../../assets/chemise.jfif",
    //   names: "chemise mixte" ,
    //   price: 200
    // },
  ]
  // constructor() { }

  getProducts(): Products[] {
    return this.products;
  }

  getProduct(id: number): Products|null {

    const products = this.getProducts();
    const result = products.filter(product => product.id == id);
    if (result.length === 0) return null

    return result[0];
  }

}
