import React from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
import { RootStackParamList } from './stack';
import { RouteProp, TabNavigationState } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import HomePage from '@/pages/home'
import Listen from '@/pages/listen'
import Found from '@/pages/found'
import Account from '@/pages/account'

export type BottomTabsParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}
const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();

export type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
    state?: TabNavigationState<BottomTabsParamList>;
}


function AppButtomTabs() {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <BottomTabs.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: '首页',
                    tabBarIcon: ({ color, size }) => (<AntDesign name='smileo' size={size} style={{ color }} />)
                }}
            />
            <BottomTabs.Screen
                name="Listen"
                component={Listen}
                options={{
                    title: '我听',
                    tabBarIcon: ({ color, size }) => (<AntDesign name='customerservice' size={size} style={{ color }} />)
                }}
            />
            <BottomTabs.Screen
                name="Found"
                component={Found}
                options={{
                    title: '发现',
                    tabBarIcon: ({ color, size }) => (<AntDesign name='staro' size={size} style={{ color }} />)
                }}
            />
            <BottomTabs.Screen
                name="Account"
                component={Account}
                options={{
                    title: '我的',
                    tabBarIcon: ({ color, size }) => (<AntDesign name='rest' size={size} style={{ color }} />)
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default AppButtomTabs;


/* 5.x - 6.x差异统计 */
/*
    官方推荐包 @react-navigation/native-stack是原生封装不兼容
    手式库 headerStyleInterpolator 造成iOS与安卓滑动风格不统一
    @react-navigation/stack     是javaScript实现但高度可定制 
    为了风格统一使用后者

    显隐     headerMode:"none" => headerShown: false
    标题     tabBarLabel => title
*/