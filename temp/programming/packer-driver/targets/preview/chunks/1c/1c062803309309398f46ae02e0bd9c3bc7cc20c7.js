System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Msg, _crd;

  _export("Msg", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67a38mOSWNH2YAjqnIAO/fp", "msg", undefined);

      __checkObsolete__(['Vec3']);

      /**
       * Msg
       */
      _export("Msg", Msg = class Msg {
        static on(key, fun) {
          if (!this._map[key]) {
            this._map[key] = [];
          }

          this._map[key].push(fun);
        }

        static bind(key, fun, target) {
          fun = fun.bind(target);

          if (!this._map[key]) {
            this._map[key] = [];
          }

          this._map[key].push(fun);
        }

        static off(key, fun) {
          if (fun === null) {
            this._map[key] = [];
          } else {
            var index = this._map[key].indexOf(fun);

            this._map[key].splice(index, 1);
          }
        }

        static emit(key, data) {
          var info = this._map[key];

          if (info) {
            info.forEach(item => {
              item(data);
            });
          } else {//console.warn('Not register key:' + key);
          }
        }

      });

      Msg._map = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1c062803309309398f46ae02e0bd9c3bc7cc20c7.js.map