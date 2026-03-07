import { useEffect } from 'react';
import useCounter from './components/hooks/useCounter';
import { initUserId } from './util/user-id/userID';
import Header from './components/AppHeader/AppHeader';
import CounterView from './components/CounterView/CounterView';


import './app.scss';

function App() {
    const { count, plusCount, minusCount, randomCounter, reset, initCounter, initUserIdState, onSave, initSave, history } = useCounter();

    useEffect(() => {
        const init = async () => {
            const id = await initUserId();
            initUserIdState(id.userID);
            initCounter(id.userID);
            initSave(id.userID);
        };

        init();
        
    }, []);



    return (
        <>
            <Header/>
                {/* <div className='container'>
                    <section className='card'>
                        <span className='card__count'>{count}</span>
                        <div className="card__wrapper">{viewButtons}</div>
                    </section>
                    {history ? <SaveCounters/> : null}
                </div> */}
                <CounterView/>
        </>
    );
}

export default App;
