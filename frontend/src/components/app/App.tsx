import { useEffect, useState } from 'react';
import useCounter from '../hooks/useCounter';
import Button from '../buttom/button';
import { initUserId } from '../../util/user-id/userID';
import SaveCounters from '../saveCounters/save-counters';
import Header from '../header/header';



import './app.scss';

function App() {
    const { count, plusCount, minusCount, randomCounter, reset, initCounter, initUserIdState, onSave, initSave } = useCounter();
    const [historyOn, setHistory] = useState(false);

    useEffect(() => {
        const init = async () => {
            const id = await initUserId();
            initUserIdState(id);
            initCounter(id);
            initSave(id)
        };

        init();
        
    }, []);

    function chengHistory() {
        if (historyOn) {
            setHistory(false);
        } else {
            setHistory(true);
        }
    }

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
            <Header historyOn={historyOn} chengHistory={chengHistory}/>
                <div className='container'>
                    <section className='card'>
                        <span className='card__count'>{count}</span>
                        <div className="card__wrapper">{viewButtons}</div>
                    </section>
                    {historyOn ? <SaveCounters/> : null}
                </div>
        </>
    );
}

export default App;
