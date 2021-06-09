import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
