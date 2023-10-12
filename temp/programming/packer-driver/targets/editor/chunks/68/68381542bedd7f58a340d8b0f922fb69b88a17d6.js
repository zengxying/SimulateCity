System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, GlobalConst, _crd;

  _export("GlobalConst", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75dd9YcQs9EfYi9NYLJtFBx", "GlobalConst", undefined);

      __checkObsolete__(['Vec3']);

      _export("GlobalConst", GlobalConst = class GlobalConst {});

      /** 是否中断相机的操作 */
      GlobalConst.interruptOp = false;

      /** 相机移动的方向 */
      GlobalConst.cameraMoveDir = new Vec3();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68381542bedd7f58a340d8b0f922fb69b88a17d6.js.map