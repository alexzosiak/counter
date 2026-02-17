import { useEffect } from 'react';
import useCounter from './components/hooks/useCounter';
import Button from './components/buttom/button';
import { initUserId } from './userID';
import './App.css';


function App() {
    const {count, plusCount, minusCount, randomCounter, reset, fetchCounter } = useCounter();

    useEffect(() => {
        initUserId();
        fetchCounter();
    }, []);

    const dataButton = [
        { name: 'Plus', f: plusCount },
        { name: 'Minus', f: minusCount },
        { name: 'Random', f: randomCounter },
        { name: 'Reset', f: reset },
    ];

    const viewButtons = dataButton.map((item, index) => {
        return <Button text={item.name} event={item.f} key={index}></Button>;
    })

    return (
        <>  
            <h1>{count}</h1>
            <div className='btn__wrapper'>
                {viewButtons}
            </div>
        </>
    );
}

export default App;
