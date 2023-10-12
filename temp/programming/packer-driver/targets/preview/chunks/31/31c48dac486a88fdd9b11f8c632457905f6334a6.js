System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Quat, Vec3, Input, game, input, KeyCode, v2, v3_1, v2_1, v2_2, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, qt_1, forward, right, FreeCamera;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_(extras) {
    _reporterNs.report("v2_1", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_2(extras) {
    _reporterNs.report("v2_2", "../GlobalConst", _context.meta, extras);
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
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      Input = _cc.Input;
      game = _cc.game;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      v3_1 = _unresolved_2.v3_1;
      v2_1 = _unresolved_2.v2_1;
      v2_2 = _unresolved_2.v2_2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f57aW2SqhPbIX8fEclaWub", "FreeCamera", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec2', 'Vec3', 'Input', 'game', 'EventTouch', 'EventMouse', 'input', 'EventKeyboard', 'KeyCode', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);
      qt_1 = new Quat();
      forward = new Vec3();
      right = new Vec3();
      /**
       * 没有双指操作
       */

      _export("FreeCamera", FreeCamera = (_dec = ccclass('tgxFreeCamera'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = class FreeCamera extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "moveSpeedShiftScale", _descriptor2, this);

          _initializerDefineProperty(this, "damp", _descriptor3, this);

          _initializerDefineProperty(this, "rotateSpeed", _descriptor4, this);

          this._euler = new Vec3();
          this._velocity = new Vec3();
          this._position = new Vec3();
          this._speedScale = 1;
          this._eulerP = new Vec3();
          this.keys = [];
          // x  -1 left, +1 right   y -1 backword, +1 forward
          this.moveDir = new Vec3();
          this.key2dirMap = null;
        }

        onLoad() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.getPosition());
          Vec3.copy(this._eulerP, this.node.eulerAngles);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onDestroy() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
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

          if (this.moveDir.lengthSqr()) {
            Vec3.transformQuat(forward, Vec3.FORWARD, this.node.rotation);
            forward.normalize();
            Vec3.cross(right, forward, Vec3.UP);
            right.normalize();
            Vec3.scaleAndAdd(this._position, this._position, forward, this.moveSpeed * this._speedScale * this.moveDir.z);
            Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);
            Vec3.scaleAndAdd(this._position, this._position, right, this.moveSpeed * this._speedScale * this.moveDir.x);
            Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);
            Vec3.scaleAndAdd(this._position, this._position, Vec3.UP, this.moveSpeed * this._speedScale * this.moveDir.y);
            Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);
          } // rotation


          Quat.fromEuler(qt_1, this._eulerP.x, this._eulerP.y, this._eulerP.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.rotation = qt_1; // this.node.setWorldRotationFromEuler(this._eulerP.x, this._eulerP.y, this._eulerP.z);
        }

        onMouseWheel(e) {
          var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down

          Vec3.transformQuat(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, delta);
        }

        onTouchStart(e) {
          if (game.canvas.requestPointerLock) {
            game.canvas.requestPointerLock();
          }
        }

        onTouchMove(e) {
          e.getStartLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
            error: Error()
          }), v2_1) : v2_1);
          console.log("v2_1.x > game.canvas.width * 0.4  " + (_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
            error: Error()
          }), v2_1) : v2_1).x + " > " + game.canvas.width * 0.4);

          if ((_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
            error: Error()
          }), v2_1) : v2_1).x > game.canvas.width * 0.4) {
            // rotation
            e.getDelta(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            this._eulerP.y -= (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).x * this.rotateSpeed * 0.1;
            this._eulerP.x += (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).y * this.rotateSpeed * 0.1;
          } else {
            // position
            e.getDelta(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            this._eulerP.y -= (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).x * this.rotateSpeed * 0.1;
            this._eulerP.x += (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).y * this.rotateSpeed * 0.1;
          }
        }

        onTouchEnd(e) {
          if (document.exitPointerLock) {
            document.exitPointerLock();
          }

          e.getStartLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
            error: Error()
          }), v2_1) : v2_1);

          if ((_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
            error: Error()
          }), v2_1) : v2_1).x < game.canvas.width * 0.4) {
            // position
            this._velocity.x = 0;
            this._velocity.z = 0;
          }
        }

        onKeyDown(event) {
          var keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this.keys.indexOf(keyCode) == -1) {
              this.keys.push(keyCode);
              this.updateDirection();
            }
          }

          if (keyCode == KeyCode.KEY_Q) {
            this.moveDir.y = -1;
          } else if (keyCode == KeyCode.KEY_E) {
            this.moveDir.y = 1;
          }
        }

        onKeyUp(event) {
          var keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            var index = this.keys.indexOf(keyCode);

            if (index != -1) {
              this.keys.splice(index, 1);
              this.updateDirection();
            }
          }

          if (keyCode == KeyCode.KEY_Q || keyCode == KeyCode.KEY_E) {
            this.moveDir.y = 0;
          }
        }

        updateDirection() {
          if (this.key2dirMap == null) {
            this.key2dirMap = {};
            this.key2dirMap[0] = v2(0, 0);
            this.key2dirMap[KeyCode.KEY_A] = v2(-1, 0);
            this.key2dirMap[KeyCode.KEY_D] = v2(1, 0);
            this.key2dirMap[KeyCode.KEY_W] = v2(0, 1);
            this.key2dirMap[KeyCode.KEY_S] = v2(0, -1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_A] = v2(-1, 1);
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_D] = v2(1, 1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_A] = v2(-1, -1);
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_D] = v2(1, -1);
            this.key2dirMap[KeyCode.KEY_A * 1000 + KeyCode.KEY_D] = this.key2dirMap[KeyCode.KEY_D];
            this.key2dirMap[KeyCode.KEY_D * 1000 + KeyCode.KEY_A] = this.key2dirMap[KeyCode.KEY_A];
            this.key2dirMap[KeyCode.KEY_W * 1000 + KeyCode.KEY_S] = this.key2dirMap[KeyCode.KEY_S];
            this.key2dirMap[KeyCode.KEY_S * 1000 + KeyCode.KEY_W] = this.key2dirMap[KeyCode.KEY_W];
          }

          var keyCode0 = this.keys[this.keys.length - 1] || 0;
          var keyCode1 = this.keys[this.keys.length - 2] || 0;
          var dir = this.key2dirMap[keyCode1 * 1000 + keyCode0];
          this.moveDir.x = dir.x;
          this.moveDir.z = dir.y;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
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
//# sourceMappingURL=31c48dac486a88fdd9b11f8c632457905f6334a6.js.map