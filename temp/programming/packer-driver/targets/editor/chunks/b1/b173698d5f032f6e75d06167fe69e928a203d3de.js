System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _class2, _crd, ccclass, property, CELL_DELIMITERS, LINE_DELIMITERS, getter, getterCast, CSV, CSVManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ee057O2MK9PwIHvruBDkuyS", "csvManager", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      CELL_DELIMITERS = [",", ";", "\t", "|", "^"];
      LINE_DELIMITERS = ["\r\n", "\r", "\n"];

      getter = function (index) {
        return "d[" + index + "]";
      };

      getterCast = function (value, index, cast, d) {
        if (cast instanceof Array) {
          if (cast[index] === "number") {
            return Number(d[index]);
          } else if (cast[index] === "boolean") {
            return d[index] === "true" || d[index] === "t" || d[index] === "1";
          } else {
            return d[index];
          }
        } else {
          if (!isNaN(Number(value))) {
            return Number(d[index]);
          } else if (value == "false" || value == "true" || value == "t" || value == "f") {
            return d[index] === "true" || d[index] === "t" || d[index] === "1";
          } else {
            return d[index];
          }
        }
      };

      CSV = {
        //

        /* =========================================
            * Constants ===============================
            * ========================================= */
        STANDARD_DECODE_OPTS: {
          skip: 0,
          limit: false,
          header: false,
          cast: false,
          comment: ""
        },
        STANDARD_ENCODE_OPTS: {
          delimiter: CELL_DELIMITERS[0],
          newline: LINE_DELIMITERS[0],
          skip: 0,
          limit: false,
          header: false
        },
        quoteMark: '"',
        doubleQuoteMark: '""',
        quoteRegex: /"/g,

        /* =========================================
            * Utility Functions =======================
            * ========================================= */
        assign: function () {
          let args = Array.prototype.slice.call(arguments);
          let base = args[0];
          let rest = args.slice(1);

          for (let i = 0, len = rest.length; i < len; i++) {
            for (let attr in rest[i]) {
              base[attr] = rest[i][attr];
            }
          }

          return base;
        },
        map: function (collection, fn) {
          let results = [];

          for (let i = 0, len = collection.length; i < len; i++) {
            results[i] = fn(collection[i], i);
          }

          return results;
        },
        getType: function (obj) {
          return Object.prototype.toString.call(obj).slice(8, -1);
        },
        getLimit: function (limit, len) {
          return limit === false ? len : limit;
        },
        buildObjectConstructor: function (fields, sample, cast) {
          return function (d) {
            let object = new Object();

            let setter = function (attr, value) {
              return object[attr] = value;
            };

            if (cast) {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, cast, d));
              });
            } else {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, null, d));
              });
            } // body.push("return object;");
            // body.join(";\n");


            return object;
          };
        },
        buildArrayConstructor: function (fields, sample, cast) {
          return function (d) {
            let row = new Array(sample.length);

            let setter = function (idx, value) {
              return row[idx] = value;
            };

            if (cast) {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, cast, d));
              });
            } else {
              fields.forEach(function (attr, idx) {
                setter(attr, getterCast(sample[idx], idx, null, d));
              });
            }

            return row;
          };
        },
        frequency: function (coll, needle, limit) {
          if (limit === void 0) limit = false;
          let count = 0;
          let lastIndex = 0;
          let maxIndex = this.getLimit(limit, coll.length);

          while (lastIndex < maxIndex) {
            lastIndex = coll.indexOf(needle, lastIndex);
            if (lastIndex === -1) break;
            lastIndex += 1;
            count++;
          }

          return count;
        },
        mostFrequent: function (coll, needles, limit) {
          let max = 0;
          let detected;

          for (let cur = needles.length - 1; cur >= 0; cur--) {
            if (this.frequency(coll, needles[cur], limit) > max) {
              detected = needles[cur];
            }
          }

          return detected || needles[0];
        },
        unsafeParse: function (text, opts, fn) {
          let lines = text.split(opts.newline);

          if (opts.skip > 0) {
            lines.splice(opts.skip);
          }

          let fields;
          let constructor;

          function cells(lines) {
            let line = lines.shift();

            if (line.indexOf('"') >= 0) {
              // 含引号
              // 找到这行完整的数据, 找到对称的双引号
              let lastIndex = 0;
              let findIndex = 0;
              let count = 0;

              while (lines.length > 0) {
                lastIndex = line.indexOf('"', findIndex);
                if (lastIndex === -1 && count % 2 === 0) break;

                if (lastIndex !== -1) {
                  findIndex = lastIndex + 1;
                  count++;
                } else {
                  line = line + opts.newline + lines.shift();
                }
              }

              let list = [];
              let item;
              let quoteCount = 0;
              let start = 0;
              let end = 0;
              let length = line.length;

              for (let key in line) {
                if (!line.hasOwnProperty(key)) {
                  continue;
                }

                let numKey = parseInt(key);
                let value = line[key];

                if (numKey === 0 && value === '"') {
                  quoteCount++;
                  start = 1;
                }

                if (value === '"') {
                  quoteCount++;

                  if (line[numKey - 1] === opts.delimiter && start === numKey) {
                    start++;
                  }
                }

                if (value === '"' && quoteCount % 2 === 0) {
                  if (line[numKey + 1] === opts.delimiter || numKey + 1 === length) {
                    end = numKey;
                    item = line.substring(start, end);
                    list.push(item);
                    start = end + 2;
                    end = start;
                  }
                }

                if (value === opts.delimiter && quoteCount % 2 === 0) {
                  end = numKey;

                  if (end > start) {
                    item = line.substring(start, end);
                    list.push(item);
                    start = end + 1;
                    end = start;
                  } else if (end === start) {
                    list.push("");
                    start = end + 1;
                    end = start;
                  }
                }
              }

              end = length;

              if (end >= start) {
                item = line.substring(start, end);
                list.push(item);
              }

              return list;
            } else {
              return line.split(opts.delimiter);
            }
          }

          if (opts.header) {
            if (opts.header === true) {
              opts.comment = cells(lines); // 第一行是注释

              opts.cast = cells(lines); // 第二行是数据类型

              fields = cells(lines);
            } else if (this.getType(opts.header) === "Array") {
              fields = opts.header;
            }

            constructor = this.buildObjectConstructor(fields, lines[0].split(opts.delimiter), opts.cast);
          } else {
            constructor = this.buildArrayConstructor(fields, lines[0].split(opts.delimiter), opts.cast);
          }

          while (lines.length > 0) {
            let row = cells(lines);

            if (row.length > 1) {
              fn(constructor(row), fields[0]);
            }
          }

          return true;
        },
        safeParse: function (text, opts, fn) {
          let delimiter = opts.delimiter;
          let newline = opts.newline;
          let lines = text.split(newline);

          if (opts.skip > 0) {
            lines.splice(opts.skip);
          }

          return true;
        },
        encodeCells: function (line, delimiter, newline) {
          let row = line.slice(0);

          for (let i = 0, len = row.length; i < len; i++) {
            if (row[i].indexOf(this.quoteMark) !== -1) {
              row[i] = row[i].replace(this.quoteRegex, this.doubleQuoteMark);
            }

            if (row[i].indexOf(delimiter) !== -1 || row[i].indexOf(newline) !== -1) {
              row[i] = this.quoteMark + row[i] + this.quoteMark;
            }
          }

          return row.join(delimiter);
        },
        encodeArrays: function (coll, opts, fn) {
          let delimiter = opts.delimiter;
          let newline = opts.newline;

          if (opts.header && this.getType(opts.header) === "Array") {
            fn(this.encodeCells(opts.header, delimiter, newline));
          }

          for (let cur = 0, lim = this.getLimit(opts.limit, coll.length); cur < lim; cur++) {
            fn(this.encodeCells(coll[cur], delimiter, newline));
          }

          return true;
        },
        encodeObjects: function (coll, opts, fn) {
          let delimiter = opts.delimiter;
          let newline = opts.newline;
          let header;
          let row;
          header = [];
          row = [];

          for (let key in coll[0]) {
            header.push(key);
            row.push(coll[0][key]);
          }

          if (opts.header === true) {
            fn(this.encodeCells(header, delimiter, newline));
          } else if (this.getType(opts.header) === "Array") {
            fn(this.encodeCells(opts.header, delimiter, newline));
          } // @ts-ignore


          fn(this.encodeCells(row, delimiter));

          for (let cur = 1, lim = this.getLimit(opts.limit, coll.length); cur < lim; cur++) {
            row = [];

            for (let key$1 = 0, len = header.length; key$1 < len; key$1++) {
              row.push(coll[cur][header[key$1]]);
            }

            fn(this.encodeCells(row, delimiter, newline));
          }

          return true;
        },
        parse: function (text, opts, fn) {
          let rows;

          if (this.getType(opts) === "Function") {
            fn = opts;
            opts = {};
          } else if (this.getType(fn) !== "Function") {
            rows = [];
            fn = rows.push.bind(rows);
          } else {
            rows = [];
          } // @ts-ignore


          opts = this.assign({}, this.STANDARD_DECODE_OPTS, opts); // @ts-ignore

          this.opts = opts;

          if (!opts.delimiter || !opts.newline) {
            let limit = Math.min(48, Math.floor(text.length / 20), text.length);
            opts.delimiter = opts.delimiter || this.mostFrequent(text, CELL_DELIMITERS, limit);
            opts.newline = opts.newline || this.mostFrequent(text, LINE_DELIMITERS, limit);
          } // modify by jl 由表自行控制不要含有双引号.提高解析效率


          return this.unsafeParse(text, opts, fn) && (rows.length > 0 ? rows : true);
        },
        encode: function (coll, opts, fn) {
          let lines;

          if (this.getType(opts) === "Function") {
            fn = opts;
            opts = {};
          } else if (this.getType(fn) !== "Function") {
            lines = [];
            fn = lines.push.bind(lines);
          } // @ts-ignore


          opts = this.assign({}, this.STANDARD_ENCODE_OPTS, opts);

          if (opts.skip > 0) {
            coll = coll.slice(opts.skip);
          }

          return (this.getType(coll[0]) === "Array" ? this.encodeArrays : this.encodeObjects)(coll, opts, fn) && (lines.length > 0 ? lines.join(opts.newline) : true);
        }
      };

      _export("CSVManager", CSVManager = (_dec = ccclass("CSVManager"), _dec(_class = (_class2 = class CSVManager {
        constructor() {
          this._csvTables = {};
          this._csvTableForArr = {};
          this._tableCast = {};
          this._tableComment = {};
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new CSVManager();
          return this._instance;
        }

        addTable(tableName, tableContent, force) {
          if (this._csvTables[tableName] && !force) {
            return;
          }

          let tableData = {};
          let tableArr = [];
          let opts = {
            header: true
          };
          CSV.parse(tableContent, opts, function (row, keyName) {
            tableData[row[keyName]] = row;
            tableArr.push(row);
          });
          this._tableCast[tableName] = CSV.opts.cast;
          this._tableComment[tableName] = CSV.opts.comment;
          this._csvTables[tableName] = tableData;
          this._csvTableForArr[tableName] = tableArr; // this.csvTables[tableName].initFromText(tableContent);
        }
        /**
         * 根据表名获取表的所有内容
         * @param {string} tableName  表名
         * @returns {object} 表内容
         */


        getTableArr(tableName) {
          return this._csvTableForArr[tableName];
        }
        /**
         * 根据表名获取表的所有内容
         * @param {string} tableName  表名
         * @returns {object} 表内容
         */


        getTable(tableName) {
          return this._csvTables[tableName];
        }
        /**
         * 查询一条表内容
         * @param {string} tableName 表名
         * @param {string} key 列名
         * @param {any} value 值
         * @returns {Object} 一条表内容
         */


        queryOne(tableName, key, value) {
          let table = this.getTable(tableName);

          if (!table) {
            return null;
          }

          if (key) {
            for (let tbItem in table) {
              if (!table.hasOwnProperty(tbItem)) {
                continue;
              }

              if (table[tbItem][key] === value) {
                return table[tbItem];
              }
            }
          } else {
            return table[value];
          }
        }
        /**
         * 根据ID查询一条表内容
         * @param {string}tableName 表名
         * @param {string}ID
         * @returns {Object} 一条表内容
         */


        queryByID(tableName, ID) {
          // @ts-ignore
          return this.queryOne(tableName, null, ID);
        }
        /**
         * 查询key和value对应的所有行内容
         * @param {string} tableName 表名
         * @param {string} key 列名
         * @param {any} value 值
         * @returns {Object}
         */


        queryAll(tableName, key, value) {
          let table = this.getTable(tableName);

          if (!table || !key) {
            return null;
          }

          let ret = {};

          for (let tbItem in table) {
            if (!table.hasOwnProperty(tbItem)) {
              continue;
            }

            if (table[tbItem][key] === value) {
              ret[tbItem] = table[tbItem];
            }
          }

          return ret;
        }
        /**
         * 选出指定表里所有 key 的值在 values 数组中的数据，返回 Object，key 为 ID
         * @param {string} tableName 表名
         * @param {string} key  列名
         * @param {Array}values 数值
         * @returns
         */


        queryIn(tableName, key, values) {
          let table = this.getTable(tableName);

          if (!table || !key) {
            return null;
          }

          let ret = {};
          let keys = Object.keys(table);
          let length = keys.length;

          for (let i = 0; i < length; i++) {
            let item = table[keys[i]];

            if (values.indexOf(item[key]) > -1) {
              ret[keys[i]] = item;
            }
          }

          return ret;
        }
        /**
         * 选出符合条件的数据。condition key 为表格的key，value 为值的数组。返回的object，key 为数据在表格的ID，value为具体数据
         * @param {string} tableName 表名
         * @param {any} condition 筛选条件
         * @returns
         */


        queryByCondition(tableName, condition) {
          if (condition.constructor !== Object) {
            return null;
          }

          let table = this.getTable(tableName);

          if (!table) {
            return null;
          }

          let ret = {};
          let tableKeys = Object.keys(table);
          let tableKeysLength = tableKeys.length;
          let keys = Object.keys(condition);
          let keysLength = keys.length;

          for (let i = 0; i < tableKeysLength; i++) {
            let item = table[tableKeys[i]];
            let fit = true;

            for (let j = 0; j < keysLength; j++) {
              let key = keys[j];
              fit = fit && condition[key] === item[key] && !ret[tableKeys[i]];
            }

            if (fit) {
              ret[tableKeys[i]] = item;
            }
          }

          return ret;
        }

        queryOneByCondition(tableName, condition) {
          if (condition.constructor !== Object) {
            return null;
          }

          let table = this.getTable(tableName);

          if (!table) {
            return null;
          }

          let keys = Object.keys(condition);
          let keysLength = keys.length;

          for (let keyName in table) {
            let item = table[keyName];
            let fit = true;

            for (let j = 0; j < keysLength; j++) {
              let key = keys[j];
              fit = fit && condition[key] === item[key];
            }

            if (fit) {
              return item;
            }
          }

          return null;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b173698d5f032f6e75d06167fe69e928a203d3de.js.map