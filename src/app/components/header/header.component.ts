import {Component, OnInit} from '@angular/core';
// import {Store} from '@ngrx/store';
// import {State} from '@redux/app.state';
// import {Observable} from 'rxjs/Observable';
// import {User} from '@models/index';
// import * as fromLogin from '@modules/auth/pages/login/redux/login.actions';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // user: Observable<User>;

    constructor(/*private store: Store<State>*/) {
        // this.user = store.select(fromLogin.getLoginUser);
    }

    ngOnInit() {

    }

    logout() {
        // this.store.dispatch(new fromLogin.Logout());
    }

}
