import { useEffect } from 'react';
import useCounter from './components/hooks/useCounter';
import Button from './components/buttom/button';
import { initUserId } from './userID';
import SaveCounters from './components/saveCounters/save-counters';

import './App.css';

function App() {
    const {save, count, plusCount, minusCount, randomCounter, reset, fetchCounter, initUserIdState, onSave, fetchSave } = useCounter();

    useEffect(() => {
        const init = async () => {
            const id = await initUserId();
            initUserIdState(id);
            fetchCounter(id);
            fetchSave(id)
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
