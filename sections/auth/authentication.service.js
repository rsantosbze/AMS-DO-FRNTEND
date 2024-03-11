import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

let jwtFromLocalStorage = '';

if (typeof window !== 'undefined') {
  jwtFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'));
}

const currentUserSubject = new BehaviorSubject(jwtFromLocalStorage);
//const currentUserSubject = new BehaviorSubject(null);
export const authenticationService = {
  saveJWT,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
  getTokenObject,
};

function saveJWT(data) {
 
  if (data) {
     const user = data.login;
    if (user && user.accessToken) {
      // store; user; details; and; jwt; token in local
      // storage; to; keep; user; logged in between; page; refreshes;
     localStorage.setItem('currentUser', JSON.stringify(user));
       
      currentUserSubject.next(user);
      
    }

   // return user;
  }
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  currentUserSubject.next(null);
}

function getDecodedAccessToken(token) {
  try {
    return jwt_decode(token);
  } catch (Error) {
    return null;
  }
}

function getTokenObject() {
    let tokenObject = {};
    if (currentUserSubject.value != null) {
        tokenObject = getDecodedAccessToken(currentUserSubject.value.accessToken);
    }
  return tokenObject;
}
