import { useEffect } from 'react';
import useCounter from './components/hooks/useCounter';
import Button from './components/buttom/button';
import { initUserId } from './userID';
import SaveCounters from './components/saveCounters/save-counters';

import './App.css';

function App() {
    const { count, plusCount, minusCount, randomCounter, reset, initCounter, initUserIdState, onSave, initSave } = useCounter();

    useEffect(() => {
        const init = async () => {
            const id = await initUserId();
            initUserIdState(id);
            initCounter(id);
            initSave(id)
        };

        init();
        
    }, []);

    
  
    const dataButton = [
        { name: 'Plus', f: plusCount },
        { name: 'Minus', f: minusCount },
        { name: 'Random', f: randomCounter },
        { name: 'Reset', f: reset },
        { name: 'Save', f: onSave },
    ];

    const viewButtons = dataButton.map(({name, f}, index) => {
        return <Button text={name} event={f} key={index}></Button>;
    });

    return (
        <>
            <h1>{count}</h1>
            <div className="btn__wrapper">{viewButtons}</div>
            <SaveCounters/>
        </>
    );
}

export default App;
