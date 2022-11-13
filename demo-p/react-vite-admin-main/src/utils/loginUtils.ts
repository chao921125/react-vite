import { history } from './routeUtils';

export const logout = () => {
  history.replace('/login');
};
