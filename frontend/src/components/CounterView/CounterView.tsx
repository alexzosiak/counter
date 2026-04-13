import useCounter from "../../store/useCounter";
import useView from '../../store/useView';
import CounterHystory from "../CounterHistory/ConterHistory";
import CounterAction from '../CounterAction/CounterAction';
import AppButton from "../AppButtom/AppButton";

import './CounterView.scss';

type Counts = {
    count: number
}

type ViewState = {
    showHistory: boolean;
    toggleHistory: () => void;
}

const CounterView = () => {
    const { count } = useCounter() as Counts;
    const { showHistory, toggleHistory } = useView() as ViewState;
    
    return (
        <section>
            <div className="card">
                <span className="card__count">{count}</span>
                <div className="card__wrapper">{<CounterAction/>}</div>
            </div>
            <AppButton onClick={() => toggleHistory()}>{showHistory ? 'close history' : 'open history'}</AppButton>
            
            {showHistory ? <CounterHystory/> : null}
        </section>
    );
};

export default CounterView;
