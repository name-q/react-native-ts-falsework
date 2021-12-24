import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import HomePage from '@/pages/home'
import Listen from '@/pages/listen'
import Found from '@/pages/found'
import Account from '@/pages/account'

export type MaterialTopTabsParamList = {
    Home: undefined;
    Listen: undefined;
    Found: undefined;
    Account: undefined;
}
const MaterialTopTabs = createMaterialTopTabNavigator<MaterialTopTabsParamList>();


function AppMaterialTopTabs() {
    return (
        <MaterialTopTabs.Navigator
            screenOptions={{
                // 懒加载
                lazy: true,
                // tabItem滑动
                tabBarScrollEnabled: true,
                // tabItem样式
                tabBarItemStyle: {
                    width: 80
                },
                tabBarIndicatorStyle: {
                    height: 4,
                    width: 20,
                    marginLeft: 30,
                    borderRadius: 2,
                    backgroundColor: '#f8645c'
                },
                tabBarActiveTintColor: '#f8645c',
                tabBarInactiveTintColor: '#333',
            }}
        >
            <MaterialTopTabs.Screen
                name="Home"
                component={HomePage}
                options={{
                    title: '首页',
                }}
            />
            <MaterialTopTabs.Screen
                name="Listen"
                component={Listen}
                options={{
                    title: '我听',
                }}
            />
            <MaterialTopTabs.Screen
                name="Found"
                component={Found}
                options={{
                    title: '发现',
                }}
            />
            <MaterialTopTabs.Screen
                name="Account"
                component={Account}
                options={{
                    title: '我的',
                }}
            />
        </MaterialTopTabs.Navigator>
    );
}

export default AppMaterialTopTabs;


/* 5.x - 6.x差异统计 */
/*
    额外引入了react-native-pager-view
    TabBarOptions  -> screenOptions
    scrollEnabled  -> tabBarScrollEnabled
    tabStyle       -> tabBarItemStyle
    indicatorStyle -> tabBarIndicatorStyle
    lazy           -> 懒加载下潜至screenOptions中
*/