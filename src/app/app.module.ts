import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [AppComponent, ProductsComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({
      //TODO: add reducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
