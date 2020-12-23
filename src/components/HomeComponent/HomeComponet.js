/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';

const HomeComponent = (props) => {
  const {navigation, route} = props;
  //const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View style={styles.TextView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('notification', {
              name: 'hello!',
            });
          }}>
          <Text style={styles.Text}>Home Screen</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>Return:{route.params?.user}</Text>
      </View>
    </View>
  );
};

export default HomeComponent;
