import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { CartItem } from '../Interface/cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: any[] = [];
totalPice: number = 0
  constructor(private cartService: CartService) {
    
  }
  ngOnInit(): void{
    this.cartService.loadCart();
    this.items = this.cartService.getCartItems()
    this.ThanhTien()
    console.log(this.items)
  }
 
  ThanhTien(){
    this.totalPice = this.cartService.calculateTotal()
  }
  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.cartService.getCartItems();
    this.calculateTotal();
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.getCartItems();
      this.calculateTotal();
    }
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPice = this.cartService.calculateTotal();
  }
  buyItems() {
    // Thực hiện quá trình thanh toán ở đây
    // Bạn có thể chuyển tới trang thanh toán hoặc thực hiện các bước khác cần thiết
    console.log('Đã mua hàng:', this.items);
  }
}


