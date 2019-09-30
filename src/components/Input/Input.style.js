import { StyleSheet } from 'react-native'

const input = StyleSheet.create({
  inputContainer: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderStyle: 'solid',
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 10,
    zIndex: 2
  },
  input: {
    height: '100%',
    flex: 1
  }
})

export default input