import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://dummyjson.com'
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl + '/products')
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/products/${id}`)
  }
}
