import Cookies from 'js-cookie';
const TokenKey = 'TOKEN';

interface Itoken {
  get: () => string | undefined;
  set: (val: string) => void;
  remove: () => void;
}

export const tokenFn: Itoken = {
  get: () => {
    return Cookies.get(TokenKey);
  },
  set: (val) => {
    Cookies.set(TokenKey, val);
  },
  remove: () => {
    Cookies.remove(TokenKey);
  }
};

export { Cookies };
