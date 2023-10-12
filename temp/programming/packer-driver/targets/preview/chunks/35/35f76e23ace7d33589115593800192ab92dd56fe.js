System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CameraComponent, Component, director, _dec, _class, _crd, ccclass, property, CameraControllerComp;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CameraComponent = _cc.CameraComponent;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc872N+IFpPQq5s/yV3Ngru", "CameraControllerComp", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'CameraComponent', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CameraControllerComp", CameraControllerComp = (_dec = ccclass('CameraControllerComp'), _dec(_class = class CameraControllerComp extends Component {
        constructor() {
          super(...arguments);
          this._camera = void 0;
        }

        // 移动  单指
        // 旋转  双指
        // 缩放
        // 边界
        // 数据区间
        // 插值运算
        onLoad() {
          this._camera = director.getScene().getComponentInChildren(CameraComponent);
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=35f76e23ace7d33589115593800192ab92dd56fe.js.map