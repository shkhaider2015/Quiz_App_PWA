import { createContext, useState, useCallback } from 'react';

type ContextType = {
  increment: () => void;
  counter: number;
};

export const CounterContext = createContext<ContextType>({
  increment: () => {},
  counter: 0
});

const CounterContextProvider: React.FC = ({ children }) => {
    const [counter, setCounter] = useState(0);
  
    const increment = useCallback(() => {
      setCounter((previousCounter) => previousCounter + 1);
    }, []);
  
    return (
      <CounterContext.Provider value={{ counter, increment }}>
        {children}
      </CounterContext.Provider>
    );
  };
  
  export {CounterContextProvider};