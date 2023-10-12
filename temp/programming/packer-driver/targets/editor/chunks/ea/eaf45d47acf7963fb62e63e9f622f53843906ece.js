System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Quat, Vec2, Vec3, _dec, _class, _crd, ccclass, property, v2_1, v2_2, qt_1, forward, right, MapOperateComp;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Quat = _cc.Quat;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb0fcO/QBdJ548HPwB0yVPC", "MapOperateComp", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'CameraComponent', 'Component', 'director', 'EventTouch', 'game', 'Node', 'Quat', 'sp', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      v2_1 = new Vec2();
      v2_2 = new Vec2();
      qt_1 = new Quat();
      forward = new Vec3();
      right = new Vec3();

      _export("MapOperateComp", MapOperateComp = (_dec = ccclass('MapOperateComp'), _dec(_class = class MapOperateComp extends Component {
        constructor(...args) {
          super(...args);
          this._camera = void 0;
          this._rotation = new Quat();
        }

        onLoad() {
          Quat.copy(this._rotation, this.node.rotation);
        }
        /** 移动 */


        moveView(vec2) {}
        /** 旋转 */


        rotaView(vec2) {
          // 旋转看着像是地图的旋转
          let x = vec2.x;
          let y = vec2.y;
          Quat.rotateAround(this._rotation, this._rotation, this.node.forward, y);
          Quat.rotateAround(this._rotation, this._rotation, this.node.right, x); // if (this._eulerP.x + x < -30 && this._eulerP.x + x > -90) { // x处角度的旋转限制 测试使用
          //     this._eulerP.x += x;
          // }
          // this._eulerP.y += y;
        }

        update(dt) {
          // rotation
          Quat.slerp(qt_1, this._camera.node.rotation, this._rotation, dt);
          this._camera.node.rotation = qt_1;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eaf45d47acf7963fb62e63e9f622f53843906ece.js.map