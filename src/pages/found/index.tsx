import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackNavigation } from '@/navigator/stack';
import { Route } from '@react-navigation/native';

interface IProps {
    navigation: RootStackNavigation;
    route: Route<'Found'>
}

function Found(props: IProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Found Screen</Text>
        </View>
    );
}

export default memo(Found)