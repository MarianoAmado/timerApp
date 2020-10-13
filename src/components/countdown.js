import React, {useLayoutEffect, useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';

import styles from '../styles';

const CountDown = ({onReturn, onFinish, time}) => {
  const [current, setCurrent] = useState(time);

  useLayoutEffect(() => {
    let isMounted = true;

    setTimeout(() => {
      if (isMounted) {
        if (current > 0) {
          setCurrent(current - 1);
        } else {
          onFinish();
        }
      }
    }, 1000);

    return () => {
      isMounted = false;
    };
  }, [current, onFinish]);

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
