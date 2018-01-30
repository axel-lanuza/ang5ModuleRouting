import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PublicLayoutModule} from '@modules/layouts/public/public-layout.module';
import {AuthenticatedLayoutModule} from '@modules/layouts/authenticated/authenticated-layout.module';

const routes: Routes = [{
    path: '',
    loadChildren: () => PublicLayoutModule,
},{
    path: 'dashboard',
    loadChildren: () => AuthenticatedLayoutModule,
}];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            useHash: false,
            preloadingStrategy: PreloadAllModules
        }
    )],
    exports: [RouterModule],
})

export class AppLayoutRouterModule {
}
