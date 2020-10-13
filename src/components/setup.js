import React from 'react';
import {TextInput, Text, TouchableHighlight} from 'react-native';

import styles from '../styles';

const Setup = ({onReturn, time, setTime}) => (
  <>
    <TextInput
      style={styles.time}
      keyboardType="numeric"
      onChangeText={val => {
        setTime(val);
      }}
      defaultValue={`${time}`}
    />
    <TouchableHighlight
      onPress={onReturn}
      style={[styles.btn, styles.btnB]}
      underlayColor={'#0A84D0'}>
      <Text style={styles.btnTxt}>GO!</Text>
    </TouchableHighlight>
  </>
);

export default Setup;
