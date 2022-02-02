import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootDrawerNavigation } from '@/navigator/drawer'
import { DrawerActions, Route } from '@react-navigation/native';

interface IProps {
    navigation: RootDrawerNavigation;
    route: Route<'Drawer'>
}

function Drawer(props: IProps) {
    let { navigation } = props
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Drawer Page</Text>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} >
                <Text style={{ marginTop: 10, color: 'blue' }}>open Drawer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                <Text style={{ marginTop: 10, color: 'blue' }}>toggle Drawer</Text>
            </TouchableOpacity>
        </View>
    );
}

export default memo(Drawer)