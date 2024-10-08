/**
 * @functionName 时间转换
 * @param {Object|string|number} time
 * @param {string} cFormat {y}-{m}-{d} {h}:{i}:{s}
 * @description 返回字符串
 * @author 谭人杰
 * @date 2020-06-10 11:03:20
 */

export function parseTime(time: object | string | number, cFormat?: string) {
    if (arguments.length === 0 || !time) {
      return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
      date = time;
    } else {
      if (typeof time === 'string') {
        if (/^[0-9]+$/.test(time)) {
          time = parseInt(time);
        } else {
          time = time.replace(new RegExp(/-/gm), '/');
        }
      }
  
      if (typeof time === 'number' && time.toString().length === 10) {
        time = time * 1000;
      }
      date = new Date(time);
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay(),
    };
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
      const value = formatObj[key];
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') {
        return ['日', '一', '二', '三', '四', '五', '六'][value];
      }
      return value.toString().padStart(2, '0');
    });
    return time_str;
  }