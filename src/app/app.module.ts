import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalcBoxComponent} from './calc-box/calc-box.component';
import {TitleBarComponent} from './title-bar/title-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdCheckboxModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';

import {CalcBoxService} from './calc-box/calc-box.service';
import {TestService} from './test/test.service'
import {TestComponent} from './test/test.component'

const appRoutes: Routes = [
  {path: 'login-route', component: LoginComponent},
  {path: 'calc-box-route', component: CalcBoxComponent},
  {path: 'test-route', component: TestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CalcBoxComponent,
    TitleBarComponent,
    SideBarComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
      // ,
      // {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CalcBoxService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
