import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors } from '../../style/colors';

const ProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    const data = { name, email, phone }; 
    onSubmit(data); // Panggil fungsi onSubmit dari props
    setName(''); // Reset form
    setEmail('');
    setPhone('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengisian Data Diri</Text>
      <TextInput
        style={styles.input}
        placeholder="Nama"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Telepon"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />
      <Button title="Submit" onPress={handleSubmit} color={colors.primary} />
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
});
