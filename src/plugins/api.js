import { API } from '../config';

export default {
  install(V) {
    /* eslint no-param-reassign: 0 */
    V.prototype.$api = API;
  }
};
