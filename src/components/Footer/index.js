import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 FERINA NUR ANNISA</Text>
      <Text style={styles.text}>Kece</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#dcdcdc',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#888',
  },
});

export default Footer;
