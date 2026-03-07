import useCounter from "../hooks/useCounter";
import useView from '../hooks/useView';
import CounterHystory from "../CounterHistory/ConterHistory";
import CounterAction from '../CounterAction/CounterAction';

const CounterView = () => {
    const { count } = useCounter();
    const { showHistory } = useView();

 
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
