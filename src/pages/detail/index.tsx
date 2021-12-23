import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList, RootStackNavigation } from '@/navigator/stack';
import { RouteProp } from '@react-navigation/native';

interface IProps {
    route: RouteProp<RootStackParamList, 'Detail'>,
    navigation: RootStackNavigation
}

function Detail({ route, navigation }: IProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.id}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')} >
                <Text style={{ margin: 10, color: 'blue' }}>Go to Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={{ margin: 10, color: 'blue' }}>Go back</Text>
            </TouchableOpacity>
        </View >
    );
}

export default memo(Detail)