import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { AddshippingaddressComponent } from './ShippingAddress/addshippingaddress/addshippingaddress.component';
import { ViewshippingaddressComponent } from './ShippingAddress/viewshippingaddress/viewshippingaddress.component';
import { UpdateshippingaddressComponent } from './ShippingAddress/updateshippingaddress/updateshippingaddress.component';
import { DeleteshippingaddressComponent } from './ShippingAddress/deleteshippingaddress/deleteshippingaddress.component';

@NgModule({
  declarations: [
    AppComponent,
    AddshippingaddressComponent,
    ViewshippingaddressComponent,
    UpdateshippingaddressComponent,
    DeleteshippingaddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SiteLayoutModule,
    ProductModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
