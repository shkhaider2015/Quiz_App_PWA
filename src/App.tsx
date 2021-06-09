import React from 'react'
import './App.css';
import { Toast } from 'react-bootstrap';
import { Quizcard } from './Components/Quizcard';
import { CounterContextProvider } from './Context/ContextAPI';
import { getToken, onMessageListener } from "./config/Config";


function App() {

  const [isPush, setIsPush] = React.useState<boolean>(false);
  const [notification, setNotification] = React.useState({ title: 'Default Title', body: 'Default Body' });
  const [show, setShow] = React.useState<boolean>(false);
  
  getToken(setIsPush);

  
  onMessageListener().then((payload: any) => {
    setShow(true);
    setNotification({ title: payload.notification.title, body: payload.notification.body })
    console.log("This is Payload in OnMessageListner() : ", payload);
  }).catch(err => console.log('failed: ', err));


  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center', background: 'rgb(58,43,104)',
      backgroundImage: 'linear-gradient(53deg, rgba(58,43,104,1) 0%, rgba(35,25,65,1) 47%, rgba(8,84,99,1) 100%)',
    }} >
      {isPush ? console.log("IsPush") : null}
      <Toast onClose={() => setShow(false)} show={show} delay={60000} autohide animation style={{
            position: 'absolute',
            top: 20,
            right: 20,
            minWidth: 200
          }}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{notification.title}</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>{notification.body}</Toast.Body>
          </Toast>
      
        <span className="largeFont"  >Quiz App with Typescript</span>
          
        <CounterContextProvider>
          <Quizcard />
        </CounterContextProvider>


    </div>
  );
}

export default App;
