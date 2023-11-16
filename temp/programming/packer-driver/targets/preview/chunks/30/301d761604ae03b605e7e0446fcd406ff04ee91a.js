System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BuildingData, _crd;

  function _reportPossibleCrUseOfBuildingStateType(extras) {
    _reporterNs.report("BuildingStateType", "./EnumIndex", _context.meta, extras);
  }

  _export("BuildingData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c090BmfdlFIrR8nEKCUTF7", "BuildingData", undefined);

      _export("BuildingData", BuildingData = class BuildingData {
        constructor() {
          /** 横向宽度 */
          this.widthx = void 0;

          /** 纵向高度 */
          this.heightz = void 0;
          this.lv = void 0;

          /** 用于区分建筑物的显示模型等 */
          this.id = void 0;

          /** 操作状态 */
          this.state = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=301d761604ae03b605e7e0446fcd406ff04ee91a.js.map