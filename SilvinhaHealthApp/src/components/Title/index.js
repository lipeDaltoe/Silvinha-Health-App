import { View, Text } from 'react-native';

import { styles } from './style';

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>Silvinha Health App</Text>
    </View>
  );
}
