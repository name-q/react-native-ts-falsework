import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackNavigation } from '@/navigator/stack';
import { SafeAreaView } from 'react-native-safe-area-context'

import {msg} from '@/utils/index'
interface IProps {
    navigation: RootStackNavigation
}

function Home({ navigation }: IProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView>
                <Text>Home Screen</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: 'name-q' })} >
                    <Text style={{ marginTop: 10, color: 'blue' }}>Go to Details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AppDrawer')} >
                    <Text style={{ marginTop: 10, color: 'blue' }}>Go to Drawer</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => msg.emit('app:tip',{text:'message'})} >
                    <Text style={{ marginTop: 10, color: 'blue' }}>app:tip</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

export default memo(Home)