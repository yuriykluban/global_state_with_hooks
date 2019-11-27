import React, { FC, useEffect } from 'react';
import { useGlobalState } from './utils/stateManager';

const Some: FC<{}> = () => {
    const value = useGlobalState('user');

    useEffect(() => {
        console.log('SOME, name: ', value.name);
    }, [value.name]);

    return (
        <>
        </>
    )
}

export default Some;