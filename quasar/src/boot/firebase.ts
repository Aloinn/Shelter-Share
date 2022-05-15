import { boot } from 'quasar/wrappers';
import { firebaseInit } from '@gcto/firebase-hooks/lib';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Observer, useSWRV } from '@gcto/swrv-hooks/lib';

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

export default boot(({ app }) => {
  app.use(() => {
    firebaseInit({
      apiKey: 'AIzaSyDW1iNg2N0btpRhMYwZwxU5OQhm67WNkqg',
      authDomain: 'homeless-help-867a4.firebaseapp.com',
      projectId: 'homeless-help-867a4',
      storageBucket: 'homeless-help-867a4.appspot.com',
      messagingSenderId: '712183965919',
      appId: '1:712183965919:web:68ac7f17765e53e871616a',
    });
  });
});

export function getAuthStateChangeObservable() {
  return (observer: Observer<firebase.User | null, firebase.auth.Error>) =>
    firebase.auth().onIdTokenChanged(observer.next, observer.error);
}

export function useFirebaseUser() {
  return useSWRV('', getAuthStateChangeObservable);
}
