import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const AboutComponent = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.TextView}>
        <Text style={styles.Text}>About Screen</Text>
      </View>
    </View>
  );
};

export default AboutComponent;
