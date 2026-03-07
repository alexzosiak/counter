import Button from "../buttom/button";
import createDataButtons from "../../util/data-button/dataButton";

const CounterAction = () => {

    const dataButton = createDataButtons(); 
    
    const viewButtons = dataButton.map(({name, f}, index) => {
        return <Button text={name} event={f} key={index}></Button>;
    });

    return (
        <>
            {viewButtons}
        </>
    )
}

export default CounterAction;