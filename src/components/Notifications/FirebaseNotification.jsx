import React, {useState,useRef, useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import NotificationSound from "../../images/audio/notificationsound.wav";
import { requestForToken, onMessageListener } from './firebase';

const FireNotification = () => {
  const [notification, setNotification] = useState({title: '', body: '',iconUrl:'',actionUrl:''});
  const notify = () =>  toast(<ToastDisplay/>);
  const audioPlayer = useRef(null);
  function ToastDisplay() {
   
    return (
      <div>
        <img src={notification?.iconUrl}/>
        <p><b>{notification?.title}</b></p>
        <p>{notification?.body}</p>
        <p><a href="#"><u>Check Receipt</u></a></p>
       
      </div>
    );
  };

  useEffect(() => {
    if (notification?.title ){
     notify()
    }
  }, [notification])

  requestForToken();

  onMessageListener()
    .then((payload) => {
      setNotification({title: payload?.notification?.title, body: payload?.notification?.body,iconUrl: payload?.notification?.icon,actionUrl: payload?.notification?.click_action});   
      audioPlayer.current.play();  
    })
    .catch((err) => console.log('failed: ', err));

  return (
    <>
    <Toaster/>
     <audio ref={audioPlayer} src={NotificationSound} />
    </>
     
  )
}

export default FireNotification