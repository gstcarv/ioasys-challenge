import React, { forwardRef, useState } from 'react';
import Icon from '../Icon';
import { FieldContainer, FieldInput, IconContainer } from './styles';
import { Tooltip } from 'react-tippy';
import { useTheme } from 'styled-components';

function TextField({ error, icon, className, style, type, rightIcon, ...rest }, ref) {
    const [isUserPressingViewButton, setIsUserPressingViewButton] = useState(false);

    const theme = useTheme();

    const getFieldType = () => {
        if (type === 'password' && isUserPressingViewButton) {
            return 'text';
        }

        return type;
    };

    return (
        <FieldContainer className={className} style={style} hasError={!!error}>
            {icon && <IconContainer>{icon}</IconContainer>}

            <FieldInput maxLength={255} {...rest} type={getFieldType()} ref={ref} novalidate />

            {!!error && (
                <Tooltip title={error} position='top'>
                    <Icon.Warning color='red' size={25} data-testid='field-error-icon' />
                </Tooltip>
            )}

            {rightIcon}

            {type === 'password' && !error && (
                <div
                    onMouseDown={() => setIsUserPressingViewButton(true)}
                    onMouseUp={() => setIsUserPressingViewButton(false)}
                    style={{ cursor: 'pointer' }}
                    data-testid='password-toggle-button'
                >
                    {!isUserPressingViewButton ? (
                        <Icon.VisibilityOn
                            size={25}
                            color={theme.colors.charcoalGrey[400]}
                            data-testid='view-password-icon'
                        />
                    ) : (
                        <Icon.VisibilityOff
                            size={25}
                            color={theme.colors.charcoalGrey[400]}
                            data-testid='hide-password-icon'
                        />
                    )}
                </div>
            )}
        </FieldContainer>
    );
}

export default forwardRef(TextField);
