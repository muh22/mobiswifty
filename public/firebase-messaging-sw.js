// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCqU5hDfRjSfyd35M9xIdpT1qsJ_UtEjIg",
  authDomain: "agent-app-9ae1b.firebaseapp.com",
  projectId: "agent-app-9ae1b",
  storageBucket: "agent-app-9ae1b.appspot.com",
  messagingSenderId: "623322164529",
  appId: "1:623322164529:web:e2c0752b9a4418942cd410",
  measurementId: "G-XSCNH7ELCG"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,notificationOptions);
});
