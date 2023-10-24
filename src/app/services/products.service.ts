import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient,private storageService:StorageService) { }
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getCachedProducts():Product[]{
    this.getAllProducts().subscribe({
      next:(products:Product[])=>{
        this.storageService.saveProducts(products);
      },
      complete:()=>{},
      error:(_error:Error)=>{
        this.storageService.saveProducts([]);
      },
    });
    return this.storageService.getCachedProducts();
  }
}















// getProductById(id: number): Observable<Product | undefined> {

//   const product = this.products.find((p) => p.id === id);
//   return of(product);
// // }