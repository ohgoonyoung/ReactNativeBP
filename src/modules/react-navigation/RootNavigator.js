import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../../screens/Login';

const RootNavigator = createStackNavigator({
  Login: Login,
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
  header: () => null,
})

export default RootNavigator;