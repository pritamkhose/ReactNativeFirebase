import React from 'react';
import {View, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import colorTheme from '../component/ColorTheme';
import styles from '../component/Styles';

import Home from '../screen/Home';
import Search from '../screen/Search';
import GoogleAnalytics from '../screen/GoogleAnalytics';
import Crashlytics from '../screen/Crashlytics';
import RemoteConfig from '../screen/RemoteConfig';
import FireDatabase from '../screen/FireDatabase';
import AppConstant from '../component/AppConstant';
import analytics from '@react-native-firebase/analytics';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          console.log('logScreenView -->', previousRouteName, currentRouteName);
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="RemoteConfig"
          component={RemoteConfig}
          options={{drawerLabel: 'RemoteConfig'}}
        />
        <Drawer.Screen
          name="Crashlytics"
          component={Crashlytics}
          options={{drawerLabel: 'Crashlytics'}}
        />
        <Drawer.Screen
          name="GoogleAnalytics"
          component={GoogleAnalytics}
          options={{drawerLabel: 'GoogleAnalytics'}}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={{drawerLabel: 'Search'}}
        />
        <Drawer.Screen
          name="FireDatabase"
          component={FireDatabase}
          options={{drawerLabel: 'Fire Database'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={AppConstant.appName}
        onPress={() => props.navigation.toggleDrawer()}
        icon={({focused, color, size}) => (
          <Image
            accessibilityLabel={AppConstant.appName}
            source={require('../assets/images/logo.png')}
            style={styles.drawerIconSize}
            resizeMode="contain"
          />
        )}
      />
      <View style={styles.drawerItemLine} />
      {drawerItemsWithIcon(props, 'Home', require('../assets/images/home.png'))}
      {drawerItemsWithIcon(
        props,
        'RemoteConfig',
        require('../assets/images/grid.png'),
      )}
      {drawerItemsWithIcon(
        props,
        'Crashlytics',
        require('../assets/images/settings.png'),
      )}
      {drawerItemsWithIcon(
        props,
        'GoogleAnalytics',
        require('../assets/images/list.png'),
      )}
      {drawerItemsWithIcon(
        props,
        'FireDatabase',
        require('../assets/images/news.png'),
      )}
    </DrawerContentScrollView>
  );
}

const drawerItemsWithIcon = (
  props: any,
  navigatePath: string,
  imgPath: any,
) => (
  <DrawerItem
    label={navigatePath}
    onPress={() => {
      console.log(navigatePath);
      props.navigation.toggleDrawer();
      props.navigation.navigate(navigatePath);
    }}
    icon={() => (
      <Image
        source={imgPath}
        style={{
          height: colorTheme.iconDrawerItem,
          width: colorTheme.iconDrawerItem,
          tintColor: colorTheme.primaryColor,
        }}
      />
    )}
  />
);

export default AppNavigation;
