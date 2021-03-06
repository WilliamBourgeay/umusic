// @flow

import {
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_LOAD,
  CREATE_ROOM_FAILURE,
} from './types';

type dataType = {
  name: string,
  password: string,
  authorization: string,
};

export function createRoom(data: dataType) {
  return {
    types: [CREATE_ROOM_LOAD, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE],
    payload: {
      request: {
        method: 'post',
        url: '/room/create',
        headers: { Authorization: data.authorization },
        data: {
          name: data.name,
          password: data.password,
        },
      },
    },
  };
}

export default createRoom;
