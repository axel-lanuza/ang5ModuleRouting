import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedLayoutComponent} from './authenticated-layout.component';

const routes: Routes = [{
    path: '',
    component: AuthenticatedLayoutComponent,
    children: [{
        path: '',
        loadChildren: 'app/modules/page/dashboard/dashboard.module#DashboardModule'
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(
        routes
    )],
    exports: [RouterModule],
})

export class AuthenticatedLayoutRoutingModule {
}
