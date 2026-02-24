
import useCounter from '../hooks/useCounter';

type Data = {
    id: string,
    value: number
}

const Text = ({id, value}: Data): JSX.elements => {
    return <li key={id}>{value}</li>
}

const SaveCounters = () => {
    const { save, fetchSave, id } = useCounter();

    
    const elements = save.map((item, i) => {
            return <Text key={item.id} value={item.value}/>
    }).reverse();

        
    

    return (
        <ul>{elements}</ul>
    )
}

export default SaveCounters;