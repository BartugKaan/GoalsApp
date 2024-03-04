import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Goal" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
})
