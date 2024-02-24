import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../Interface/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  constructor(
  ) { }

  getCartItems(){
    return this.cartItems
  }

  

  adToCart(product: any){
    const existingItem = this.cartItems.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.TenSanPham,
        imageUrl: product.AnhDaiDien,
        price: product.GiaBan,
        quantity: 1
      };

      this.cartItems.push(newItem);
    }

    this.saveCart();
  }
  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') as any) || []
  }
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price*item.quantity, 0);
  }
  removeItem(item: CartItem) {
    const itemIndex = this.cartItems.findIndex(i => i.id === item.id);

    if (itemIndex !== -1) {
      this.cartItems.splice(itemIndex, 1);
      this.saveCart();
    }
  }
}
