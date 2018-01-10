import React from 'react';
import { Text, StyleSheet } from 'react-native';

import MasterText from './MasterText';

const Heading = props => {
  return (
    <MasterText>
      <Text {...props} style={[styles.header, props.style]}>
        {props.children}
      </Text>
    </MasterText>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default Heading;
