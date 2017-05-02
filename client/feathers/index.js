import feathers from 'feathers/client';
import auth from 'feathers-authentication-client';
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import { CookieStorage } from 'cookie-storage';
import io from 'socket.io-client';

const socket = io('http://localhost:3030');
const app = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(auth({ storage: new CookieStorage() }));

export default app;
