import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent, UserComponent, LoginComponent, RegisterComponent } from './components';
import { AppRoutingModule } from './app-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, AdminComponent, UserComponent, LoginComponent, RegisterComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
