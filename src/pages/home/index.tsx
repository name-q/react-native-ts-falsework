import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackNavigation } from '@/navigator/stack';


interface IProps {
    navigation: RootStackNavigation
}

function Home({ navigation }: IProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: 'name-q' })} >
                <Text style={{ margin: 10, color: 'blue' }}>Go to Details</Text>
            </TouchableOpacity>
        </View>
    );
}

export default memo(Home)