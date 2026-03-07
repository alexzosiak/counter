import CounterItem from '../CounterItem/CounterItem';
import './save-counters.scss';

const CounterHystory = () => {
    
    return (
        <section className="save">
            <h3 className="save__title">history</h3>
            <ul className="save__list">{<CounterItem/>}</ul>
        </section>
    );
};

export default CounterHystory;
