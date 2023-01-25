import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
const firebaseConfig = {

  apiKey: "AIzaSyAlo3JiPzv31aSo6_nAtOZlPlrtJErmvEA",
  authDomain: "merchant-app-66904.firebaseapp.com",
  projectId: "merchant-app-66904",
  storageBucket: "merchant-app-66904.appspot.com",
  messagingSenderId: "1066029396109",
  appId: "1:1066029396109:web:47339b8676961087acf2c4",
  measurementId: "G-MJ7L12R10J"

  };
  

initializeApp(firebaseConfig);

const messaging = getMessaging();



export const requestForToken = () => {
  return getToken(messaging, { vapidKey: "BEEpOXOcHDwglump_EZpnQ0cS9Isgrsp_CRg6z5Lf4XAOe3EDBAU1Mx8zP-_mAx3ehzlVlTKAeSsglra0vUkOMU"})
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });