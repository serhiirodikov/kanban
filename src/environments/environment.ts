// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase';

export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: 'AIzaSyCOnGX56qBJtGcP-pBq22gaukfYfQ45eSM',
    authDomain: 'todos-nulp.firebaseapp.com',
    projectId: 'todos-nulp',
    storageBucket: 'todos-nulp.appspot.com',
    messagingSenderId: '995686128913',
    appId: '1:995686128913:web:e645f6982666e60ab200b0',
    measurementId: 'G-9BKG7GH61Y',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
