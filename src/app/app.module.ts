import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionExampleComponent } from './component/function-example/function-example.component';
import { InputValueComponent } from './component/input-value/input-value.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionExampleComponent,
    InputValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
