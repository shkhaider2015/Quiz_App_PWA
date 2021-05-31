import { createContext, useState, useCallback } from 'react';

type ContextType = {
  increment: () => void;
  reset : () => void,
  counter: number;
};

export const CounterContext = createContext<ContextType>({
  increment: () => {},
  reset : () => {},
  counter: 0
});

const CounterContextProvider: React.FC = ({ children }) => {
    const [counter, setCounter] = useState(0);
  
    const increment =  useCallback(() => {
      setCounter((previousCounter) => previousCounter + 1);
    }, []);

    const reset = useCallback( () => {
      setCounter(0)
    }, [])
  
    return (
      <CounterContext.Provider value={{ counter, increment, reset }}>
        {children}
      </CounterContext.Provider>
    );
  };
  
  export {CounterContextProvider};