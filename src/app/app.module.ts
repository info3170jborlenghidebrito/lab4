import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent },
      { path: 'cart', component: ShoppingCartComponent },
      // route for the about us component
      { path: 'about-us', component: AboutUsComponent },
      // route for the forth component
      { path: 'contact', component: ContactComponent },
      // route redirects automatically to the forth component
      { path: 'products-list', redirectTo: '/products', pathMatch: 'full' },
      // 2 more routes for the products list page
      { path: 'prods', redirectTo: '/products', pathMatch: 'full' },
      { path: '', redirectTo: '/contact', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactComponent,
    ProductComponent,
    CartItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
