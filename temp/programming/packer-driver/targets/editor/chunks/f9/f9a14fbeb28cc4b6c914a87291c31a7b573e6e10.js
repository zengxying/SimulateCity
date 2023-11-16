System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, BuildingComp;

  function _reportPossibleCrUseOfBuildingData(extras) {
    _reporterNs.report("BuildingData", "../../data/BuildingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingStateType(extras) {
    _reporterNs.report("BuildingStateType", "../../data/EnumIndex", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00ee3w19x1G44WzIBSZAbIH", "BuildingComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec2', 'Vec3', 'Input', 'game', 'EventTouch', 'EventMouse', 'input', 'EventKeyboard', 'KeyCode', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuildingComp", BuildingComp = (_dec = ccclass('BuildingComp'), _dec(_class = class BuildingComp extends Component {
        constructor(...args) {
          super(...args);
          this.data = void 0;
        }

        changeState(state) {
          this.data.state = state; // ui展示
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9a14fbeb28cc4b6c914a87291c31a7b573e6e10.js.map