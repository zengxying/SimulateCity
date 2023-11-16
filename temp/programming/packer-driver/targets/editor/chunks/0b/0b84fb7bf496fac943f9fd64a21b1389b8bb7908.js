System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Log, _crd;

  _export("Log", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9163f81r49G3JuniIuPFAc2", "Log", undefined);

      _export("Log", Log = class Log {
        static log(...data) {
          console.log(...data);
        }

        static warn(...data) {
          console.warn(...data);
        }

        static error(...data) {
          console.error(...data);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b84fb7bf496fac943f9fd64a21b1389b8bb7908.js.map