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
        apiKey: 'AIzaSyBmj0OCb24e7stqrxqldcoodGnIFZkP-1M',
        authDomain: 'my-portfolio-fb7d7.firebaseapp.com',
        projectId: 'my-portfolio-fb7d7',
        storageBucket: 'my-portfolio-fb7d7.appspot.com',
        messagingSenderId: '832549293439',
        appId: '1:832549293439:web:62f969174df2e8bb509e4a',
        measurementId: 'G-8LXJE7KEFZ',
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
