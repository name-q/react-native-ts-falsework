import React, { useMemo } from 'react';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
import HomePage from '@/pages/home'
import Listen from '@/pages/listen'
import Found from '@/pages/found'
import Account from '@/pages/account'
import { RootStackNavigation, RootStackParamList } from './stack';
import { RouteProp, TabNavigationState } from '@react-navigation/native';

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
                options={{ title: '首页' }}
            />
            <BottomTabs.Screen
                name="Listen"
                component={Listen}
                options={{ title: '我听' }}
            />
            <BottomTabs.Screen
                name="Found"
                component={Found}
                options={{ title: '发现' }}
            />
            <BottomTabs.Screen
                name="Account"
                component={Account}
                options={{ title: '我的' }}
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