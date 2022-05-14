import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { firebaseInit } from '@gcto/firebase-hooks/lib';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' });

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

export { api };
