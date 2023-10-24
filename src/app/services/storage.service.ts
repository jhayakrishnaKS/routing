import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  users: Users[] = [
    {
      id: 1,
      email: 'krish@gmail.com',
      password: 'krish',
    },
  ];

  constructor() {}

  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  getAllUsers(): Users[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  setLoggedInUser(user: Users) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeLoggedInUser() {
    localStorage.removeItem('user');
  }

  isLoggedInUser() {
    return localStorage.getItem('user') !== null;
  }

  getLoggedInUser(): Users | null {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  saveProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  SetCart(cart: Cart[]): void {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  getCachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  loadCartProducts(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartProducts(): Product[] {
    return JSON.parse(localStorage.getItem('cart') as string);
  }

  clearcart() {
    let order: Product[] = JSON.parse(localStorage.getItem('cart') as string);
    return localStorage.setItem('cart', JSON.stringify([]) as string);
  }

  SetProducts(products: Product[]): void {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }
  setUsers(users: Users[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }
  isUserLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }
}
