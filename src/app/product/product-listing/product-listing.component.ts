import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { Product } from '../product'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productListItems:Product[];

  constructor(private productServices:ProductService ) { }

  ngOnInit(): void {
    this.productServices.getProductListing().subscribe(data=>{
      console.log(data);
      this.productListItems = data;
      console.log(typeof(this.productListItems));
    })
  }
}
