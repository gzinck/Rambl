import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store/configureStore';
import { login } from '../redux/actions/authActions';

const store = configureStore();

export default class Root extends Component {
  constructor() {
    super();

    store.dispatch(
      login({
        email: 'bob',
        password: 'bob'
      })
    );
  }

  render() {
    return (
      <Provider store={store}>
      </Provider>
    );
  }
}
