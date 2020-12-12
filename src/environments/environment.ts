// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase';

export const environment = {
  production: false,
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebase: {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: 'AIzaSyAKlEX5a8PQaadYNSrohqfl33O37Kjkv1Y',
    authDomain: 'angular-voxer.firebaseapp.com',
    databaseURL: 'https://angular-voxer.firebaseio.com',
    projectId: 'angular-voxer',
    storageBucket: 'angular-voxer.appspot.com',
    messagingSenderId: '122050526979',
    appId: '1:122050526979:web:529304dce5ffca7a',
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
