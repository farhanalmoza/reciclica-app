import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  recoverEmailPassword(email: string) : Observable<void> {
    return new Observable<void>(obeserver => {
      setTimeout(() => {
        if (email == "error@email.com") {
          obeserver.error({message: "Email not found"});
        }
        obeserver.next();
        obeserver.complete();
      }, 3000);
    });
  }

  login(email: string, password: string) : Observable<User> {
    return new Observable<User>(observer => {
      setTimeout(() => {
        if (email == "error@email.com") {
          observer.error({message: "User not found"});
          observer.next();
        } else {
          const user = new User();
          user.email = email;
          user.id = "userId";
          observer.next(user);
        }
        observer.complete();
      }, 3000)
    })
  }
}
