import useCounter from '../hooks/useCounter';
import { FaTrash } from "react-icons/fa";
import './save-counters.scss';

type Data = {
    id: string,
    value: number,
}


const SaveCounters = () => {
    const {save, onDelete } = useCounter();

    const elements = save.map(({id, value}: Data)  => {
        return (
            <li key={id} className='save__item'>             
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