import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalcBoxComponent} from './calc-box/calc-box.component';
import {TitleBarComponent} from './title-bar/title-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatTableModule, MatSelectModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CalcBoxService} from './calc-box/calc-box.service';
import {TestService} from './test/test.service';
import {LoginService} from "./login/login.service";
import {TestComponent} from './test/test.component';
import {CdkTableModule} from '@angular/cdk/table';

const appRoutes: Routes = [
  {path: 'login-route', component: LoginComponent},
  {path: 'calc-box-route', component: CalcBoxComponent, canActivate: [LoginComponent]},
  {path: 'test-route', component: TestComponent, canActivate: [LoginComponent]}
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
    FormsModule,
    CdkTableModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MdSelectModule
  ],
  providers: [SideBarComponent, LoginComponent, CalcBoxService, TestService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
