import React from 'react';
import {TextInput, Text, TouchableHighlight} from 'react-native';

import styles from '../styles';

const Setup = ({onReturn, time, setTime}) => {
  const handleChange = input => {
    let value = Number.parseInt(input);
    if (!value || value < 0) value = 0;
    setTime(value);
  };

  const enabled = time > 0;

  return (
    <>
      <TextInput
        style={styles.time}
        keyboardType="numeric"
        onChangeText={handleChange}
        value={`${time}`}
      />
      <TouchableHighlight
        onPress={onReturn}
        style={[styles.btn, enabled && styles.btnB]}
        underlayColor={'#0A84D0'}
        disabled={!enabled}>
        <Text style={styles.btnTxt}>GO!</Text>
      </TouchableHighlight>
    </>
  );
};

export default Setup;
