import AppButton from "../AppButtom/AppButton";
import useCounter from "../../store/useCounter";

type CounterActions = {
    plusCount: () => Promise<void>;
    minusCount: () => Promise<void>;
    randomCount: () => Promise<void>;
    resetCount: () => Promise<void>;
    onSaveCount: () => Promise<void>;
}

const CounterAction = () => {
    const { plusCount, minusCount, randomCount, resetCount, onSaveCount} = useCounter() as CounterActions;

    return (
        <>
            <AppButton onClick={plusCount}>plus</AppButton>
            <AppButton onClick={minusCount}>minus</AppButton>
            <AppButton onClick={randomCount}>random</AppButton>
            <AppButton onClick={resetCount}>reset</AppButton>
            <AppButton onClick={onSaveCount}>save</AppButton>
        </>
    )
}

export default CounterAction;