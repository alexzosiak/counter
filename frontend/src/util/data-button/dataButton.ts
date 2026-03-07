import useCounter from "../../components/hooks/useCounter";

const createDataButtons = () => {
    const {plusCount, minusCount, randomCounter, reset, onSave} = useCounter();

    const dataButton = [
        { name: 'Plus', f: plusCount },
        { name: 'Minus', f: minusCount },
        { name: 'Random', f: randomCounter },
        { name: 'Reset', f: reset },
        { name: 'Save', f: onSave },
    ];
    
    return dataButton;
}


export default createDataButtons;
