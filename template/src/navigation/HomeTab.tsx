import {getIconComponent} from '@assets/icon';
import {getSize} from '@base/common/responsive';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '@screens/auth';
import Font from '@theme/Font';
import React from 'react';
import {StyleSheet} from 'react-native';
import {getBottomSpace, isIphoneX} from 'react-native-iphone-x-helper';
import {
  COURSE_SCREEN,
  DEMO_SCREEN,
  MENU_SCREEN,
  NOTIFY_SCREEN,
  TOP_RANK_SCREEN,
} from './screen';

const Icon = getIconComponent('demo');

const HomeTab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === DEMO_SCREEN) {
            iconName = 'Vector-3';
          } else if (route.name === COURSE_SCREEN) {
            iconName = 'Vector-4';
          } else if (route.name === TOP_RANK_SCREEN) {
            iconName = 'Group-1';
          } else if (route.name === NOTIFY_SCREEN) {
            iconName = 'Group-481';
          } else {
            iconName = 'Group-482';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? '#FA9D1A' : '#C4C4C4'}
              size={size}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: '#FA9D1A',
        tabBarInactiveTintColor: '#C4C4C4',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}>
      <HomeTab.Screen name={DEMO_SCREEN} component={LoginScreen} />
      <HomeTab.Screen name={COURSE_SCREEN} component={LoginScreen} />
      <HomeTab.Screen name={TOP_RANK_SCREEN} component={LoginScreen} />
      <HomeTab.Screen name={NOTIFY_SCREEN} component={LoginScreen} />
      <HomeTab.Screen name={MENU_SCREEN} component={LoginScreen} />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;

export const styles = StyleSheet.create({
  tabBar: {
    height: getSize.m(70 + (isIphoneX() ? getBottomSpace() / 2 : 0)),
    paddingTop: getSize.m(10),
    display: 'flex',
    paddingBottom: isIphoneX() ? getBottomSpace() / 2 : getSize.m(5),
  },

  tabBarLabelStyle: {
    fontSize: getSize.m(8.5, 0.3),
    fontFamily: Font.font_bold_700,
    marginBottom: getSize.m(10),
  },
});
