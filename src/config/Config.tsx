import firebase from 'firebase';
import 'firebase/messaging'

interface configType {
  apiKey : string|undefined,
  authDomain : string|undefined,
  projectId : string|undefined,
  storageBucket : string|undefined,
  messagingSenderId : string|undefined,
  appId : string|undefined,
}

const firebaseConfig: configType = {
  apiKey: "AIzaSyCzQ0LP3j5Kwhe3-G_n22eAbdp-hdbmwO8",
  authDomain: "pwapushnotifications-fb756.firebaseapp.com",
  projectId: "pwapushnotifications-fb756",
  storageBucket: "pwapushnotifications-fb756.appspot.com",
  messagingSenderId: "251076410633",
  appId: "1:251076410633:web:6b8d6499ac146adf95e7d8",
  };



  
  
  
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  const vapidKey:string = "BGqUIv8vXid5SEUF5LN4CPfojML7LCZJpEqsFXowokcB0c05ekjucVbT8KFxWIuKbMit4IzQVk7Z77vMKk4JpJw"

  export const getToken = (setTokenFound:(x:boolean) => void) => {
    return messaging.getToken({vapidKey: vapidKey}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }




export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});

  
export {firebase}  