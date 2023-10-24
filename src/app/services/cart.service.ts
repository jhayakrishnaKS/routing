import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor(private StroageService: StorageService) {}

  addToCart(id: number): void {
    const products = this.StroageService.getCachedProducts();
    const user = this.StroageService.getLoggedInUser();
    let cart = this.StroageService.getCartProducts();
    const clickedProduct = products.find((prod) => prod.id === id);

    if (clickedProduct) {
      let existingCartItem = cart.find((item) => item.id === id);

      if (!existingCartItem) {
        cart.push({ ...clickedProduct, id: id, count: 1 });
      } else {
        cart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, count: (item.count || 0) + 1 };
          } else {
            return item;
          }
        });
      }

      this.StroageService.loadCartProducts(cart);
    }
  }

  getCartProducts(): Product[] {
    return this.StroageService.getCartProducts();
  }

  getcount(): number {
    let count: number = 0;
    const cartProducts = this.StroageService.getCartProducts(); 

    for (let product of cartProducts) {
      if (product.count) {
        count += product.count;
      }
    }

    return count;
  }
  
}