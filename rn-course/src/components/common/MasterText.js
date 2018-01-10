import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MasterText = props => {
  return <Text style={styles.masterText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  masterText: {
    color: 'black',
    backgroundColor: 'transparent'
  }
});

export default MasterText;
