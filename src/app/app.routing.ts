import { QuestionComponent } from './question/question.component';
import { AuthGuard } from './_guards/auth.guard';

import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { StoreComponent } from 'src/app/store/store.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch:'full' },
    { path: 'welcome', component: WelcomeComponent, canActivate:[AuthGuard] },
    {path:'home',component:StoreComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'questions',component:QuestionComponent},
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);