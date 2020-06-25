import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {useStores} from '../hooks/useStores';

const UserForm: React.FC = () => {
  const {user} = useStores();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');

  function onSubmit() {
    const data = {
      id: Math.floor(Math.random() * 154587),
      email,
      name,
      username: userName,
    };

    user.addUser(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={name}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          value={email}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={userName}
          placeholder="User Name"
          onChangeText={(text) => setUserName(text)}
        />
        <Button title="save" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: 15,
  },
  input: {
    fontSize: 16,
  },
  button: {
    paddingTop: 5,
  },
});

export default UserForm;
