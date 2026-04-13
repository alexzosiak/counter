import { useEffect } from 'react';
import useCounter from './store/useCounter';
import { initUserId } from './util/user-id/userID';
import Header from './components/AppHeader/AppHeader';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import About from './pages/AboutPage';
import NotFound from './pages/NotFound';



type useCounterType = {
    initCount: (id: string | null) => void;
    initUserIdState: (id: string | null) => void;
    initSaveCount: (id: string | null) => void;
}

function App() {
    const { initCount, initUserIdState, initSaveCount } = useCounter() as useCounterType;

    useEffect(() => {
        const init = async () => {
            const id = await initUserId();
            initUserIdState(id.userID);
            initCount(id.userID);
            initSaveCount(id.userID);
        };

        init();
        
    }, []);

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>     
        </BrowserRouter>
    );
}

export default App;
