import './App.css';
import { Quizcard } from './Components/Quizcard';
import { CounterContextProvider } from './Context/ContextAPI';

function App() {
  
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center', background: 'rgb(58,43,104)',
      backgroundImage: 'linear-gradient(53deg, rgba(58,43,104,1) 0%, rgba(35,25,65,1) 47%, rgba(8,84,99,1) 100%)',
    }} >
      
        <span style={{ color : 'whitesmoke', fontSize : '6vh', paddingBottom : '3vh' }} >Quiz App with Typescript</span>
          
        <CounterContextProvider>
          <Quizcard />
        </CounterContextProvider>


    </div>
  );
}

export default App;
