import React, {useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';
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

const CountDown = ({onReturn, onFinish, time}) => {
  const [current, setCurrent] = useState(time);
  useCountdown(current, setCurrent, onFinish);

  const finished = current <= 0;

  return (
    <>
      <Text style={styles.time}>{current}</Text>
      <TouchableHighlight
        onPress={onReturn}
        style={[styles.btn, finished ? styles.btnG : styles.btnR]}
        underlayColor={finished ? '#1a8a41' : '#8a1917'}>
        <Text style={styles.btnTxt}>{finished ? 'Got it' : 'Stop'}</Text>
      </TouchableHighlight>
    </>
  );
};

export default CountDown;
