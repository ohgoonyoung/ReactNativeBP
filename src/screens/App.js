import React, { PureComponent } from 'react';
import AppContainer from '../modules/react-navigation/AppContainer';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App;