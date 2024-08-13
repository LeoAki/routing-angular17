import { AsyncPipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  providers: []
})
export class ProductDetailComponent {

  product$!: Observable<any>;
  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.data.pipe(map(data => data['game']));
    this.product$ = this.activatedRoute.data.pipe(
      map(data => {
        if (data['productData'].error) {
          throw new Error(data['productData'].message);
        }
        return data['productData'];
      }));
  }
}
