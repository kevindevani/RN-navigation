import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CommonActions} from '@react-navigation/native';

import {styles} from './styles';

const NotificationComponent = ({route, navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.TextView}>
        <TouchableOpacity
          // onPress={() =>
          //   navigation.dispatch(
          //     CommonActions.navigate({
          //       name: 'home',
          //       params: {
          //         user: 'hello2!',
          //       },
          //     }),
          //   )
          // }
          onPress={() => {
            navigation.navigate('home', {
              user: 'hello!2',
            });
          }}>
          <Text style={styles.Text}>Notification Screen</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>Name: {route.params?.name}</Text>
      </View>
    </View>
  );
};

export default NotificationComponent;
