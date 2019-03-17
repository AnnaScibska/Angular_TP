import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { HeaderComponent } from './smart/header/header.component';
import { ChangeValueComponent } from './change-value/change-value.component';
import { ValueChangerComponent } from './change-value/value-changer/value-changer.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    HeaderComponent,
    ChangeValueComponent,
    ValueChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
