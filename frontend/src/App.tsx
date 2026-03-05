import { useEffect } from 'react';
import useCounter from './components/hooks/useCounter';
import Button from './components/buttom/button';
import { initUserId } from './util/user-id/userID';
import SaveCounters from './components/saveCounters/save-counters';
import Header from './components/header/header';


import './app.scss';

function App() {
    const { count, plusCount, minusCount, randomCounter, reset, initCounter, initUserIdState, onSave, initSave, history } = useCounter();

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
            <Header/>
                <div className='container'>
                    <section className='card'>
                        <span className='card__count'>{count}</span>
                        <div className="card__wrapper">{viewButtons}</div>
                    </section>
                    {history ? <SaveCounters/> : null}
                </div>
        </>
    );
}

export default App;
