import useCounter from '../../store/useCounter';
import { FaTrash } from 'react-icons/fa';
import timeTransform from '../../util/time-transform/time-transform';

type Datas = {
    id: string;
    value: number;
    timestamp: string;
};

type StateItem = {
    save: Datas[];
    onDeleteCount: (id: string) => void;
}


const CounterItem = () => {
    const { save, onDeleteCount } = useCounter() as StateItem;
    
    if (save.length === 0) return <div>This user <span style={{color: 'red'}}>does not</span> have any history yet</div>;

    const elements = save?.map(({ id, value, timestamp }: Datas) => {
        const { day, month, year, hours, minutes, seconds } = timeTransform(timestamp);

        return (
            <li key={id} className="save__item">
                <div className="save__item-wrapper">
                    <span className="save__time-title">it has been saved:</span>
                    <span className="save__time">{`${day}/${month}/${year}`}</span>
                    <span className="save__time">{`time: ${hours}:${minutes}:${seconds}`}</span>
                </div>
                <span className="save__text">{value}</span>
                <FaTrash
                    className="save__bin"
                    id={id}
                    onClick={() => onDeleteCount(id)}
                />
            </li>
        );
    });

    const sortElements = elements;

    return sortElements;
};

export default CounterItem;
