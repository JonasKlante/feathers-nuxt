import parseCookies from '~utils/parse-cookies';
import cookies from 'js-cookie';

export default function ({ isServer, store, req }) {
  let accessToken;

  if (req && isServer) {
    accessToken = parseCookies(req)['feathers-jwt'];
  }

  if (!isServer) {
    accessToken = cookies.get('feathers-jwt');
  }

  if (accessToken) {
    return store.dispatch('auth/authenticate', { strategy: 'jwt', accessToken });
  }
}
