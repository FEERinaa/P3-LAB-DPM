import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { colors } from '../../style/colors';

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component Did Mount');
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component Did Update: Count berubah menjadi', count);
  }, [count]);

  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Cycle Component</Text>
      <Button title="Update Count" onPress={changeCount} color={colors.primary} />
      <Text style={styles.countText}>Count: {count}</Text>
    </View>
  );
};

export default LifeCycle;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  countText: {
    fontSize: 16,
    marginTop: 10,
    color: colors.text,
  },
});
