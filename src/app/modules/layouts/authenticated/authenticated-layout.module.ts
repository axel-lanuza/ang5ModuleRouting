import {NgModule} from '@angular/core';
import {AuthenticatedLayoutComponent} from './authenticated-layout.component';
import {AuthenticatedLayoutRoutingModule} from './authenticated-layout-routing.module';

@NgModule({
    declarations: [
        AuthenticatedLayoutComponent
    ],
    imports: [
        AuthenticatedLayoutRoutingModule
    ],
    exports: [],
    providers: [],
})

export class AuthenticatedLayoutModule {
}
