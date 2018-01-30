import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from './public-layout.component';
import {HomeModule} from '@modules/page/home/home.module';

const routes: Routes = [{
    path: '',
    component: PublicLayoutComponent,
    children: [{
        path: '',
        loadChildren: () => HomeModule
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(
        routes
    )],
    exports: [RouterModule],
})

export class PublicLayoutRoutingModule {
}
