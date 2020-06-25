import {observable, action} from 'mobx';
import api from '../services/api';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default class User {
  @observable
  list: Array<IUser> = [];

  @observable
  loading = false;

  @action
  addUser(user: IUser) {
    this.list.push(user);
  }

  @action
  togggleLoading() {
    this.loading = !this.loading;
  }

  @action
  fetchUsers() {
    this.loading = true;
    api.get('/users').then((res) => {
      this.loading = false;
      this.list = res.data;
    });
  }
}
