import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader.component';
// import {AngularMaterialModule} from '../../angularMaterial.module';

@NgModule({
    imports: [
        CommonModule,
//        AngularMaterialModule
    ],
    exports: [
        LoaderComponent
    ],
    declarations: [LoaderComponent],
})

export class LoaderModule {
}
