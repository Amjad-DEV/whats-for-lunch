import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) {
  }

  doLogin() {
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.GithubAuthProvider();
      provider.addScope('repo');
      provider.setCustomParameters({allow_signup: 'false'});
      this.firebaseAuth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }
}
