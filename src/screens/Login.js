import React, { PureComponent } from 'react';
import ViewContainer from '../components/View/ViewContainer';
import { View, Text } from 'react-native';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <ViewContainer>
        <Text>Login</Text>
      </ViewContainer>
    )
  }
}

export default Login;