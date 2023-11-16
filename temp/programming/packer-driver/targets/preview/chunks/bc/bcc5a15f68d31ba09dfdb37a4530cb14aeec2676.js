System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CameraComponent, Component, Quat, Vec3, GlobalConst, v3_1, Msg, MsgEvent, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, qt_1, forward, right, CameraControllerComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "../../msg/msg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgEvent(extras) {
    _reporterNs.report("MsgEvent", "../../msg/MsgEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CameraComponent = _cc.CameraComponent;
      Component = _cc.Component;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
      v3_1 = _unresolved_2.v3_1;
    }, function (_unresolved_3) {
      Msg = _unresolved_3.Msg;
    }, function (_unresolved_4) {
      MsgEvent = _unresolved_4.MsgEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4cb760qrA9GyZze+ibYTgjy", "CameraControllerComp", undefined);

      __checkObsolete__(['_decorator', 'Camera', 'CameraComponent', 'Component', 'director', 'EventTouch', 'game', 'misc', 'Node', 'Quat', 'sp', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      qt_1 = new Quat();
      forward = new Vec3();
      right = new Vec3();

      _export("CameraControllerComp", CameraControllerComp = (_dec = ccclass('CameraControllerComp'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = (_class3 = class CameraControllerComp extends Component {
        constructor() {
          super(...arguments);
          this._camera = void 0;

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "moveSpeedShiftScale", _descriptor2, this);

          _initializerDefineProperty(this, "damp", _descriptor3, this);

          _initializerDefineProperty(this, "rotateSpeed", _descriptor4, this);

          this._velocity = new Vec3();
          this._position = new Vec3();
          this._speedScale = 1;
          this.distanceY = 200;
          this._euler = new Vec3();
          this._rotaRatio = 0.05;
        }

        // 移动  单指
        // 旋转  双指
        // 缩放
        // 边界
        // 数据区间
        // 插值运算
        onLoad() {
          CameraControllerComp.ins = this;
          (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).camera = this._camera = this.node.getComponentInChildren(CameraComponent);
          Vec3.copy(this._position, this.node.getPosition());
          Vec3.copy(this._euler, this._camera.node.eulerAngles);
        }

        onEnable() {
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).on((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).UPDATE_CAMERA_POSITION, this.updateCameraPosition.bind(this));
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).on((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_ROTA, this.rotaView.bind(this));
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).on((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_SCALE, this.scaleView.bind(this));
        }

        onDisable() {
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).off((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_SCALE, this.rotaView);
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).off((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_ROTA, this.scaleView);
        }

        updateCameraPosition(vec3) {
          this._position.set(vec3);
        }
        /** 缩放 */


        scaleView(speed) {
          // Log.log("scaleView -- speed:"+speed);
          if (Math.abs(this._position.y + speed) < this.distanceY) {
            Vec3.transformQuat(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, Vec3.UNIT_Z, this._camera.node.rotation);
            Vec3.scaleAndAdd(this._position, this.node.position, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, speed);
          }
        }
        /** 旋转 */


        rotaView(vec2) {
          // 旋转看着像是地图的旋转
          return;
          Vec3.transformQuat(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, Vec3.UNIT_Z, this._camera.node.rotation);
          var x = vec2.x;
          var y = vec2.y;
          x = this._euler.x + x * this._rotaRatio;
          var max = -30;
          var min = -90;

          if (x < min || x > max) {
            if (x < min) {
              this._euler.x = min;
            }

            if (x > max) {
              this._euler.x = max;
            }

            console.log("旋转角度超标了");
            return;
          }

          this._euler.x = x;
        }

        update(dt) {
          var t = Math.min(dt / this.damp, 1); // position

          Vec3.transformQuat(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, this._velocity, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this._position, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, this.moveSpeed * this._speedScale);
          Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
          this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1);
          var moveDir = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).cameraMoveDir;

          if (moveDir.lengthSqr()) {
            Vec3.transformQuat(forward, Vec3.FORWARD, this.node.rotation);
            forward.normalize();
            Vec3.cross(right, forward, Vec3.UP);
            right.normalize();
            Vec3.scaleAndAdd(this._position, this._position, forward, this.moveSpeed * this._speedScale * moveDir.z);
            Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);
            Vec3.scaleAndAdd(this._position, this._position, right, this.moveSpeed * this._speedScale * moveDir.x);
            Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);
            Vec3.scaleAndAdd(this._position, this._position, Vec3.UP, this.moveSpeed * this._speedScale * moveDir.y);
            Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);
          } // rotation


          Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          Quat.slerp(qt_1, this._camera.node.rotation, qt_1, t);
          this._camera.node.rotation = qt_1;

          this._velocity.set();
        } //===================================================== 废弃代码============================

        /** 移动 */


        moveView(vec2) {
          console.log("转换出来的坐标:vec2 vec2", vec2.x, vec2.y);
          var scale = 1 + this._position.y / this.distanceY * 10;
          vec2.multiplyScalar(scale);

          this._velocity.set(vec2.x, 0, vec2.y); // this._camera.screenToWorld(this._velocity,this._velocity);
          // Vec3.subtract(this._velocity, this._velocity, this._position);

        }
        /** 移动 */


        moveView2(vec2) {
          console.log("转换出来的坐标:vec2 vec2", vec2.x, vec2.y);
          var scale = 1 + this._position.y / this.distanceY * 10;
          vec2.multiplyScalar(scale);

          this._velocity.set(vec2.x, 0, vec2.y); // this._camera.screenToWorld(this._velocity,this._velocity);
          // Vec3.subtract(this._velocity, this._velocity, this._position);

        }

        static test(vec2) {// console.log("转换出来的坐标:vec2 vec2", vec2.x, vec2.y);
          // v3_2.set(vec2.x, vec2.y, 0);
          // this.ins._camera.screenToWorld(v3_2,v3_1);
          // console.log("转换出来的坐标:", v3_1.x, v3_1.y, v3_1.z);
        }

      }, _class3.ins = void 0, _class3.camera = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcc5a15f68d31ba09dfdb37a4530cb14aeec2676.js.map