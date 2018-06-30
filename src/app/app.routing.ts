
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { StoreComponent } from 'src/app/store/store.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch:'full' },
    { path: 'welcome', component: WelcomeComponent },
    {path:'home',component:StoreComponent}
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);