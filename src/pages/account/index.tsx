import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { RootStackNavigation } from '@/navigator/stack';
import { Route } from '@react-navigation/native';

interface IProps {
    navigation: RootStackNavigation;
    route: Route<'Account'>
}

function Account(props: IProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Account Screen</Text>
        </View>
    );
}

export default memo(Account)