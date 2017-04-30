import feathers from 'feathers/client';
import feathersVuex from 'feathers-vuex';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';
import store from '~store';

const socket = io('http://localhost:3030');
const app = feathers()
  .configure(feathersVuex(store, {
    idField: '_id',
    auth: {
      userService: '/users',
    },
  }))
  .configure(socketio(socket));

app.service('users');

export default app;
