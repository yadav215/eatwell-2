import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}

  createProduct(productBody):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl, productBody);
  }
}
