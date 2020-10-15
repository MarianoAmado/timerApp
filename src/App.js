import React, {useState} from 'react';
import {Animated} from 'react-native';

import Setup from './components/Setup';
import CountDown from './components/Countdown';
import styles from './styles';

const App = () => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(60);
  const [animation] = useState(new Animated.Value(0));

  const animateBackground = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 3,
        duration: 700,
      }),
    ).start();
  };

  const animatedStyles = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: ['#282c34', '#33da44', '#0055da', '#ee0099'],
    }),
  };

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
    setTime(60);

    animation.stopAnimation();
    animation.setValue(0);
  };

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      {running ? (
        <CountDown
          onReturn={stopTimer}
          time={time}
          onFinish={animateBackground}
        />
      ) : (
        <Setup onReturn={startTimer} time={time} setTime={setTime} />
      )}
    </Animated.View>
  );
};

export default App;
