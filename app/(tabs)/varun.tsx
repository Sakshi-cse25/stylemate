import { View, Text, StyleSheet, StatusBar } from 'react-native';
//vk
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Logo */}
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>A</Text>
      </View>

      {/* App Name */}
      <Text style={styles.appName}>varun tab </Text>

      {/* Tagline (optional) */}
      <Text style={styles.tagline}>Clean • Simple • Modern</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  logoText: {
    color: '#ffffff',
    fontSize: 42,
    fontWeight: 'bold',
  },

  appName: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000000',
  },

  tagline: {
    fontSize: 14,
    color: '#777777',
    marginTop: 6,
  },
});
