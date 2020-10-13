import React, {useLayoutEffect, useState} from 'react';
import {Text, Button} from 'react-native';

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

  const finished = current > 0;

  return (
    <>
      <Text style={styles.time}>{current}</Text>
      <Button
        title={finished ? 'Stop' : 'Got it'}
        color={finished ? '#e63c39' : '#12d055'}
        onPress={onReturn}
      />
    </>
  );
};

export default CountDown;
