import useCounter from '../hooks/useCounter';
import { FaTrash } from "react-icons/fa";
import { timeTransform } from '../time-transform/time-transform';
import './save-counters.scss';

type Datas = {
    id: string,
    value: number,
    timestamp: string
}


const SaveCounters = () => {
    const {save, onDelete } = useCounter();

    const elements = save.map(({id, value, timestamp}: Datas)  => {
        
        const {day, month, year, hours, minutes, seconds} = timeTransform(timestamp);
        
        return (
            <li key={id} className='save__item'>  
                <div>
                    <span>{`time: ${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`}</span>
                </div> 
                <span className='save__text'>{value}</span>
                <FaTrash className='save__bin' id={id} onClick={() => onDelete(id)}/>         
            </li>
        )
    });
    
    return (
        <section className='save'>
            <ul className='save__list'>{elements}</ul>
        </section>
    )
}

export default SaveCounters;