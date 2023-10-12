System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Quat, Vec2, Vec3, Input, game, input, KeyCode, v2, GlobalConst, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, v2_1, v2_2, v3_1, qt_1, forward, right, OperateComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../GlobalConst", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Input = _cc.Input;
      game = _cc.game;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffbccfZDRdO95NQFcREjXiF", "OperateComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec2', 'Vec3', 'Input', 'game', 'EventTouch', 'EventMouse', 'input', 'EventKeyboard', 'KeyCode', 'v2']);

      ({
        ccclass,
        property
      } = _decorator);
      v2_1 = new Vec2();
      v2_2 = new Vec2();
      v3_1 = new Vec3();
      qt_1 = new Quat();
      forward = new Vec3();
      right = new Vec3();
      /**
       * 
      11.双指缩放，旋转  同时触发 也就是说有距离移动就缩放，有方向变化就旋转
      
      1.建造物的拖拽
      2.从ui拖出一个建筑物
      3.建造物各种状态的实时切换，不能放置，等
      
      4.滑动和点击的区分，用于建造时是切换建造物的位置还是移动视野
      5.长按建造物触发建筑物位置切换操作
      6.点击ui触发ui事件
      7.如果建造物的ui是3d的ui是否可用于触摸点击  或者是2d的ui怎么处理变化
      8.产出物品的拾取
      9.建造物升级添加材料的操作
      10.建筑物的回收操作
      12.玩家不同的操作对于3d世界的影响，各种颜色变换滤镜等
      (1)可支持的3d场景面数，精细度		
      (2)选中房屋拖动时 房屋类型的建筑物会保持原有颜色，其他地图物体变换成灰色 这块的处理规则那就是保持个类型建造的引用封装处理，也可以实现倒是
      (3)各种建筑物的状态，生产，还是定时开启等
       */

      _export("OperateComp", OperateComp = (_dec = ccclass('OperateComp'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = class OperateComp extends Component {
        constructor() {
          super(...arguments);
          // 滚轮缩放的速度
          this.rotaWheelSpeed = 0.1;

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
          // public update (dt: number) {
          //     const t = Math.min(dt / this.damp, 1);
          //     // position
          //     Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
          //     Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
          //     Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
          //     this.node.setPosition(v3_1);
          //     if(this.moveDir.lengthSqr()){
          //         Vec3.transformQuat(forward, Vec3.FORWARD, this.node.rotation);
          //         forward.normalize();
          //         Vec3.cross(right, forward, Vec3.UP);
          //         right.normalize();
          //         Vec3.scaleAndAdd(this._position, this._position, forward, this.moveSpeed * this._speedScale * this.moveDir.z);
          //         Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
          //         this.node.setPosition(v3_1);
          //         Vec3.scaleAndAdd(this._position, this._position, right, this.moveSpeed * this._speedScale * this.moveDir.x);
          //         Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
          //         this.node.setPosition(v3_1);
          //         Vec3.scaleAndAdd(this._position, this._position, Vec3.UP, this.moveSpeed * this._speedScale * this.moveDir.y);
          //         Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
          //         this.node.setPosition(v3_1);
          //     }
          //     // rotation
          //     Quat.fromEuler(qt_1, this._eulerP.x, this._eulerP.y, this._eulerP.z);
          //     Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          //     this.node.setWorldRotationFromEuler(this._eulerP.x, this._eulerP.y, this._eulerP.z);
          // }
          this.key2dirMap = null;
        }

        onLoad() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onDestroy() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onMouseWheel(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中...............");
          console.log("\u6EDA\u8F6E\u6EDA\u52A8\u7684\u53C2\u6570 getScrollX\uFF1A" + e.getScrollX() + "  getScrollY:" + e.getScrollY());
          var delta = -e.getScrollY() * this.rotaWheelSpeed * 0.1; // delta is positive when scroll down
          // // 将数据放出去

          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        }

        onTouchStart(e) {
          console.log("ui  2d节点上的 触摸事件触发了  相机操作节点  --> TOUCH_START");
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中..............."); // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }
        }

        onTouchMove(e) {
          console.log("ui  2d节点上的 触摸事件触发了  相机操作节点  --> TOUCH_Move");
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中...............");
          e.getStartLocation(v2_1);

          if (v2_1.x > game.canvas.width * 0.4) {
            // rotation
            e.getDelta(v2_2);
            this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          } else {
            // position
            e.getDelta(v2_2);
            this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          }
        }

        onTouchEnd(e) {
          console.log("ui  2d节点上的 触摸事件触发了  相机操作节点  --> TOUCH_END");
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中..............."); // if (document.exitPointerLock) { document.exitPointerLock(); }

          e.getStartLocation(v2_1);

          if (v2_1.x < game.canvas.width * 0.4) {
            // position
            this._velocity.x = 0;
            this._velocity.z = 0;
          }
        }

        onKeyDown(event) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中...............");
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
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中...............");
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
//# sourceMappingURL=f1e03129fb6df78d93345edd71799cf8227ef47d.js.map