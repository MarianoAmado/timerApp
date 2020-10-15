import React, {useLayoutEffect, useState} from 'react';
import {Text, TouchableHighlight, Animated} from 'react-native';

import styles from '../styles';

const useBgAnimation = animation => {
  const animateBackground = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 3,
        duration: 700,
      }),
    ).start();
  };

  useLayoutEffect(() => {
    animateBackground();

    return () => {
      animation.stopAnimation();
      animation.setValue(0);
    };
  });
};

const TimeUp = ({navigation}) => {
  const [animation] = useState(new Animated.Value(0));
  useBgAnimation(animation);

  const goBack = () => {
    navigation.navigate('Setup');
  };

  const animatedStyles = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: ['#282c34', '#33da44', '#0055da', '#ee0099'],
    }),
  };

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Text style={styles.time}>0</Text>
      <TouchableHighlight
        onPress={goBack}
        style={[styles.btn, styles.btnG]}
        underlayColor={'#1a8a41'}>
        <Text style={styles.btnTxt}>{'Got it'}</Text>
      </TouchableHighlight>
    </Animated.View>
  );
};

export default TimeUp;
