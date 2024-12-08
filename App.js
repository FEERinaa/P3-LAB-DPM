import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View, Button, Text } from 'react-native';
import ProfileForm from './src/pages/profileForm';
import LifeCycle from './src/components/lifecycle/index';
import Constants from 'expo-constants';
import { colors } from './src/style/colors';
import { useState } from 'react';

export default function App() {
  const [showLifeCycle, setShowLifeCycle] = useState(true);
  const [submittedData, setSubmittedData] = useState(null); // Untuk menyimpan data hasil submit

  const handleDataSubmit = (data) => {
    setSubmittedData(data); // Menyimpan data hasil submit
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Form Pengisian Data */}
        <ProfileForm onSubmit={handleDataSubmit} />

        <View style={styles.separator} />

        {/* Tombol Toggle */}
        <Button
          title={showLifeCycle ? "Hide LifeCycle Component" : "Show LifeCycle Component"}
          onPress={() => setShowLifeCycle(!showLifeCycle)}
          color={colors.primary}
        />

        {/* Hasil Submit */}
        {submittedData && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Hasil Submit:</Text>
            <Text>Nama: {submittedData.name}</Text>
            <Text>Email: {submittedData.email}</Text>
            <Text>Telepon: {submittedData.phone}</Text>
          </View>
        )}

        {/* Komponen LifeCycle */}
        {showLifeCycle && (
          <View style={styles.lifecycleContainer}>
            <LifeCycle />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Constants.statusBarHeight,
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  separator: {
    height: 20,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  lifecycleContainer: {
    marginTop: 20,
    width: '100%',
  },
});
