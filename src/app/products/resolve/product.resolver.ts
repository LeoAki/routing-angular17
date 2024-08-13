import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductService } from '../services/product.service';
import { catchError, of } from 'rxjs';

export const productResolver: ResolveFn<Object> = (route, state) => {
  const productId = route.paramMap.get('id');
  // return inject(ProductService).getById(+(productId || 0));
  return inject(ProductService).getById(+(productId || 0)).pipe(
    catchError(error => {
      return of({error: true, message: 'Error al encontrar el producto'});
    })
  );
};
