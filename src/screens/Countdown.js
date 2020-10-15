import React, {useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import useInterval from '@use-it/interval';

import styles from '../styles';

const useCountdown = (time, setTime, onFinish) => {
  const [timeStep, setTimeStep] = useState(1000);

  useInterval(() => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      setTimeStep(null);
      onFinish();
    }
  }, timeStep);
};

const CountDown = ({navigation, route}) => {
  const {time} = route.params;
  const [current, setCurrent] = useState(time);

  const onClick = () => {
    navigation.navigate('Setup');
  };

  const onFinish = () => {
    navigation.replace('TimeUp');
  };

  useCountdown(current, setCurrent, onFinish);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{current}</Text>
      <TouchableHighlight
        onPress={onClick}
        style={[styles.btn, styles.btnR]}
        underlayColor={'#8a1917'}>
        <Text style={styles.btnTxt}>{'Stop'}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CountDown;
