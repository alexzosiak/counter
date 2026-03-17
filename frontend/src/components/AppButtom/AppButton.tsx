import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import './AppButton.scss';

type buttonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>>
 

const AppButton = ({ children, className = '', type = 'button', ...props} : buttonProps): JSX.Element => {
    return (
        <button 
            type={type}
            className={`button ${className}`.trim()}
            {...props}
        >
            {children}
        </button>
    )
}

export default AppButton;