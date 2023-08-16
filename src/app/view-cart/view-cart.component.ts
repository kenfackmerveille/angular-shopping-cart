import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Products } from '../interface/interface';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent  {

  constructor( private cartService : CartService){}

  popUp : Boolean = false

  currentDelete : any = null

  items = this.cartService.getItems();

  products = this.cartService.items

  getProducts  = this.cartService.items


decrease(product : Products){

  this.cartService.clearCart(product)
  for(let i = 0 ; i < this.products.length; i++){

    if (product.id == this.products[i].id) {

      const quantity = this.products[i].quantity ?? 0;
      if(quantity < 1){
        this.popUp = true
        this.currentDelete = product
      }

      this.totalProduct = this.cartService.getTotal()
      this.totalPr = this.cartService.getprice()
      this.totalPrice = this.totalPr + (this.totalPr*(2/100))

      break;
    }
  }

}

increase(product : Products){

   this.cartService.addToCart(product)
   this.totalProduct = this.cartService.getTotal()
   this.totalPr = this.cartService.getprice()
   this.totalPrice = this.totalPr + (this.totalPr*(2/100))
}

delete(item: any){

  let newItems = this.cartService.delCart(item)
  this.items = [...newItems]
  this.totalProduct = this.cartService.getTotal()
  this.totalPr = this.cartService.getprice()
  this.totalPrice = this.totalPr + (this.totalPr*(2/100))
}

confirmDelete(){

  this.delete(this.currentDelete);
  this.currentDelete = null;
  this.popUp = false;
}

popUpcart(){
  this.popUp =! this.popUp
}

totalProduct = this.cartService.getTotal()
totalPr = this.cartService.getprice()
totalPrice = this.totalPr + (this.totalPr*(2/100))
}
