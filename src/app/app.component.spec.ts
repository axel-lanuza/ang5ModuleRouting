import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppReducer} from './redux/app.reducer';
import {initialState} from './redux/app.state';
import {AppEffects} from './redux/app.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './modules/core/routes/app-routing.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                AppRoutingModule,
                RouterModule,
                // Ngrx Redux.
                StoreModule.forRoot(<any>{app: AppReducer}, {initialState}),
                StoreDevtoolsModule.instrument({
                    maxAge: 25 //  Retains last 25 states
                }),
                EffectsModule.forRoot([
                    AppEffects
                ]),
                StoreRouterConnectingModule,
                HttpClientModule,
                HttpModule
            ],
            providers: []
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('my app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to my app!');
    }));
});
