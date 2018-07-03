
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { StoreComponent } from 'src/app/store/store.component';

export const storeRoutes: Routes = [
    { path: 'stores', component:StoreComponent },
];
export const storeRouting: ModuleWithProviders = RouterModule.forChild(storeRoutes);