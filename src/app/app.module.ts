import { UserService } from './_services/user.service';
import { AuthGuard } from './_guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';






@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingComponent,
    LoginComponent,
    RegisterComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting,
    StoreModule,
    storeRouting,
    ReactiveFormsModule,
    
  ],
  providers: [AuthGuard,UserService],
  bootstrap: [AppComponent],
  schemas: [
    //CUSTOM_ELEMENTS_SCHEMA,
    /*NO_ERRORS_SCHEMA*/
  ],
  exports:[],
})
export class AppModule { }
