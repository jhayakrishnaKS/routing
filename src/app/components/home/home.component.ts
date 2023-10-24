import { Component } from "@angular/core";
import { Cart } from "src/app/models/cart";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { ProductsService } from "src/app/services/products.service";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Products: Product[] = [];

  cartItems: Cart[] = [];

  constructor(
    private productservices: ProductsService,
    private cartservices: CartService,
    private storageservices: StorageService
  ) {
    this.productservices. getAllProducts().subscribe({
      next: (data: Product[]) => {
        this.Products = data;
        this.storageservices.saveProducts(this.Products);
        this.storageservices.SetCart(this.cartItems);
      },
      complete: () => {
        console.log('completed');
      },
      error: (error: Error) => {
        console.log('Message:', error.message);
        console.log('Name:', error.name);
      },
    });
  }

  addToCart(id: number) {
    // Assuming you have an addToCart method in your CartService
    this.cartservices.addToCart(id);
  }
}
