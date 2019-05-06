import { ajax, util, filter } from '../utils';

export default {
    install(V) {
        /* eslint no-param-reassign: 0 */
        V.prototype.$ajax = ajax;
        V.prototype.$util = util;
        // 全局vue filter
        for (let key in filter) {
            V.filter(key, filter[key]);
        }
    }
};
