import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { productResolver } from './products/resolve/product.resolver';

export const routes: Routes = [
  {
    path: 'componente-uno',
    title: 'Componente Uno',
    data: {author: 'Leonardo Aquino'},
    // component: UnoComponent
    loadComponent: () => import('./uno/uno.component').then((c) => c.UnoComponent)
  },
  {
    path: 'componente-dos',
    // component: DosComponent, title: 'Componente Dos',
    loadComponent: () => import('./dos/dos.component').then((c) => c.DosComponent),
    children: [
      {
        path: 'hijo-1',
        // component: DosRomanosComponent
        loadComponent: () => import('./dos/dos-romanos/dos-romanos.component').then((c) => c.DosRomanosComponent)
      },
      {
        path: 'hijo-2',
        // component: DosNaturalesComponent
        loadComponent: () => import('./dos/dos-naturales/dos-naturales.component').then((c) => c.DosNaturalesComponent)
      },
    ]
  },
  {
    path: 'componente-tres/:postId',
    // component: TresComponent,
    loadComponent: () => import('./tres/tres.component').then((c)=> c.TresComponent),
    title: 'Componente Tres'
  },
  {path: 'products',
    // component: ProductComponent,
    loadComponent: () => import('./products/product/product.component').then((c) => c.ProductComponent),
    children: [
      {
        path: ':id',
        // component: ProductDetailComponent,
        loadComponent: () => import('./products/product-detail/product-detail.component').then((c) => c.ProductDetailComponent),
        title: 'Game',
        resolve: { productData: productResolver }
      }
    ]
  },
  {
    path: 'defer',
    loadComponent: () => import('./defer/base-defer/base-defer.component').then((c)=> c.BaseDeferComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component').then((c)=> c.AuthComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then((c)=> c.DashboardComponent),
    // canActivate: [authGuard]
    // canActivate: [() => inject(authService).isAuthenticated()]
  },
  {path: '', redirectTo: 'componente-uno', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, title: 'Ups, no se encontró la ruta'}
];
