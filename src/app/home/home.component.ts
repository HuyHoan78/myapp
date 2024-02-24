import { Component , OnInit} from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartService } from '../Service/cart.service';
import { ProductDetailService } from '../Service/product-detail.service';
ProductDetailService
CartService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
sp: any;
  productDetailService: any;
addToCart(_t54: any) {
throw new Error('Method not implemented.');
}
  Products: any [] =[];
  
  constructor(private http: HttpClient,
    private cartService: CartService) {}
  ngOnInit(): void {
    this.fetchProducts();
  }


  fetchProducts() {
    this.http.get('http://localhost:3000/admin/sanpham').subscribe(
      (data: any) => {
        // Ensure that the received data is an array before assigning it
        if (Array.isArray(data)) {
          this.Products = data;
        } else {
          console.log('Data received from the API is not an array:', data);
        }
      },
      (error) => {
        console.log('Error fetching products:', error);
      }
    );
  }
  addCart(product: any){
    this.cartService.adToCart(product);
    alert("Thêm sản phẩm vào giỏ hàng thành công")
  }
  viewProductDetail(id: number): void {
    this.productDetailService.getProductDetail(id).subscribe(
      (data: any) => {
        // Hiển thị chi tiết sản phẩm (có thể chuyển đến trang chi tiết sản phẩm)
        console.log(data);
        // Có thể thực hiện hiển thị chi tiết sản phẩm trong modal hoặc chuyển đến trang chi tiết sản phẩm
      },
      (error: any) => {
        console.error('Error fetching product detail:', error);
      }
    );
  }

}
