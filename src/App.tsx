import React from 'react';
import 'mobx-react/batchingForReactNative';
import {observer} from 'mobx-react';
import {useStores} from './hooks/useStores';
import Form from './components/Form';
import List from './components/UserList';

const App: React.FC = observer(() => {
  const {user} = useStores();

  console.log(user.list);
  return (
    <React.Fragment>
      <Form />
      <List />
    </React.Fragment>
  );
});

export default App;
