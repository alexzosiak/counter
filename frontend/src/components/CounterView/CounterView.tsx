import useCounter from "../../store/useCounter";
import useView from '../../store/useView';
import CounterHystory from "../CounterHistory/ConterHistory";
import CounterAction from '../CounterAction/CounterAction';

import './CounterView.scss';

type Counts = {
    count: number
}

type ViewState = {
    showHistory: boolean;
}

const CounterView = () => {
    const { count } = useCounter() as Counts;
    const { showHistory } = useView() as ViewState;
    
    return (
        <section>
            <div className="grid"> 
                <div className="card">
                <span className="card__count">{count}</span>
                <div className="card__wrapper">{<CounterAction/>}</div>
            </div>
               {showHistory ? <CounterHystory/> : null}
            </div>
                    
        </section> 

        
    );
};

export default CounterView;
