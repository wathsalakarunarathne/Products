import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './components/items/shopping-item/shopping-item.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { SigninComponent } from './components/signin/signin.component';
import { ViewitemComponent } from './components/items/viewitem/viewitem.component';

const appRoutes: Routes = [
   { path: '', component: SigninComponent},
   { path: 'signin', component: SigninComponent },
   { path: 'items/shopping-item', component: ShoppingItemComponent },
   { path: 'appheader', component: AppheaderComponent },
   { path: 'users/adduser', component: AdduserComponent },
   { path: 'items/viewitem', component: ViewitemComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppmenuComponent,
    AdduserComponent,
    SigninComponent,
    ViewitemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
