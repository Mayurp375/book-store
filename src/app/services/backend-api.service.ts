import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get('http://localhost:3000/items');
  }
  registerUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/register', data)
  }

  getCartItems(): Observable<any> {
    return this.http.get('http://localhost:3000/cart');
  }

  // Add item to cart
  addToCart(item: any): Observable<any> {
    return this.http.post('http://localhost:3000/cart', item);
  }

  // Remove item from cart
  removeFromCart(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/cart/${id}`);
  }
}
