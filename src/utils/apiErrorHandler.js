// import Message from 'ant-design-vue/lib/message';
import Notification from 'ant-design-vue/lib/notification';

const apiErrorNotify = ({ title = '接口异常', msg = '无详细信息' }) => {
  return new Promise(resolve => {
    Notification.error({
      message: title,
      description: msg,
      duration: 3,
      onClose: resolve
    });
  });
};

/**
 * 根据接口返回的数据, 对一些常见接口异常进行处理
 * 在业务逻辑中, ajax 请求得到数据后, 可通过该函数以下述方式处理常见的接口错误:
 *   import { errorHandler, ajax } from '../utils';
 *   const ajaxData = ajax.get('/xxx');
 *   errorHandler(ajaxData).then((okData) => {
 *     // 使用校验过的数据 okData 进行接下来的操作...
 *   });
 * 注: 使用 utils 中封装过的 ajax 请求数据时默认已进行了相关处理, 无需额外校验
 * @param {http response Object} resp ajax client 返回的完整数据对象
 */
const errorHandler = resp =>
  new Promise((resolve, reject) => {
    let error;
    if (resp.status !== 200) {
      error = new Error('Http status error.');
    } else if (resp.data === undefined) {
      error = new Error('No data responsed.');
    } else if (resp.data.status === undefined) {
      error = new Error('No status provided.');
    } else if (resp.data.status !== 0 || resp.data.status !== 200) {
      error = new Error(resp.data.status);
    } else if (resp instanceof Error) {
      error = resp;
    }
    if (error) {
      return reject(error);
    }
    return resolve(resp);
  });

  /**
 * 接口异常通知辅助函数
 * 使用 utils 中的 ajax 客户端进行数据请求时, 当请求出错, 会将该辅助函数回传给业务层, 方便业务层进行报错处理:
 *   import { ajax } from '../utils';
 *   const ajaxData = ajax.get('/xxx').catch({ error, errorNotify } => {
 *     errorNotify({
 *       title: '接口数据异常',
 *       api: '/xxx',
 *       errorMessage: '接口未返回数据',
 *     });
 *   });
 * 也可直接从 utils 中导入并使用该辅助函数:
 *   import { errorNotify } from '../utils';
 * @param {object or string} opts 异常信息, 可传递 { api, errorMessage } 或 string 类型报错信息
 */
const errorNotify = (opts) => {
  let title = '';
  let msg = '';
  const style = 'style="word-break: break-all;text-align: left;"';
  if (opts instanceof Object) {
    const { title: targetTitle, errorMessage } = opts;
    if (targetTitle) {
      title = targetTitle;
    }
    if (errorMessage !== undefined) {
      msg += `${errorMessage}`;
    }
  } else if (typeof opts === 'string') {
    msg = opts;
  } else {
    throw TypeError(
      `Parameters passed to errorNotify should to be a object or string, got ${typeof opts}`
    );
  }
  msg = `<p ${style}>${msg}</p>`;
  apiErrorNotify({ title, msg });
};

export default errorNotify;
export { errorHandler, apiErrorNotify, errorNotify };
