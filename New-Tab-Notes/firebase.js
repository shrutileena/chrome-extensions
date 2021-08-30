//import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBvIVOxutkOEsMFIWWxGM3BdXGTQVEwRrM",
    authDomain: "new-tab-notes-chrome-ext.firebaseapp.com",
    projectId: "new-tab-notes-chrome-ext",
    storageBucket: "new-tab-notes-chrome-ext.appspot.com",
    messagingSenderId: "210282898298",
    appId: "1:210282898298:web:36760fc9758e93e67c6cc3"
  };
 
firebase.initializeApp(firebaseConfig);

console.log(firebase);