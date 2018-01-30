import {Store} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {State} from './app.state';

@Injectable()
export class AppEffects {
    constructor(private actions: Actions, private store: Store<State>) {
    }
}
