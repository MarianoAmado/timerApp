import React, {useState} from 'react';
import {TextInput, Text, TouchableHighlight, View} from 'react-native';

import styles from '../styles';

const Setup = ({navigation}) => {
  const [time, setTime] = useState(60);

  const handleChange = input => {
    let value = Number.parseInt(input);
    if (!value || value < 0) value = 0;
    setTime(value);
  };

  const onClick = () => {
    navigation.navigate('CountDown', {time: time});
  };

  const enabled = time > 0;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.time}
        keyboardType="numeric"
        onChangeText={handleChange}
        value={`${time}`}
      />
      <TouchableHighlight
        onPress={onClick}
        style={[styles.btn, enabled && styles.btnB]}
        underlayColor={'#0A84D0'}
        disabled={!enabled}>
        <Text style={styles.btnTxt}>GO!</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Setup;
