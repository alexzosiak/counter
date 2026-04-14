import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import style from './AppButton.module.scss';
type buttonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>

const AppButton = ({ children, type = 'button', ...props} : buttonProps): JSX.Element => {
    return (
        <button 
            type={type}
            className={style.button}
            {...props}
        >
            {children}
        </button>
    )
}

export default AppButton;