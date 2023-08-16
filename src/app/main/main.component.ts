import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { IProduct, Products } from '../interface/interface';
import { ProductServicesService } from '../services/product-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

//   name = "jean";
//   price = 350;
//   quantity = 1

// product: IProduct = {
//   productName : this.name,
//   productQuantity: this.quantity,
//   productPrice: this.price
// };

  products: Products[] = []
  // quantities: any = {}

  constructor(
    private route: ActivatedRoute,
    private cartServise: CartService,
    private productService: ProductServicesService
  ){}

  ngOnInit(){
  
    this.products = this.productService.getProducts()
    // this.products.forEach(product => {

    //   this.quantities[product.id] = 0;
    // })
  }

  addToCart(product_id: number){

    const product = this.productService.getProduct(product_id);
    // const quantity =  this.quantities[product_id];
    if (product) {
      
      this.cartServise.addToCart(product);
      console.log(this.cartServise);
    }
    // if(this.product.productQuantity < 1){
    //   alert('Pease product cannot be Zero(0 ')
    //   window.location.reload();
    // }else{
    // this.cartServise.addToCart(this.product);
    // window.alert('your product has been added to the cart!')
    // }
  }
}
