import useCounter from "../../store/useCounter";
import useView from '../../store/useView';
import CounterHystory from "../CounterHistory/ConterHistory";
import CounterAction from '../CounterAction/CounterAction';

type Counts = {
    count: number
}

type View = {
    showHistory: boolean
}

const CounterView = () => {
    const { count } = useCounter() as Counts;
    const { showHistory } = useView() as View;

    return (
        <section className="container">
            <div className="card">
                <span className="card__count">{count}</span>
                <div className="card__wrapper">{<CounterAction/>}</div>
            </div>
            {showHistory ? <CounterHystory/> : null}
        </section>
    );
};

export default CounterView;
