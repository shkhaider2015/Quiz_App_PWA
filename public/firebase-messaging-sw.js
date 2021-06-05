// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.

// importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//   apiKey : "AIzaSyCzQ0LP3j5Kwhe3-G_n22eAbdp-hdbmwO8",
//   authDomain : "pwapushnotifications-fb756.firebaseapp.com",
//   projectId : "pwapushnotifications-fb756",
//   storageBucket : "pwapushnotifications-fb756.appspot.com",
//   messagingSenderId : "251076410633",
//   appId : "1:251076410633:web:6b8d6499ac146adf95e7d8",
//   measurementId : "G-KWGRHVSSSX"
//   });
  
  // Retrieve an instance of Firebase Messaging so that it can handle background
  // messages.
  // const messaging = firebase.messaging();

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.onBackgroundMessage` handler.
// this.window.messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // ...
// });













// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyCzQ0LP3j5Kwhe3-G_n22eAbdp-hdbmwO8",
    authDomain: "pwapushnotifications-fb756.firebaseapp.com",
    projectId: "pwapushnotifications-fb756",
    storageBucket: "pwapushnotifications-fb756.appspot.com",
    messagingSenderId: "251076410633",
    appId: "1:251076410633:web:6b8d6499ac146adf95e7d8",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});