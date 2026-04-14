import AppButton from "../AppButtom/AppButton";
import useCounter from "../../store/useCounter";
import useView from "../../store/useView";
import style from './CounterAction.module.scss';

type CounterActions = {
    plusCount: () => Promise<void>;
    minusCount: () => Promise<void>;
    randomCount: () => Promise<void>;
    resetCount: () => Promise<void>;
    onSaveCount: () => Promise<void>;
}

type ViewState = {
    showHistory: boolean;
    toggleHistory: () => void;
}

const CounterAction = () => {
    const { plusCount, minusCount, randomCount, resetCount, onSaveCount} = useCounter() as CounterActions;
    const { showHistory, toggleHistory } = useView() as ViewState;
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <AppButton onClick={plusCount}>plus</AppButton>
                <AppButton onClick={minusCount}>minus</AppButton>
                <AppButton onClick={randomCount}>random</AppButton>
                <AppButton onClick={resetCount}>reset</AppButton>
                <AppButton onClick={onSaveCount}>save</AppButton>
            </div> 
            <AppButton style={{width: '180px'}} onClick={() => toggleHistory()}>{showHistory ? 'close history' : 'open history'}</AppButton>
        </div>
    )
}

export default CounterAction;