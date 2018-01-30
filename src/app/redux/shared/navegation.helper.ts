import {ActivatedRouteSnapshot} from '@angular/router';
import {of} from 'rxjs/observable/of';
import {Store} from '@ngrx/store';
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {Observable} from 'rxjs/Observable';
import {Actions} from '@ngrx/effects';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

export function handleNavigation(segment: string, actions: Actions, store: Store<any>, callback: (a: ActivatedRouteSnapshot, state: any) => Observable<any>) {
    const nav = actions.ofType(ROUTER_NAVIGATION)
        .map(deepestActivatedRoute)
        .filter(s => s.routeConfig.path === segment.toString());

    return nav.withLatestFrom(store).switchMap(a => callback(a[0], a[1])).catch(e => {
        console.log('Network error', e);
        return of();
    });
}

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}

function deepestActivatedRoute(r: RouterNavigationAction) {
    let route = r.payload.routerState.root.firstChild;

    while (route.firstChild) {
        route = route.firstChild;
    }

    return route;
}
