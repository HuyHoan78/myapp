import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  getsanphamById(id: any): Observable<any> {
    // Thực hiện logic lấy sản phẩm theo id và trả về một observable
    return this.http.get<any>(`http://localhost:3000/admin/sanpham/show/${id}`);
  }
  constructor(private http: HttpClient) {}
}
