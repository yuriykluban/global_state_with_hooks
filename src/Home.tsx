import { Text, TextInput, Dimensions } from 'react-native';
import React, { FC, useEffect, useCallback } from 'react';
import { useGlobalState, useDispatch } from './utils/stateManager';

const Home: FC<{}> = () => {

    const userInfo = useGlobalState('user');
    const dispatch = useDispatch();
    const handleUserInfo = useCallback((name: string) => dispatch({ type: 'CHANGE_USER_INFO', name }), [dispatch]);
    const handleUserAge = useCallback((age: string) => dispatch({ type: 'CHANGE_USER_AGE', age }), [dispatch]);

    useEffect(() => {
        console.log('HOME, name: ', userInfo);
    }, [userInfo]);

    return (
        <>
            <TextInput
                style={{
                    width: Dimensions.get('window').width - 40,
                    height: 40,
                    paddingHorizontal: 24,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 8,
                    marginLeft: 20,
                    marginTop: 100
                }}
                onChangeText={(text: string) => handleUserInfo(text)}
                placeholder={'Enter your name..'}
                value={userInfo.name}
            />
            <TextInput
                style={{
                    width: Dimensions.get('window').width - 40,
                    height: 40,
                    paddingHorizontal: 24,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 8,
                    marginLeft: 20,
                    marginTop: 100
                }}
                onChangeText={(text: string) => handleUserAge(text)}
                placeholder={'Enter your name..'}
                value={`${userInfo.age}`}
            />
        </>
    )
}

export default Home;