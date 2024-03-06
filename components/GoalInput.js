import { StyleSheet, TextInput, Button, View } from 'react-native'

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your Goal"
        style={styles.textInput}
        onChangeText={props.onChangeTextHandler}
      />
      <Button title="Add Goal" onPress={props.onPressHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
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
})
