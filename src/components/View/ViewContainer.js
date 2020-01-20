import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

const ViewContainer = (props) => {
  return (
    <SafeAreaView style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      {props.children}
    </SafeAreaView>
  );
}
ViewContainer.propTypes = {
  children: PropTypes.element.isRequired,
}
ViewContainer.defaultProps = {
}

export default ViewContainer;