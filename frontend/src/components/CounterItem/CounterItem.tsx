import useCounter from '../hooks/useCounter';
import { FaTrash } from 'react-icons/fa';
import timeTransform from '../../util/time-transform/time-transform';

type Datas = {
    id: string;
    value: number;
    timestamp: string;
};

const CounterItem = () => {
    const { save, onDelete } = useCounter();

    const elements = save.map(({ id, value, timestamp }: Datas) => {
        const { day, month, year, hours, minutes, seconds } =
            timeTransform(timestamp);

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
                    onClick={() => onDelete(id)}
                />
            </li>
        );
    });

    const sortElements = elements.reverse();

    return sortElements;
};

export default CounterItem;
