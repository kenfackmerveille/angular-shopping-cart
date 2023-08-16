import { Injectable } from '@angular/core';
import { Products } from '../interface/interface';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: Products[] = [];

  getItems(): Products[] {

    return this.items;
  }

  findItem(id: number) {

    const items = this.getItems();
    const result = this.items.filter(item => item.id == id);
    if (result.length === 0) return null

    return result[0];
  }

  addToCart(product: Products) {
    const item = this.findItem(product.id)
    if (item) {
      this.items.forEach((currentItem, index) => {

        if (currentItem.id == product.id) {
            if(typeof this.items[index].quantity == "number"){
              const quantity = this.items[index].quantity??1
              this.items[index].quantity = quantity+1
            
            }
          }
      })
    } else {
      product.quantity = 1
      this.items.push(product);
    }
  }

  delCart(item: any){
    this.items = [...this.items.slice(0, this.items.indexOf(item)), 
      ...this.items.slice(this.items.indexOf(item)+1, this.items.length)];
      return this.items
  }

  clearCart(product: Products) {
    const item = this.findItem(product.id)
    if (item) {
      this.items.forEach((currentItem, index) => {

        if (currentItem.id == product.id) {
            if(typeof this.items[index].quantity == "number"){
              const quantity = this.items[index].quantity??1
              this.items[index].quantity = quantity-1
            
            }
          }
      })
    }
  }

  getTotal(){
    let totalQuantity = 0
    this.items.forEach((Item) => {
    if(Item.quantity){
      totalQuantity += Item.quantity
    }
    })

    return totalQuantity
  }

  getprice(){
    let totalPrice = 0
    this.items.forEach((item) => {
      if(item.price,item.quantity){
        totalPrice += item.price*item.quantity
      }
    })

    return totalPrice
  }


}
