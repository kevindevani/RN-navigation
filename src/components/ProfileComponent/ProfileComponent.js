import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const ProfileComponent = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.TextView}>
        <Text style={styles.Text}>Profile Screen</Text>
      </View>
    </View>
  );
};

export default ProfileComponent;
