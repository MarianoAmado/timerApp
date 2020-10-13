import React from 'react';
import {TextInput, Button} from 'react-native';

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
    <Button title="GO" color="#1B95E0" onPress={onReturn} />
  </>
);

export default Setup;
