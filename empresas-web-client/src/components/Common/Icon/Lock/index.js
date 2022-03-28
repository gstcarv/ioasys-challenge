import React from 'react';
import lockIcon from '../../../../assets/icons/ic-lock.png';

function LockIcon(props) {
    return <img src={lockIcon} alt='Senha' {...props} />;
}

export default LockIcon;
