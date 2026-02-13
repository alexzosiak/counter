import './button.scss';

type buttons = {
    text: string;
    // number?: number;
    event: () => number;
} 

const Button = (props: buttons): JSX.Element => {
    return <button className='button' onClick={() => {props.event()}}>{props.text}</button>
}

export default Button;