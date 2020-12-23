import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const SettingsComponent = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.TextView}>
        <Text style={styles.Text}>Settings Screen</Text>
      </View>
    </View>
  );
};

export default SettingsComponent;
