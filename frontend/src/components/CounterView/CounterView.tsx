import useCounter from "../hooks/useCounter";
import useView from '../hooks/useView';
import createDataButtons from "../../util/data-button/dataButton";
import Button from "../buttom/button";
import SaveCounters from '../saveCounters/save-counters';

const CounterView = () => {
    const { count } = useCounter();
    const { showHistory } = useView();

    const dataButton = createDataButtons(); 

    const viewButtons = dataButton.map(({name, f}, index) => {
        return <Button text={name} event={f} key={index}></Button>;
    });

    return (
        <section className="container">
            <div className="card">
                <span className="card__count">{count}</span>
                <div className="card__wrapper">{viewButtons}</div>
            </div>
            {showHistory ? <SaveCounters/> : null}
        </section>
    );
};

export default CounterView;
