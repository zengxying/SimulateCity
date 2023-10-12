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

      _export("parseCSV", parseCSV = function (csv) {
        const resultArr = []; // 数组格式
        // 分割行

        const lines = csv.split('\n'); // 格式

        const formats = lines[1].split(','); // 表头

        const headers = lines[2].split(',');

        for (let i = 0, l = headers.length; i < l; i++) {
          headers[i] = headers[i].replace(/\n|\r/g, '');
        }

        for (let i = 3, l = lines.length - 1; i < l; i++) {
          const obj = {};
          const currentline = lines[i].split(",");

          if (currentline.length !== headers.length) {
            console.warn('csv中行的长度不等于表头的长度');
            continue;
          }

          for (let j = 0, l = headers.length; j < l; j++) {
            let val = currentline[j];

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
//# sourceMappingURL=22d8b4b313710175c9e122004fce654121d98d5a.js.map