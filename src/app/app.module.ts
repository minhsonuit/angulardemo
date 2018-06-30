import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouting } from 'src/app/app.routing';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { StoreComponent } from 'src/app/store/store.component';
import { StoreModule } from 'src/app/store/store.module';
import { storeRouting } from 'src/app/store/store.routing';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SettingComponent } from './setting/setting.component';





@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingComponent

  ],
  imports: [
    BrowserModule,
    appRouting,
    StoreModule,
    storeRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
