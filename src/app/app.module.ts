import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalcBoxComponent } from './calc-box/calc-box.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcBoxComponent,
    TitleBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
