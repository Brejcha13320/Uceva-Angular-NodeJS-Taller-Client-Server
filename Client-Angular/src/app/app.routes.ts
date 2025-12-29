import { Routes } from '@angular/router';
import { UsersPage } from './pages/users/users.page';
import { ProductsPage } from './pages/products/products.page';

export const routes: Routes = [
    { path: 'users', component: UsersPage },
    { path: 'products', component: ProductsPage },
    { path: '**', redirectTo: 'users' },
];
