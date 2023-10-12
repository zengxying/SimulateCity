System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, builtinResMgr, Material, MeshRenderer, misc, Node, Primitive, tween, v3, Vec2, CameraControllerComp, _dec, _class, _crd, ccclass, property, tmpV3, Util;

  function _reportPossibleCrUseOfCameraControllerComp(extras) {
    _reporterNs.report("CameraControllerComp", "../component/CameraControllerComp", _context.meta, extras);
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
      CameraControllerComp = _unresolved_2.CameraControllerComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f0050MiR1EQI/deROKMmBb", "util", undefined);

      __checkObsolete__(['_decorator', 'builtinResMgr', 'Color', 'Component', 'Label', 'Material', 'MeshRenderer', 'misc', 'Node', 'Primitive', 'Texture2D', 'tween', 'v3', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tmpV3 = v3();

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

          var s = {};

          if (sObj.constructor === Array) {
            s = [];
          }

          for (var i in sObj) {
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
          var resultArr = []; // to array

          for (var _key in srcObj) {
            if (!srcObj.hasOwnProperty(_key)) {
              continue;
            }

            resultArr.push(srcObj[_key]);
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
          var resultObj = {}; // to object

          for (var _key2 in srcObj) {
            if (!srcObj.hasOwnProperty(_key2) || !srcObj[_key2][objectKey]) {
              continue;
            }

            resultObj[srcObj[_key2][objectKey]] = srcObj[_key2];
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
          var randWeight = Math.floor(Math.random() * totalWeight);
          var sum = 0;

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
          var array = [];
          var intRd = 0;
          var count = 0;

          while (count < m) {
            if (count >= n + 1) {
              break;
            }

            intRd = this.getRandomInt(0, n);
            var flag = 0;

            for (var i = 0; i < count; i++) {
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
          var r = Math.random();
          var rr = r * (max - min + 1) + min;
          return Math.floor(rr);
        }
        /**
         * 获取字符串长度
         * @param {string} render
         * @returns
         */


        static getStringLength(render) {
          var strArr = render;
          var len = 0;

          for (var i = 0, n = strArr.length; i < n; i++) {
            var val = strArr.charCodeAt(i);

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
          var result = true;

          if (obj && obj.constructor === Object) {
            for (var _key3 in obj) {
              if (obj.hasOwnProperty(_key3)) {
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
          var oldDate = new Date(dateValue);
          var curDate = new Date();
          var oldYear = oldDate.getYear();
          var oldMonth = oldDate.getMonth();
          var oldDay = oldDate.getDate();
          var curYear = curDate.getYear();
          var curMonth = curDate.getMonth();
          var curDay = curDate.getDate();

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
          var n;
          var count = 0;

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
          var result = [];

          if (array.constructor !== Array || diff.constructor !== Array) {
            return result;
          }

          var length = array.length;

          for (var i = 0; i < length; i++) {
            if (diff.indexOf(array[i]) === -1) {
              result.push(array[i]);
            }
          }

          return result;
        }

        static _stringToArray(string) {
          // 用于判断emoji的正则们
          var rsAstralRange = '\\ud800-\\udfff';
          var rsZWJ = '\\u200d';
          var rsVarRange = '\\ufe0e\\ufe0f';
          var rsComboMarksRange = '\\u0300-\\u036f';
          var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
          var rsComboSymbolsRange = '\\u20d0-\\u20ff';
          var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
          var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
          var rsFitz = '\\ud83c[\\udffb-\\udfff]';
          var rsOptVar = '[' + rsVarRange + ']?';
          var rsCombo = '[' + rsComboRange + ']';
          var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
          var reOptMod = rsModifier + '?';
          var rsAstral = '[' + rsAstralRange + ']';
          var rsNonAstral = '[^' + rsAstralRange + ']';
          var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
          var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
          var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
          var rsSeq = rsOptVar + reOptMod + rsOptJoin;
          var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
          var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

          var hasUnicode = function hasUnicode(val) {
            return reHasUnicode.test(val);
          };

          var unicodeToArray = function unicodeToArray(val) {
            return val.match(reUnicode) || [];
          };

          var asciiToArray = function asciiToArray(val) {
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
          var startTime = new Date(start);
          var endTime = new Date(end);
          var result = false;

          if (String(startTime.getDate()) !== 'NaN' && String(endTime.getDate()) !== 'NaN') {
            var curDate = new Date();
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
          var startYear = start.getFullYear();
          var startMonth = start.getMonth() + 1;
          var startDate = start.getDate();
          var endYear = end.getFullYear();
          var endMonth = end.getMonth() + 1;
          var endDate = end.getDate();
          start = new Date(startYear + '/' + startMonth + '/' + startDate + ' GMT+0800').getTime();
          end = new Date(endYear + '/' + endMonth + '/' + endDate + ' GMT+0800').getTime();
          var deltaTime = end - start;
          return Math.floor(deltaTime / (24 * 60 * 60 * 1000));
        }
        /**
         * 获取数组最小值
         * @param array 数组
         * @returns
         */


        static getMin(array) {
          var result = null;

          if (array.constructor === Array) {
            var length = array.length;

            for (var i = 0; i < length; i++) {
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
          var o = {
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

          for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(String(o[k]).length));
          }

          return fmt;
        }
        /**
         * 获取格式化后的日期（不含小时分秒）
         */


        static getDay() {
          var date = new Date();
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

          var nameArray = this._stringToArray(name);

          var str = '';
          var length = nameArray.length;

          if (length > limit) {
            for (var i = 0; i < limit; i++) {
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
          var arrUnit = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y', 'B', 'N', 'D'];
          var strValue = '';

          for (var idx = 0; idx < arrUnit.length; idx++) {
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
          var arrUnit = [];
          var strValue = '';

          for (var i = 0; i < 26; i++) {
            arrUnit.push(String.fromCharCode(97 + i));
          }

          for (var idx = 0; idx < arrUnit.length; idx++) {
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


        static formatTimeForSecond(leftSec, withoutSeconds) {
          if (withoutSeconds === void 0) {
            withoutSeconds = false;
          }

          var timeStr = '';
          var sec = leftSec % 60;
          var leftMin = Math.floor(leftSec / 60);
          leftMin = leftMin < 0 ? 0 : leftMin;
          var hour = Math.floor(leftMin / 60);
          var min = leftMin % 60;

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
          var second = Math.floor(ms / 1000 % 60);
          var minute = Math.floor(ms / 1000 / 60 % 60);
          var hour = Math.floor(ms / 1000 / 60 / 60);
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
          var arrClone = this.clone(arr); // 首先从最大的数开始遍历，之后递减

          for (var i = arrClone.length - 1; i >= 0; i--) {
            // 随机索引值randomIndex是从0-arrClone.length中随机抽取的
            var randomIndex = Math.floor(Math.random() * (i + 1)); // 下面三句相当于把从数组中随机抽取到的值与当前遍历的值互换位置

            var itemIndex = arrClone[randomIndex];
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
          var offSetTime = end - start;
          var minute = Math.floor(offSetTime % (1000 * 60 * 60) / (1000 * 60));
          return minute;
        }
        /**
         * 返回指定小数位的数值
         * @param {number} num
         * @param {number} idx
         */


        static formatNumToFixed(num, idx) {
          if (idx === void 0) {
            idx = 0;
          }

          return Number(num.toFixed(idx));
        }
        /**
         * 用于数值到达另外一个目标数值之间进行平滑过渡运动效果
         * @param {number} targetValue 目标数值
         * @param {number} curValue 当前数值
         * @param {number} ratio    过渡比率
         * @returns
         */


        static lerp(targetValue, curValue, ratio) {
          if (ratio === void 0) {
            ratio = 0.25;
          }

          var v = curValue;

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
          var n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          var decodeData = '';

          for (var idx = 0; idx < b64Data.length - n; idx += 2) {
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
          var b64Data = this._base64encode(str);

          var n = 6;

          if (b64Data.length % 2 === 0) {
            n = 7;
          }

          var encodeData = '';

          for (var idx = 0; idx < (b64Data.length - n + 1) / 2; idx++) {
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
          var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          var output = "";
          var chr1;
          var chr2;
          var chr3;
          var enc1;
          var enc2;
          var enc3;
          var enc4;
          var i = 0;
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
          var utftext = "";

          for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

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
          var string = "";
          var i = 0;
          var c = 0;
          var c1 = 0;
          var c2 = 0;
          var c3 = 0;

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
          var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          var output = "";
          var chr1;
          var chr2;
          var chr3;
          var enc1;
          var enc2;
          var enc3;
          var enc4;
          var i = 0;
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
          var wx = window.wx;

          if (wx) {
            // 微信性能数值参考:https://developers.weixin.qq.com/minigame/dev/guide/performance/perf-benchmarkLevel.html
            var nowBenchmarkLevel = -1; // nowBenchmarkLevel = -1性能未知

            var sys = wx.getSystemInfoSync();
            var isIOS = sys.system.indexOf('iOS') >= 0;

            if (isIOS) {
              // 微信不支持IO性能等级
              var model = sys.model; // iPhone 5s 及以下 设定为超低端机

              var ultraLowPhoneType = ['iPhone1,1', 'iPhone1,2', 'iPhone2,1', 'iPhone3,1', 'iPhone3,3', 'iPhone4,1', 'iPhone5,1', 'iPhone5,2', 'iPhone5,3', 'iPhone5,4', 'iPhone6,1', 'iPhone6,2']; // iPhone 6 ~ iPhone SE 设定为超低端机

              var lowPhoneType = ['iPhone6,2', 'iPhone7,1', 'iPhone7,2', 'iPhone8,1', 'iPhone8,2', 'iPhone8,4']; // iPhone 7 ~ iPhone X 设定为中端机

              var middlePhoneType = ['iPhone9,1', 'iPhone9,2', 'iPhone9,3', 'iPhone9,4', 'iPhone10,1', 'iPhone10,2', 'iPhone10,3', 'iPhone10,4', 'iPhone10,5', 'iPhone10,6', 'iPhone XS']; // iPhone XS 及以上 设定为高端机

              var highPhoneType = ['iPhone11,2', 'iPhone11,4', 'iPhone11,6', 'iPhone11,8', 'iPhone12,1', 'iPhone12,3', 'iPhone12,5', 'iPhone12,8', 'iPhone13 ', 'iPhone 14'];

              for (var i = 0; i < ultraLowPhoneType.length; i++) {
                if (model.indexOf(ultraLowPhoneType[i]) >= 0) {
                  nowBenchmarkLevel = 5;
                }
              }

              for (var _i = 0; _i < lowPhoneType.length; _i++) {
                if (model.indexOf(lowPhoneType[_i]) >= 0) {
                  nowBenchmarkLevel = 10;
                }
              }

              for (var _i2 = 0; _i2 < middlePhoneType.length; _i2++) {
                if (model.indexOf(middlePhoneType[_i2]) >= 0) {
                  nowBenchmarkLevel = 20;
                }
              }

              for (var _i3 = 0; _i3 < highPhoneType.length; _i3++) {
                if (model.indexOf(highPhoneType[_i3]) >= 0) {
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

        static showLabelTween(label, time, cb, disy) {
          if (disy === void 0) {
            disy = 50;
          }

          var node = label.node;
          node.getPosition(tmpV3);
          var targetX = tmpV3.x + (Math.random() - 0.5) * disy / 2;
          var targetY = tmpV3.y + disy;
          var delayTime = Math.min(time / 3, 0.2);
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
          var dotProduct = Vec2.dot(vectorA, vectorB);
          var magnitudeA = vectorA.length();
          var magnitudeB = vectorB.length(); // 计算余弦值

          var cosTheta = dotProduct / (magnitudeA * magnitudeB); // 使用反余弦函数获取角度（弧度）

          var angleRad = Math.acos(cosTheta); // 将弧度转换为角度

          var angleDeg = misc.radiansToDegrees(angleRad);
          return angleDeg;
        } // 计算向量夹角的函数


        static getAngleXVectors(vectorA) {
          // 使用向量的点积和模长计算夹角的余弦值
          var vectorB = Vec2.UNIT_X;
          var dotProduct = Vec2.dot(vectorA, vectorB);
          var magnitudeA = vectorA.length(); // 计算余弦值

          var cosTheta = dotProduct / magnitudeA; // 使用反余弦函数获取角度（弧度）

          var angleRad = Math.acos(cosTheta); // 将弧度转换为角度

          var angleDeg = misc.radiansToDegrees(angleRad);
          return angleDeg;
        }
        /**
         * 获取屏幕到空间坐标的转换
         * @param vec2 
         * @returns 
         */


        static getScreenToWorld(vec2, vec3, lv) {
          if (lv === void 0) {
            lv = 0.5;
          }

          tmpV3.set(vec2.x, vec2.y, lv);
          return (_crd && CameraControllerComp === void 0 ? (_reportPossibleCrUseOfCameraControllerComp({
            error: Error()
          }), CameraControllerComp) : CameraControllerComp).camera.screenToWorld(tmpV3, vec3);
        }

        static createSphere(parent, radius, pos) {
          var node = new Node("Test球");
          node.parent = parent;
          node.setPosition(pos);
          var mesh = new Primitive(Primitive.PrimitiveType.SPHERE);
          mesh.onLoaded();
          var meshRender = node.addComponent(MeshRenderer);
          meshRender.mesh = mesh;
          var material = new Material();
          material._uuid = "TestSphere01";
          material.initialize({
            effectName: 'builtin-unlit',
            defines: {
              USE_TEXTURE: true,
              USE_INSTANCING: true
            }
          });
          var whiteTexture = builtinResMgr.get('white-texture');
          material.setProperty("mainTexture", whiteTexture, 0);
          meshRender.material = material;
          node.layer = parent.layer;
          node.setScale(radius, radius, radius);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d68f377b699ec673ca46789d157bd410803c45ab.js.map