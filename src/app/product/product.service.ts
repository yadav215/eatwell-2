import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, pluck } from 'rxjs';
import { FeaturedRestaurant } from '../site-layout/categories';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) {}
  //service for creating product
  createProduct(productBody: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product";
    return this.httpClient.post<Product>(baseUrl, productBody);
  }
   //service for view product
  viewProduct(productId: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/" + productId;
    return this.httpClient.get<Product>(productId);
  }
  //service for update product
  updateProduct(productId: any,productBody:any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/" + productId;
    return this.httpClient.put<Product>(productId,productBody);
  }
  //service for delete product
  deleteProduct(productId: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/" + productId;
    return this.httpClient.delete<Product>(productId);
  }

  searchProductBtCategory(categoryId: any):Observable<Product>{
    const baseUrl="http://localhost:3000/product/" + categoryId;
    return this.httpClient.get<Product>(categoryId).pipe(first());
  }

  getRestaurantsList(){
    const RestaurantsListUrl="http://localhost:3000/featuredRestaurants";
    return this.httpClient.get<FeaturedRestaurant[]>(RestaurantsListUrl);
  }

  getProductListing():Observable<Product[]>{
    const productListing="http://localhost:3000/productListing";
    return this.httpClient.get<Product[]>(productListing);
  }
}
