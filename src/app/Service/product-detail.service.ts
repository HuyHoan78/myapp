import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  private apiUrl = 'http://localhost:3000/admin/sanpham/'; 

  constructor(private http: HttpClient) {}

  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(this.apiUrl+"show/"+productId)
  }
}
