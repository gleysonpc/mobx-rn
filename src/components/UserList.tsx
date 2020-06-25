import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {useStores} from '../hooks/useStores';

export interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
}

function Item({name}: User) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
}

const UserList = () => {
  const {user} = useStores();
  return (
    <View style={styles.container}>
      <FlatList
        data={user.list}
        renderItem={({item}) => <Item id={item.id} name={item.name} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        disabled={user.loading}
        title="Load Uses"
        onPress={() => user.fetchUsers()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default UserList;
