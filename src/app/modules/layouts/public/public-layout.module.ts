import {NgModule} from '@angular/core';
import {PublicLayoutComponent} from './public-layout.component';
import {HeaderComponent} from '@components/header/header.component';
import {FooterComponent} from '@components/footer/footer.component';
import {PublicLayoutRoutingModule} from './public-layout-routing.module';

@NgModule({
    declarations: [
        PublicLayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        PublicLayoutRoutingModule
    ],
    exports: [],
    providers: [],
})

export class PublicLayoutModule {
}
