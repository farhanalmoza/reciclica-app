import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
