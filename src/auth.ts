import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBgV6k9SicGfL2nH9VI78cE4NAYxX0FVkM',
  authDomain: 'koimbi-f5e3a.firebaseapp.com',
  projectId: 'koimbi-f5e3a',
  storageBucket: 'koimbi-f5e3a.appspot.com',
  messagingSenderId: '163854662774',
  appId: '1:163854662774:web:554a7bbee8695892753357',
  measurementId: 'G-ZXYGPZE31H'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const googleAPI = 'AIzaSyDbuVBC5I-97jCizmKpK2MIwQmiD5sUh2E';
