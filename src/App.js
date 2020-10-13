import React, {useState} from 'react';
import {View} from 'react-native';

import Setup from './components/setup';
import CountDown from './components/countdown';
import styles from './styles';

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(60);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
    setTime(60);
  };

  return (
    <View style={styles.container}>
      {running ? (
        <CountDown onReturn={stopTimer} time={time} />
      ) : (
        <Setup onReturn={startTimer} time={time} setTime={setTime} />
      )}
    </View>
  );
};

export default App;
