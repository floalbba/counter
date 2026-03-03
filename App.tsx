import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.counterText}>{count}</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => setCount((c) => c + 1)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonPrimaryText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => setCount(0)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonSecondaryText}>Сброс</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  counterText: {
    fontSize: 72,
    fontWeight: '300',
    color: '#333',
    marginBottom: 48,
  },
  buttons: {
    alignItems: 'center',
    gap: 16,
  },
  buttonPrimary: {
    backgroundColor: '#007AFF',
    width: 160,
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimaryText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    width: 160,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonSecondaryText: {
    fontSize: 18,
    color: '#333',
  },
});
