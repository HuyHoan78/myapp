import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../Service/product-detail.service';
import { ActivatedRoute } from '@angular/router';
ProductDetailService
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id!: number;
  productData: any = {};
  SanPham: any[] = [];
item: any;
  
  constructor(private route: ActivatedRoute, private dataService: ProductDetailService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadProductData(this.id);
    });
  }

  loadProductData(id: any): void {
    this.dataService.getProductById(id).subscribe((response) => {
      this.productData = response[0];
      console.log(response)
    });
  }
 
}

