import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'sumanth-article-publishing',
        appId: '1:706459179395:web:3d9fdd4f34d739e290feb6',
        databaseURL:
          'https://sumanth-article-publishing-default-rtdb.asia-southeast1.firebasedatabase.app',
        storageBucket: 'sumanth-article-publishing.appspot.com',
        apiKey: 'AIzaSyC6mKMzf-iC-Y6Xbhrmlt_2Mb1V8_QTuLA',
        authDomain: 'sumanth-article-publishing.firebaseapp.com',
        messagingSenderId: '706459179395',
        measurementId: 'G-4Q37YPCB9T',
      })
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    // provideAppCheck(() => {
    //   // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
    //   const provider =
    //     new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
    //   return initializeAppCheck(undefined, {
    //     provider,
    //     isTokenAutoRefreshEnabled: true,
    //   });
    // }),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
