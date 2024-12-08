import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../style/colors';

export default function ProfileNavBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>My Profile</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
