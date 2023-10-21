import React, { useState, useEffect } from 'react';
import { Text, View, Modal, Animated } from 'react-native';
import HeaderStyles from './HeaderStyles';

function DumbHeader(props) {
  const [animation] = useState(new Animated.Value(-300));

  useEffect(() => {
    const startValue = -300;
    const endValue = 400;
    const duration = 3500;

    Animated.loop(
      Animated.timing(animation, {
        toValue: endValue,
        duration: duration,
        useNativeDriver: false,
      })
    ).start();
  }, [animation]);

  const animatedStyle = {
    transform: [{ translateX: animation }],
  };

  return (
    <View style={HeaderStyles.container}>
      <Animated.Text style={[HeaderStyles.DombHeader, animatedStyle]}>
        Welcome to my app! - Jun
      </Animated.Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={false}
      >
      </Modal>
    </View>
  );
}

export default DumbHeader;
