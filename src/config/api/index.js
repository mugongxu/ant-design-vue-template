/**
 * api配置入口文件
 * 分功能类建立相应 api 文件, 在该文件统一导出, 减少代码冲突
 * this.$api.(自定义名) 进行引用
 */
import commonApi from './common';
import loginApi from './login';

const api = {
    ...commonApi,
    ...loginApi
};

export default api;