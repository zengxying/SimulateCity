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
        static log() {
          console.log(...arguments);
        }

        static warn() {
          console.warn(...arguments);
        }

        static error() {
          console.error(...arguments);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9492fabc870758de4acae695e8b64bc6b21a28b.js.map