import filter from './filter';

const util = {
    // 深拷贝
    deepCopy(o) {
        // 数组
        if (o instanceof Array) {
            return o.map(item => {
                return this.deepCopy(item);
            });
        } else if (o instanceof Function) {
            return o;
        } else if (o instanceof Object) {
            let temp = {};
            Object.keys(o).map(item => {
                temp[item] = this.deepCopy(o[item]);
            });
            return temp;
        } else {
            return o;
        }
    },
    /**
     * 微信设置title 黑科技
     * @Author   weiber
     * @DateTime 2016-08-23T18:19:28+0800
     * @param   el      绘制节点
     * @param   data    绘制数据
     */
    setTitle: (t) => {
        document.title = t;
        var i = document.createElement('iframe');
        i.src = '';
        i.style.display = 'none';
        i.id = 'title';
        i.onload = function() {
            setTimeout(function() {
                i.remove();
            }, 9);
        };
        document.body.appendChild(i);
    },
    // 获取时间
    // @params: {time}13位时间戳;{format}显示示格式 Y-M-D H:F:S
    getFormateTime(time, formatStr) {
        let format = formatStr || 'Y-M-D';
        if (!time) return '';
        // if (time.toString().length !== 13) return time;
        time = parseInt(time);
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        let hours = date.getHours();
        hours = hours < 10 ? '0' + hours : hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let seconds = date.getSeconds();
        seconds = seconds < 10 ? '0' + seconds : seconds;
        // 去头尾空格
        format = format.replace(/(^\s*)|(\s*$)/g, '');
        format = format.replace(/(Y|y)/gi, year);
        format = format.replace(/(M|m)/gi, month);
        format = format.replace(/(D|d)/gi, day);
        format = format.replace(/(H|h)/gi, hours);
        format = format.replace(/(F|f)/gi, minutes);
        format = format.replace(/(S|s)/gi, seconds);
        return format;
    },
    getNowDate() {
        const date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month > 9 ? month : ('0' + month);
        day = day > 9 ? day : ('0' + day);
        return `${date.getFullYear() + 1}-${month}-${day}`;
    },
    /**
     * 转化成数组，去除空值、Null
     */
    changeToArrayWithoutNull() {
        const tempArr = Array.prototype.slice.apply(arguments);
        return tempArr.filter(item => {
            return item;
        });
    },
    /**
     * 敏感信息处理
     */
    hideInformation(val, type) {
        if (!val) return '--';
        if (type === 1) { // 手机
            return val.replace(/^(.{3})(?:\d+)(.{4})$/, '$1****$2');
        } else if (type === 2) { // 身份证
            return val.replace(/^(.{6})(?:\d+)(.{4})$/, '$1*******$2');
        } else {
            return val;
        }
    },
    /** 值校验
     * @param obj:校验的validateObj对象
     * @param item:校验对象
     * @param valueStr:校验的值的key,默认model
     * {obj.name}校验的值;
     * {obj.errorTip}错误显示内容;
     * {obj.required}是否必填;
     * {obj.regExp}正则数组;
     * {obj.regExp[index].reg}校验规则-正则
     * {obj.regExp[index].attr}校验规则属性-正则
     * {obj.regExp[index].ifForbid}校验规则-true:符合规则的不通过；false:符合规则的通过
     * {obj.regExp[index].err}错误提示
     */
    validateValue(obj, item, valueStr) {
        valueStr = valueStr || 'model';
        let value = item[valueStr];
        if (typeof obj === 'undefined' || typeof item === 'undefined') {
            return {
                result: true,
                msg: '不存在校验项'
            };
        } else if (item.disabled || item.hidden || (!item.hasOwnProperty(valueStr) && !!obj.hasOwnProperty('errorTip'))) {
            obj.errorTip = '';
            return {
                result: true,
                msg: '不存在校验项'
            };
        } else if (!item.hasOwnProperty(valueStr) && !obj.hasOwnProperty('errorTip')) {
            return {
                result: true,
                msg: '不存在校验项&不存在信息错误提示'
            };
        }
        if (typeof obj.errorTip !== 'undefined') {
            obj.errorTip = '';
        }
        let ifArray = value instanceof Array;
        if (obj.required && ((!!ifArray && value.length <= 0) || (!ifArray && !value && value !== 0))) {
            if (typeof obj.errorTip !== 'undefined') {
                obj.errorTip = '请输入正确的值';
            }
            return {
                result: false,
                ifRequiredFill: false,
                msg: '请输入正确的值'
            };
        } else if (obj.regExp && obj.regExp.length > 0) {
            for (var i = 0, len = obj.regExp.length; i < len; i++) {
                let attr = obj.regExp[i].attr || 'ig';
                let pattern = new RegExp(obj.regExp[i].reg, attr);
                let ifForbid = obj.regExp[i].ifForbid || false;
                let ifHasValueCheck = obj.regExp[i].ifHasValueCheck || false;
                if (ifHasValueCheck && !value) {
                    continue;
                }
                if (value && ((ifForbid && pattern.test(value)) || (!ifForbid && !pattern.test(value)))) {
                    if (obj.regExp[i].err && typeof obj.errorTip !== 'undefined') {
                        obj.errorTip = obj.regExp[i].err;
                    }
                    break;
                }
            }
            if (i >= len) {
                return {
                    result: true,
                    msg: '校验通过'
                };
            } else {
                return {
                    result: false,
                    ifRequiredFill: true,
                    msg: obj.regExp[i].err || '校验未通过'
                };
            }
        } else {
            return {
                result: true,
                msg: '校验通过'
            };
        }
    },
    // 生成随机数
    getRandomNum(randomLength) {
        let rL = randomLength || 18;
        return Number(Math.random().toString().substr(3, rL) + Date.now()).toString(36);
    },
    // 转换数值格式化
    formatNumber(value, format) {
        return filter.formatNumber(value, format);
    },
    // 计算百分比
    caculatePre(value, total) {
      return (value / total * 100).toFixed(2) + '%';
    },
    /**
     * traget：配置数据类型
     * data：源数据
     * total：总数
     */
    formaterTableData(traget, data, total) {
      return traget.map(item => {
        return {
          name: item.name,
          color: item.color,
          values: [
            item.name,
            this.formatNumber(data[item.key]),
            this.caculatePre(data[item.key], total)
          ],
          children: [...this.formaterTableData(item.children || [], data, total)]
        };
      });
    }
};

export default util;