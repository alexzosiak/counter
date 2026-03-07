import { useEffect } from 'react';
import useCounter from './components/hooks/useCounter';
import { initUserId } from './util/user-id/userID';
import Header from './components/AppHeader/AppHeader';
import CounterView from './components/CounterView/CounterView';


import './app.scss';

function App() {
    const { initCounter, initUserIdState, initSave } = useCounter();

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
            <CounterView/>
        </>
    );
}

export default App;
