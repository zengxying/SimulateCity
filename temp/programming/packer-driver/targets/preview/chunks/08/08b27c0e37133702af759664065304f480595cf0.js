System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, parseCSV;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6b65H8TEJImJVZbF2ulmkL", "csv2json", undefined);

      _export("parseCSV", parseCSV = function parseCSV(csv) {
        var resultArr = []; // 数组格式
        // 分割行

        var lines = csv.split('\n'); // 格式

        var formats = lines[1].split(','); // 表头

        var headers = lines[2].split(',');

        for (var i = 0, l = headers.length; i < l; i++) {
          headers[i] = headers[i].replace(/\n|\r/g, '');
        }

        for (var _i = 3, _l = lines.length - 1; _i < _l; _i++) {
          var obj = {};

          var currentline = lines[_i].split(",");

          if (currentline.length !== headers.length) {
            console.warn('csv中行的长度不等于表头的长度');
            continue;
          }

          for (var j = 0, _l2 = headers.length; j < _l2; j++) {
            var val = currentline[j];

            if (formats[j].startsWith('n')) {
              val = Number(val);
            } else {
              val = val.replace(/[\n|\r]/g, '');
            }

            obj[headers[j]] = val;
          } // resultObj[obj[headers[0]]] = obj;


          resultArr.push(obj);
        }

        return resultArr; // JavaScript object
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=08b27c0e37133702af759664065304f480595cf0.js.map