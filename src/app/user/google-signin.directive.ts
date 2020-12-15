import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import auth from 'firebase/app';
@Directive({
  selector: '[appGoogleSignin]',
})
export class GoogleSigninDirective {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new auth.auth.GoogleAuthProvider());
  }
}
