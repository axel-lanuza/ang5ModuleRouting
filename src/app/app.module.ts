import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppLayoutRouterModule} from './app-layout-router.module';
import {AppComponent} from './app.component';
import {environment} from '@environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {appReducers} from '@redux/app.reducer';
import {AppEffects} from '@redux/app.effects';
import {FakeBackendProvider} from '@helpers/fake-backend/fake-backend.interceptor';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppLayoutRouterModule,
        BrowserModule,
        NoopAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([
            AppEffects
        ]),
        StoreRouterConnectingModule,
        environment.production ? [] : StoreDevtoolsModule.instrument({maxAge: 25}),
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [
        environment.production ? [] : FakeBackendProvider
    ],
    bootstrap: [AppComponent ]
})

export class AppModule {
}
