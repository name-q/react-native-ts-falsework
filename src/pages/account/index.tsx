import React, { memo, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { RootStackNavigation } from '@/navigator/stack';
import { Route } from '@react-navigation/native';

import { connect } from 'react-redux'
import { registerReducer } from '@/redux/store';
import accountMain from './redux-item/reducers/main';
import { store2Props } from './redux-item/selectors';
import actions from './redux-item/actions';
import { reduxIProps } from './redux-item/types'
registerReducer({ accountMain });

interface IProps extends reduxIProps {
    navigation: RootStackNavigation;
    route: Route<'Account'>
}

function Account(props: IProps) {

    let {
        actions: { action, init, clean },
        main,
        navigation
    } = props;

    useEffect(() => {
        console.log('init')
        init()
        return () => { clean(); console.log('clean') }
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Account Screen</Text>
            <TextInput
                maxLength={16}
                style={styles.input}
                keyboardType="ascii-capable"
                placeholder="redux test input"
                autoCapitalize="none"
                placeholderTextColor="#999"
                underlineColorAndroid="transparent"
                onChangeText={val => action.commonChange('main.testText', val)}
                returnKeyType="done"
            />
            <TouchableOpacity onPress={() => navigation.replace('Detail',{id:'account'})} >
                <Text>{main.testText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 14,
        paddingVertical: 10,
        marginVertical: 10,
        borderBottomWidth: 1
    },
});


export default memo(connect(store2Props, actions)(Account))