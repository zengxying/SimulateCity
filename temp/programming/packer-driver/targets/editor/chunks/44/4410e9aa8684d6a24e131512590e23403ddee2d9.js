System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, builtinResMgr, Material, MeshRenderer, misc, Node, Primitive, tween, v3, Vec2, GlobalConst, _dec, _class, _crd, ccclass, property, tmpV3, material, Util;

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../GlobalConst", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      builtinResMgr = _cc.builtinResMgr;
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
      misc = _cc.misc;
      Node = _cc.Node;
      Primitive = _cc.Primitive;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f0050MiR1EQI/deROKMmBb", "util", undefined);

      __checkObsolete__(['_decorator', 'builtinResMgr', 'Color', 'Component', 'geometry', 'Label', 'Material', 'MeshRenderer', 'misc', 'Node', 'Primitive', 'Texture2D', 'tween', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tmpV3 = v3();
      material = new Material();

      (mat => {
        mat._uuid = "TestSphere01";
        mat.initialize({
          effectName: 'builtin-unlit',
          defines: {
            USE_TEXTURE: true,
            USE_INSTANCING: true
          }
        });
        const whiteTexture = builtinResMgr.get('white-texture');
        mat.setProperty("mainTexture", whiteTexture, 0);
      })(material);

      _export("Util", Util = (_dec = ccclass("Util"), _dec(_class = class Util {
        /**
         * !#zh 拷贝object。
         */

        /**
         * 深度拷贝
         * @param {any} sObj 拷贝的对象
         * @returns
         */
        static clone(sObj) {
          if (sObj === null || typeof sObj !== "object") {
            return sObj;
          }

          let s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (let i in sObj) {
            if (sObj.hasOwnProperty(i)) {
              s[i] = this.clone(sObj[i]);
            }
          }

          return s;
        }
        /**
         * 将object转化为数组
         * @param { any} srcObj
         * @returns
         */


        static objectToArray(srcObj) {
          let resultArr = []; // to array

          for (let key in srcObj) {
            if (!srcObj.hasOwnProperty(key)) {
              continue;
            }

            resultArr.push(srcObj[key]);
          }

          return resultArr;
        }
        /**
         * !#zh 将数组转化为object。
         */

        /**
         * 将数组转化为object。
         * @param { any} srcObj
         * @param { string} objectKey
         * @returns
         */


        static arrayToObject(srcObj, objectKey) {
          let resultObj = {}; // to object

          for (let key in srcObj) {
            if (!srcObj.hasOwnProperty(key) || !srcObj[key][objectKey]) {
              continue;
            }

            resultObj[srcObj[key][objectKey]] = srcObj[key];
          }

          return resultObj;
        }
        /**
         * 根据权重,计算随机内容
         * @param {arrany} weightArr
         * @param {number} totalWeight 权重
         * @returns
         */


        static getWeightRandIndex(weightArr, totalWeight) {
          let randWeight = Math.floor(Math.random() * totalWeight);
          let sum = 0;

          for (var weightIndex = 0; weightIndex < weightArr.length; weightIndex++) {
            sum += weightArr[weightIndex];

            if (randWeight < sum) {
              break;
            }
          }

          return weightIndex;
        }
        /**
         * 从n个数中获取m个随机数
         * @param {Number} n   总数
         * @param {Number} m    获取数
         * @returns {Array} array   获取数列
         */


        static getRandomNFromM(n, m) {
          let array = [];
          let intRd = 0;
          let count = 0;

          while (count < m) {
            if (count >= n + 1) {
              break;
            }

            intRd = this.getRandomInt(0, n);
            let flag = 0;

            for (let i = 0; i < count; i++) {
              if (array[i] === intRd) {
                flag = 1;
                break;
              }
            }

            if (flag === 0) {
              array[count] = intRd;
              count++;
            }
          }

          return array;
        }
        /**
         * 获取随机整数
         * @param {Number} min 最小值
         * @param {Number} max 最大值
         * @returns
         */


        static getRandomInt(min, max) {
          let r = Math.random();
          let rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }
        /**
         * 获取字符串长度
         * @param {string} render
         * @returns
         */


        static getStringLength(render) {
          let strArr = render;
          let len = 0;

          for (let i = 0, n = strArr.length; i < n; i++) {
            let val = strArr.charCodeAt(i);

            if (val <= 255) {
              len = len + 1;
            } else {
              len = len + 2;
            }
          }

          return Math.ceil(len / 2);
        }
        /**
         * 判断传入的参数是否为空的Object。数组或undefined会返回false
         * @param obj
         */


        static isEmptyObject(obj) {
          let result = true;

          if (obj && obj.constructor === Object) {
            for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                result = false;
                break;
              }
            }
          } else {
            result = false;
          }

          return result;
        }
        /**
         * 判断是否是新的一天
         * @param {Object|Number} dateValue 时间对象 todo MessageCenter 与 pve 相关的时间存储建议改为 Date 类型
         * @returns {boolean}
         */


        static isNewDay(dateValue) {
          // todo：是否需要判断时区？
          let oldDate = new Date(dateValue);
          let curDate = new Date();
          let oldYear = oldDate.getYear();
          let oldMonth = oldDate.getMonth();
          let oldDay = oldDate.getDate();
          let curYear = curDate.getYear();
          let curMonth = curDate.getMonth();
          let curDay = curDate.getDate();

          if (curYear > oldYear) {
            return true;
          } else {
            if (curMonth > oldMonth) {
              return true;
            } else {
              if (curDay > oldDay) {
                return true;
              }
            }
          }

          return false;
        }
        /**
         * 获取对象属性数量
         * @param {object}o 对象
         * @returns
         */


        static getPropertyCount(o) {
          let n;
          let count = 0;

          for (n in o) {
            if (o.hasOwnProperty(n)) {
              count++;
            }
          }

          return count;
        }
        /**
         * 返回一个差异化数组（将array中diff里的值去掉）
         * @param array
         * @param diff
         */


        static difference(array, diff) {
          let result = [];

          if (array.constructor !== Array || diff.constructor !== Array) {
            return result;
          }

          let length = array.length;

          for (let i = 0; i < length; i++) {
            if (diff.indexOf(array[i]) === -1) {
              result.push(array[i]);
            }
          }

          return result;
        }

        static _stringToArray(string) {
          // 用于判断emoji的正则们
          let rsAstralRange = '\\ud800-\\udfff';
          let rsZWJ = '\\u200d';
          let rsVarRange = '\\ufe0e\\ufe0f';
          let rsComboMarksRange = '\\u0300-\\u036f';
          let reComboHalfMarksRange = '\\ufe20-\\ufe2f';
          let rsComboSymbolsRange = '\\u20d0-\\u20ff';
          let rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
          let reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
          let rsFitz = '\\ud83c[\\udffb-\\udfff]';
          let rsOptVar = '[' + rsVarRange + ']?';
          let rsCombo = '[' + rsComboRange + ']';
          let rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
          let reOptMod = rsModifier + '?';
          let rsAstral = '[' + rsAstralRange + ']';
          let rsNonAstral = '[^' + rsAstralRange + ']';
          let rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
          let rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
          let rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
          let rsSeq = rsOptVar + reOptMod + rsOptJoin;
          let rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
          let reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

          let hasUnicode = function (val) {
            return reHasUnicode.test(val);
          };

          let unicodeToArray = function (val) {
            return val.match(reUnicode) || [];
          };

          let asciiToArray = function (val) {
            return val.split('');
          };

          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        } // 模拟传msg的uuid


        static simulationUUID() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          }

          return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        static trim(str) {
          return str.replace(/(^\s*)|(\s*$)/g, "");
        }
        /**
         * 判断当前时间是否在有效时间内
         * @param {String|Number} start 起始时间。带有时区信息
         * @param {String|Number} end 结束时间。带有时区信息
         */


        static isNowValid(start, end) {
          let startTime = new Date(start);
          let endTime = new Date(end);
          let result = false;

          if (String(startTime.getDate()) !== 'NaN' && String(endTime.getDate()) !== 'NaN') {
            let curDate = new Date();
            result = curDate < endTime && curDate > startTime;
          }

          return result;
        }
        /**
         * 返回相隔天数
         * @param start
         * @param end
         * @returns
         */


        static getDeltaDays(start, end) {
          start = new Date(start);
          end = new Date(end);
          let startYear = start.getFullYear();
          let startMonth = start.getMonth() + 1;
          let startDate = start.getDate();
          let endYear = end.getFullYear();
          let endMonth = end.getMonth() + 1;
          let endDate = end.getDate();
          start = new Date(startYear + '/' + startMonth + '/' + startDate + ' GMT+0800').getTime();
          end = new Date(endYear + '/' + endMonth + '/' + endDate + ' GMT+0800').getTime();
          let deltaTime = end - start;
          return Math.floor(deltaTime / (24 * 60 * 60 * 1000));
        }
        /**
         * 获取数组最小值
         * @param array 数组
         * @returns
         */


        static getMin(array) {
          let result = null;

          if (array.constructor === Array) {
            let length = array.length;

            for (let i = 0; i < length; i++) {
              if (i === 0) {
                result = Number(array[0]);
              } else {
                result = result > Number(array[i]) ? Number(array[i]) : result;
              }
            }
          }

          return result;
        }
        /**
         * 格式化两位小数点
         * @param time
         * @returns
         */


        static formatTwoDigits(time) {
          // @ts-ignore
          return (Array(2).join(0) + time).slice(-2);
        }
        /**
         * 根据格式返回时间
         * @param date  时间
         * @param fmt 格式
         * @returns
         */


        static formatDate(date, fmt) {
          let o = {
            "M+": date.getMonth() + 1,
            // 月份
            "d+": date.getDate(),
            // 日
            "h+": date.getHours(),
            // 小时
            "m+": date.getMinutes(),
            // 分
            "s+": date.getSeconds(),
            // 秒
            "q+": Math.floor((date.getMonth() + 3) / 3),
            // 季度
            "S": date.getMilliseconds() // 毫秒

          };
          if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));

          for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(String(o[k]).length));
          }

          return fmt;
        }
        /**
         * 获取格式化后的日期（不含小时分秒）
         */


        static getDay() {
          let date = new Date();
          return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        /**
         * 格式化名字，XXX...
         * @param {string} name 需要格式化的字符串
         * @param {number}limit
         * @returns {string} 返回格式化后的字符串XXX...
         */


        static formatName(name, limit) {
          limit = limit || 6;

          let nameArray = this._stringToArray(name);

          let str = '';
          let length = nameArray.length;

          if (length > limit) {
            for (let i = 0; i < limit; i++) {
              str += nameArray[i];
            }

            str += '...';
          } else {
            str = name;
          }

          return str;
        }
        /**
         * 格式化钱数，超过10000 转换位 10K   10000K 转换为 10M
         * @param {number}money 需要被格式化的数值
         * @returns {string}返回 被格式化的数值
         */


        static formatMoney(money) {
          let arrUnit = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D'];
          let strValue = '';

          for (let idx = 0; idx < arrUnit.length; idx++) {
            if (money >= 10000) {
              money /= 1000;
            } else {
              strValue = Math.floor(money) + arrUnit[idx];
              break;
            }
          }

          if (strValue === '') {
            strValue = Math.floor(money) + 'U'; // 超过最大值就加个U
          }

          return strValue;
        }
        /**
         * 格式化数值
         * @param {number}value 需要被格式化的数值
         * @returns {string}返回 被格式化的数值
         */


        static formatValue(value) {
          let arrUnit = [];
          let strValue = '';

          for (let i = 0; i < 26; i++) {
            arrUnit.push(String.fromCharCode(97 + i));
          }

          for (let idx = 0; idx < arrUnit.length; idx++) {
            if (value >= 10000) {
              value /= 1000;
            } else {
              strValue = Math.floor(value) + arrUnit[idx];
              break;
            }
          }

          return strValue;
        }
        /**
         * 根据剩余秒数格式化剩余时间 返回 HH:MM:SS
         * @param {Number} leftSec
         */


        static formatTimeForSecond(leftSec, withoutSeconds = false) {
          let timeStr = '';
          let sec = leftSec % 60;
          let leftMin = Math.floor(leftSec / 60);
          leftMin = leftMin < 0 ? 0 : leftMin;
          let hour = Math.floor(leftMin / 60);
          let min = leftMin % 60;

          if (hour > 0) {
            timeStr += hour > 9 ? hour.toString() : '0' + hour;
            timeStr += ':';
          } else {
            timeStr += '00:';
          }

          timeStr += min > 9 ? min.toString() : '0' + min;

          if (!withoutSeconds) {
            timeStr += ':';
            timeStr += sec > 9 ? sec.toString() : '0' + sec;
          }

          return timeStr;
        }
        /**
         *  根据剩余毫秒数格式化剩余时间 返回 HH:MM:SS
         *
         * @param {Number} ms
         */


        static formatTimeForMillisecond(ms) {
          let second = Math.floor(ms / 1000 % 60);
          let minute = Math.floor(ms / 1000 / 60 % 60);
          let hour = Math.floor(ms / 1000 / 60 / 60);
          return {
            'hour': hour,
            'minute': minute,
            'second': second
          };
        }
        /**
         * 将数组内容进行随机排列
         * @param {Array}arr 需要被随机的数组
         * @returns
         */


        static rand(arr) {
          let arrClone = this.clone(arr); // 首先从最大的数开始遍历，之后递减

          for (let i = arrClone.length - 1; i >= 0; i--) {
            // 随机索引值randomIndex是从0-arrClone.length中随机抽取的
            const randomIndex = Math.floor(Math.random() * (i + 1)); // 下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置

            const itemIndex = arrClone[randomIndex];
            arrClone[randomIndex] = arrClone[i];
            arrClone[i] = itemIndex;
          } // 每一次的遍历都相当于把从数组中随机抽取（不重复）的一个元素放到数组的最后面（索引顺序为：len-1,len-2,len-3......0）


          return arrClone;
        }
        /**
         * 获得开始和结束两者之间相隔分钟数
         *
         * @static
         * @param {number} start
         * @param {number} end
         * @memberof Util
         */


        static getOffsetMimutes(start, end) {
          let offSetTime = end - start;
          let minute = Math.floor(offSetTime % (1000 * 60 * 60) / (1000 * 60));
          return minute;
        }
        /**
         * 返回指定小数位的数值
         * @param {number} num
         * @param {number} idx
         */


        static formatNumToFixed(num, idx = 0) {
          return Number(num.toFixed(idx));
        }
        /**
         * 用于数值到达另外一个目标数值之间进行平滑过渡运动效果
         * @param {number} targetValue 目标数值
         * @param {number} curValue 当前数值
         * @param {number} ratio    过渡比率
         * @returns
         */


        static lerp(targetValue, curValue, ratio = 0.25) {
          let v = curValue;

          if (targetValue > curValue) {
            v = curValue + (targetValue - curValue) * ratio;
          } else if (targetValue < curValue) {
            v = curValue - (curValue - targetValue) * ratio;
          }

          return v;
        }
        /**
         * 数据解密
         * @param {String} str
         */


        static decrypt(b64Data) {
          let n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          let decodeData = '';

          for (let idx = 0; idx < b64Data.length - n; idx += 2) {
            decodeData += b64Data[idx + 1];
            decodeData += b64Data[idx];
          }

          decodeData += b64Data.slice(b64Data.length - n + 1);
          decodeData = this._base64Decode(decodeData);
          return decodeData;
        }
        /**
        * 数据加密
        * @param {String} str
        */


        static encrypt(str) {
          let b64Data = this._base64encode(str);

          let n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          let encodeData = '';

          for (let idx = 0; idx < (b64Data.length - n + 1) / 2; idx++) {
            encodeData += b64Data[2 * idx + 1];
            encodeData += b64Data[2 * idx];
          }

          encodeData += b64Data.slice(b64Data.length - n + 1);
          return encodeData;
        } // public method for encoding

        /**
         * base64加密
         * @param {string}input
         * @returns
         */


        static _base64encode(input) {
          let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let output = "";
          let chr1;
          let chr2;
          let chr3;
          let enc1;
          let enc2;
          let enc3;
          let enc4;
          let i = 0;
          input = this._utf8Encode(input);

          while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
              enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
              enc4 = 64;
            }

            output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
          }

          return output;
        }
        /**
         * utf-8 加密
         * @param string
         * @returns
         */


        static _utf8Encode(string) {
          string = string.replace(/\r\n/g, "\n");
          let utftext = "";

          for (let n = 0; n < string.length; n++) {
            let c = string.charCodeAt(n);

            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }

          return utftext;
        }
        /**
         * utf-8解密
         * @param utftext
         * @returns
         */


        static _utf8Decode(utftext) {
          let string = "";
          let i = 0;
          let c = 0;
          let c1 = 0;
          let c2 = 0;
          let c3 = 0;

          while (i < utftext.length) {
            c = utftext.charCodeAt(i);

            if (c < 128) {
              string += String.fromCharCode(c);
              i++;
            } else if (c > 191 && c < 224) {
              c2 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode((c & 31) << 6 | c2 & 63);
              i += 2;
            } else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
              i += 3;
            }
          }

          return string;
        }
        /**
         * base64解密
         * @param {string}input 解密字符串
         * @returns
         */


        static _base64Decode(input) {
          let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let output = "";
          let chr1;
          let chr2;
          let chr3;
          let enc1;
          let enc2;
          let enc3;
          let enc4;
          let i = 0;
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

          while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
            }

            if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
            }
          }

          output = this._utf8Decode(output);
          return output;
        }
        /**
         * 获取当前机型性能是否为低端机
         */


        static checkIsLowPhone() {
          //@ts-ignore
          const wx = window.wx;

          if (wx) {
            // 微信性能数值参考:https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarkLevel.html
            let nowBenchmarkLevel = -1; // nowBenchmarkLevel = -1性能未知

            const sys = wx.getSystemInfoSync();
            const isIOS = sys.system.indexOf('iOS') >= 0;

            if (isIOS) {
              // 微信不支持IO性能等级
              const model = sys.model; // iPhone 5s 及以下 设定为超低端机

              const ultraLowPhoneType = ['iPhone1,1', 'iPhone1,2', 'iPhone2,1', 'iPhone3,1', 'iPhone3,3', 'iPhone4,1', 'iPhone5,1', 'iPhone5,2', 'iPhone5,3', 'iPhone5,4', 'iPhone6,1', 'iPhone6,2']; // iPhone 6 ~ iPhone SE 设定为超低端机

              const lowPhoneType = ['iPhone6,2', 'iPhone7,1', 'iPhone7,2', 'iPhone8,1', 'iPhone8,2', 'iPhone8,4']; // iPhone 7 ~ iPhone X 设定为中端机

              const middlePhoneType = ['iPhone9,1', 'iPhone9,2', 'iPhone9,3', 'iPhone9,4', 'iPhone10,1', 'iPhone10,2', 'iPhone10,3', 'iPhone10,4', 'iPhone10,5', 'iPhone10,6', 'iPhone XS']; // iPhone XS 及以上 设定为高端机

              const highPhoneType = ['iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8', 'iPhone12,1', 'iPhone12,3', 'iPhone12,5', 'iPhone12,8', 'iPhone13 ', 'iPhone 14'];

              for (let i = 0; i < ultraLowPhoneType.length; i++) {
                if (model.indexOf(ultraLowPhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 5;
                }
              }

              for (let i = 0; i < lowPhoneType.length; i++) {
                if (model.indexOf(lowPhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 10;
                }
              }

              for (let i = 0; i < middlePhoneType.length; i++) {
                if (model.indexOf(middlePhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 20;
                }
              }

              for (let i = 0; i < highPhoneType.length; i++) {
                if (model.indexOf(highPhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 30;
                }
              }
            } else {
              nowBenchmarkLevel = sys.benchmarkLevel;
            }

            if (nowBenchmarkLevel < 22) {
              // 22的具体参数可参考微信官方
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }

        static showLabelTween(label, time, cb, disy = 50) {
          let node = label.node;
          node.getPosition(tmpV3);
          let targetX = tmpV3.x + (Math.random() - 0.5) * disy / 2;
          let targetY = tmpV3.y + disy;
          let delayTime = Math.min(time / 3, 0.2);
          node.setScale(0.1, 0.1);
          tween(node.position).to(time, {
            x: targetX,
            y: targetY
          }, {
            onUpdate: (target, ratio) => {
              node.position = target;
            },
            easing: "cubicInOut"
          }).call(cb).start();
          tween(node.scale).delay(delayTime).to(time - delayTime, {
            x: 2,
            y: 2
          }, {
            onUpdate: (target, ratio) => {
              node.scale = target;
            },
            easing: "cubicInOut" //TODO EFF 可以有更好的效果

          }).start(); // tween(label.color).delay(delayTime).to(time - delayTime, { a: 0 }, {
          //     onUpdate: (target: Color, ratio: number) => {
          //         label.color = target;
          //     }
          // }).start();
        } // 计算向量夹角的函数


        static getAngleBetweenVectors(vectorA, vectorB) {
          // 使用向量的点积和模长计算夹角的余弦值
          const dotProduct = Vec2.dot(vectorA, vectorB);
          const magnitudeA = vectorA.length();
          const magnitudeB = vectorB.length(); // 计算余弦值

          const cosTheta = dotProduct / (magnitudeA * magnitudeB); // 使用反余弦函数获取角度（弧度）

          let angleRad = Math.acos(cosTheta); // 将弧度转换为角度

          let angleDeg = misc.radiansToDegrees(angleRad);
          return angleDeg;
        } // 计算向量夹角的函数


        static getAngleXVectors(vectorA) {
          // 使用向量的点积和模长计算夹角的余弦值
          let vectorB = Vec2.UNIT_X;
          const dotProduct = Vec2.dot(vectorA, vectorB);
          const magnitudeA = vectorA.length(); // 计算余弦值

          const cosTheta = dotProduct / magnitudeA; // 使用反余弦函数获取角度（弧度）

          let angleRad = Math.acos(cosTheta); // 将弧度转换为角度

          let angleDeg = misc.radiansToDegrees(angleRad);
          return angleDeg;
        }
        /**
         * 获取屏幕到空间坐标的转换
         * @param vec2 
         * @returns 
         */


        static getScreenToWorld(vec2, vec3, lv = 0.5) {
          tmpV3.set(vec2.x, vec2.y, lv);
          return (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).camera.screenToWorld(tmpV3, vec3);
        }
        /**
         * 获取点击地图上的点位
         * @param vec2 屏幕坐标
         * @param out 点击的地图世界坐标
         * @returns 是否点击到
         */


        static calculateHitPoint(vec2, out) {
          return (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapPanel.calculateHitPoint(vec2, out);
        }

        static createSphere(parent, radius, pos) {
          return;
          let node = new Node("Test球");
          node.parent = parent;
          node.setPosition(pos);
          let mesh = new Primitive(Primitive.PrimitiveType.SPHERE); //@ts-ignore

          mesh.info = radius;
          mesh.onLoaded();
          let meshRender = node.addComponent(MeshRenderer);
          meshRender.mesh = mesh;
          meshRender.material = material;
          node.layer = parent.layer;
          return node; // node.setScale(radius, radius, radius);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4410e9aa8684d6a24e131512590e23403ddee2d9.js.map