import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// we need config
const config = {
  apiKey: 'AIzaSyB4uJNltViVo5YEhdzqRUGxueqMSUMme24',
  authDomain: 'netflix-clone-f30d2.firebaseapp.com',
  projectId: 'netflix-clone-f30d2',
  storageBucket: 'netflix-clone-f30d2.appspot.com',
  messagingSenderId: '451604983121',
  appId: '1:451604983121:web:5902211f516ee6f52ef770',
  measurementId: 'G-NNWZTXXPRY',
};

const firebase = Firebase.initializeApp(config);

// eslint-disable-next-line import/prefer-default-export
export { firebase };
