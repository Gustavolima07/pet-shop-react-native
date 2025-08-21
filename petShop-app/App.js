import { StyleSheet, Text, View } from 'react-native';

import colors from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
