import React from 'react';
import User from '../stores/users';

export const storesContext = React.createContext({
  user: new User(),
});
