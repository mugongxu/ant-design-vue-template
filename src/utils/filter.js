const filter = {
  // 设置默认值
  defaultVal: function(value, defaultVal) {
    let defaultValue = defaultVal || '- -';
    if (value || value === 0) {
      return value;
    } else {
      return defaultValue;
    }
  },
  // 转换数值
  formatNumber(value, format) {
    if (!Number(value)) {
      return value;
    }
    format = format || ',';
    if (value && value !== null) {
      value = String(value);
      let tempArr = value.split('.');
      let left = tempArr[0];
      let right = tempArr[1];
      right = right ? '.' + right.substring(0, 2) : '';
      let temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
      return (Number(value) < 0 ? '-' : '') + temp.join(format).split('').reverse().join('') + right;
    } else if (value === 0) {
      return '0';
    } else {
      return '- -';
    }
  }
};

export default filter;
