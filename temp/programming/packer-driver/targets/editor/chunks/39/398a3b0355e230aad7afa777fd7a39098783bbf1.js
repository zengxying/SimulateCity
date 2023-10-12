System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, geometry, misc, Node, PhysicsSystem, Quat, screen, Vec3, v3_1, v3_2, v3_3, Msg, MsgEvent, CameraControllerComp, Res, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, qt_1, MapOperateComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_2(extras) {
    _reporterNs.report("v3_2", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_3(extras) {
    _reporterNs.report("v3_3", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "../msg/msg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgEvent(extras) {
    _reporterNs.report("MsgEvent", "../msg/MsgEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCameraControllerComp(extras) {
    _reporterNs.report("CameraControllerComp", "./CameraControllerComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRes(extras) {
    _reporterNs.report("Res", "../res", _context.meta, extras);
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
      geometry = _cc.geometry;
      misc = _cc.misc;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      Quat = _cc.Quat;
      screen = _cc.screen;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      v3_1 = _unresolved_2.v3_1;
      v3_2 = _unresolved_2.v3_2;
      v3_3 = _unresolved_2.v3_3;
    }, function (_unresolved_3) {
      Msg = _unresolved_3.Msg;
    }, function (_unresolved_4) {
      MsgEvent = _unresolved_4.MsgEvent;
    }, function (_unresolved_5) {
      CameraControllerComp = _unresolved_5.CameraControllerComp;
    }, function (_unresolved_6) {
      Res = _unresolved_6.Res;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb0fcO/QBdJ548HPwB0yVPC", "MapOperateComp", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'CameraComponent', 'Component', 'director', 'EventTouch', 'game', 'geometry', 'misc', 'Node', 'PhysicsSystem', 'Quat', 'screen', 'sp', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      qt_1 = new Quat();

      _export("MapOperateComp", MapOperateComp = (_dec = ccclass('MapOperateComp'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = class MapOperateComp extends Component {
        constructor(...args) {
          super(...args);
          this._eulerP = new Vec3();
          this._cameraRay = new geometry.Ray();
          this._centerPoint = new Vec3();
          this._position = new Vec3();

          _initializerDefineProperty(this, "damp", _descriptor, this);

          _initializerDefineProperty(this, "sphere", _descriptor2, this);

          this._rotaAxisDirty = true;
          this.testRadian = 0;
        }

        onLoad() {
          MapOperateComp.ins = this;
          Vec3.copy(this._eulerP, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.position);
        }

        onEnable() {
          this.calculateRotaAxis();
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).on((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_ROTA, this.rotaView.bind(this));
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).on((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE, this._resetRotaAxisDirty.bind(this));
        }

        onDisable() {
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).off((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_ROTA);
        }

        _resetRotaAxisDirty() {
          this._rotaAxisDirty = true;
        }
        /**
         * 计算旋转的轴
         */


        calculateRotaAxis() {
          if (!this._rotaAxisDirty) return;
          this._rotaAxisDirty = false;
          const camera = (_crd && CameraControllerComp === void 0 ? (_reportPossibleCrUseOfCameraControllerComp({
            error: Error()
          }), CameraControllerComp) : CameraControllerComp).camera;
          camera.screenPointToRay(screen.windowSize.width / 2, screen.windowSize.height / 2, this._cameraRay);

          if (PhysicsSystem.instance.raycast(this._cameraRay)) {
            const r = PhysicsSystem.instance.raycastResults;

            for (let i = 0; i < r.length; i++) {
              const item = r[i];

              if (item.collider.node.uuid == this.node.uuid) {
                // 射线检测到自己了
                this._centerPoint.set(item.hitPoint);
              }
            }

            console.log("射线检测:", r);
          } else {
            console.log("射线检测:fail");
          }

          if (this.sphere) {
            this.sphere.setPosition(this._centerPoint);
          }
        }
        /** 旋转 */


        rotaView(vec2) {
          // 旋转看着像是地图的旋转
          this.calculateRotaAxis();
          let x = vec2.x;
          let y = vec2.y;

          this._calculateRotaPos(y); // console.log("yyyy----->" + y);
          // this._calculateRotaPos2(y);
          // Quat.rotateAround(this._rotation, this._rotation, this.node.forward, y);
          // Quat.rotateAround(this._rotation, this._rotation, this.node.right, x);
          // if (this._eulerP.x + x < -30 && this._eulerP.x + x > -90) { // x处角度的旋转限制 测试使用
          //     this._eulerP.x += x;
          // }
          // this._eulerP.y += y;

        }

        _calculateRotaPos2(y) {
          this._eulerP.y += y;
          this.node.getPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1);
          Vec3.subtract(_crd && v3_3 === void 0 ? (_reportPossibleCrUseOfv3_3({
            error: Error()
          }), v3_3) : v3_3, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, this._centerPoint);
          Vec3.rotateY(_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
            error: Error()
          }), v3_2) : v3_2, _crd && v3_3 === void 0 ? (_reportPossibleCrUseOfv3_3({
            error: Error()
          }), v3_3) : v3_3, Vec3.UP, y);

          this._position.set(this._centerPoint.add(_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
            error: Error()
          }), v3_2) : v3_2));
        }

        _calculateRotaPos(radian) {
          this._eulerP.y += radian; // 获取物体相对于旋转中心的位置

          const localPosition = this.node.getPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).subtract(this._centerPoint); // 计算旋转后的位置  每次旋转的值加上本身的旋转度数

          const angle = misc.degreesToRadians(this._eulerP.y); // 转换成弧度 

          const cosAngle = Math.cos(angle);
          const sinAngle = Math.sin(angle);
          const newX = localPosition.x * cosAngle - localPosition.z * sinAngle;
          const newZ = localPosition.x * sinAngle + localPosition.z * cosAngle; // 更新物体的位置

          this._position.set(newX + this._centerPoint.x, this._position.y, newZ + this._centerPoint.z); // 使物体朝向旋转中心
          // v3_1.set(this.node.eulerAngles)
          // this.node.lookAt(this._centerPoint, Vec3.UP);
          // this._eulerP.set(this.node.eulerAngles);
          // this.node.eulerAngles = v3_1;

        }

        testRotaPos(radian) {
          this.testRadian += radian; // 获取物体相对于旋转中心的位置

          const localPosition = this.node.getPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).subtract(this._centerPoint); // 计算旋转后的位置  每次旋转的值加上本身的旋转度数

          const angle = misc.degreesToRadians(this.testRadian); // 转换成弧度 

          const cosAngle = Math.cos(angle);
          const sinAngle = Math.sin(angle);
          const newX = localPosition.x * cosAngle - localPosition.z * sinAngle;
          const newZ = localPosition.x * sinAngle + localPosition.z * cosAngle; // 更新物体的位置

          this._position.set(newX + this._centerPoint.x, this._position.y, newZ + this._centerPoint.z);

          (_crd && Res === void 0 ? (_reportPossibleCrUseOfRes({
            error: Error()
          }), Res) : Res).instNode(this.sphere, this.node.parent, this._position); // 使物体朝向旋转中心
          // v3_1.set(this.node.eulerAngles)
          // this.node.lookAt(this._centerPoint, Vec3.UP);
          // this._eulerP.set(this.node.eulerAngles);
          // this.node.eulerAngles = v3_1;
        }

        update(dt) {
          const t = Math.min(dt / this.damp, 1); // this.updateRotation(t);
          // // position

          Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
          this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1);
        }

        updateRotation(t) {
          //TODO 参考Laya吧 
          // rotation
          Quat.fromEuler(qt_1, this._eulerP.x, this._eulerP.y, this._eulerP.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.rotation = qt_1;
        }

      }, _class3.ins = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sphere", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=398a3b0355e230aad7afa777fd7a39098783bbf1.js.map