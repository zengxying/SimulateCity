System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Vec3, geometry, GlobalConst, _crd, v2_1, v2_2, v2_3, v2_4, v3_1, v3_2, v3_3, ray;

  _export("GlobalConst", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      geometry = _cc.geometry;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75dd9YcQs9EfYi9NYLJtFBx", "GlobalConst", undefined);

      __checkObsolete__(['Camera', 'Vec2', 'Vec3', 'geometry']);

      _export("GlobalConst", GlobalConst = class GlobalConst {});

      /** 是否中断相机的操作 */
      GlobalConst.interruptOp = false;

      /** 相机移动的方向 */
      GlobalConst.cameraMoveDir = new Vec3();
      GlobalConst.camera = void 0;

      _export("v2_1", v2_1 = new Vec2());

      _export("v2_2", v2_2 = new Vec2());

      _export("v2_3", v2_3 = new Vec2());

      _export("v2_4", v2_4 = new Vec2());

      _export("v3_1", v3_1 = new Vec3());

      _export("v3_2", v3_2 = new Vec3());

      _export("v3_3", v3_3 = new Vec3());

      _export("ray", ray = new geometry.Ray());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5fdf8452ccca0c3ea140d7894b0a6132a55d450f.js.map