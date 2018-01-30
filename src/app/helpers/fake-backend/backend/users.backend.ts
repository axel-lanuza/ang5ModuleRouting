import {HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {users as usersData} from '../data';
import {User} from '../../../models/index';

const users: any[] = usersData;

export function authenticate(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    // find if any user matches login credentials
    const filteredUsers = users.filter(user => {
        return user.email === request.body.email && user.password === request.body.password;
    });

    if (filteredUsers.length) {
        // if login details are valid return 200 OK with user details and fake jwt token
        const user = filteredUsers[0];
        const body: User = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        };

        return Observable.of(new HttpResponse({status: 200, body: body}));
    } else {
        // else return 400 bad request
        return Observable.throw('Username or password is incorrect');
    }
}
