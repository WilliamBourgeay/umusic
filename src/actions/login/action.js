// @flow

import { SUCCESS, LOAD, FAILURE } from './types';

type dataType = {
    email: string,
    password: string,
};

export function login(data: dataType) {
  return {
    types: [LOAD, SUCCESS, FAILURE],
    payload: {
      request: {
        method: 'post',
        url: '/auth/login',
        data: {
          email: data.email,
          password: data.password,
        },
      },
    },
  };
}

export default login;
