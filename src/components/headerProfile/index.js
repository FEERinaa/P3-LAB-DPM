import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { buttonStyles } from '../../style/buttonStyles';
import { colors } from '../../style/colors';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image />
      <Text style={styles.text}>Nama</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>number</Text>
          <Text style={styles.labelText}>label</Text>
        </View>
        <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
          <Text style={buttonStyles.grayOutlinedButtonText}>Edit Profile lu aja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    padding: 6,
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-between',
    width: 70,
  },
  numberText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  labelText: {
    color: colors.darkGray,
    fontSize: 11,
    fontWeight: 'bold',
  },
});
