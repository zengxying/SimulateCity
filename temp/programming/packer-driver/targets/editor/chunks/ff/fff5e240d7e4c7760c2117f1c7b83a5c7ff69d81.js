System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec2, Vec3, Input, input, KeyCode, v2, GlobalConst, v2_1, v2_2, v2_3, v2_4, v3_1, v3_2, Msg, MsgEvent, Util, Log, CameraControllerComp, MapOperateComp, _dec, _class, _crd, ccclass, property, OperateComp;

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_(extras) {
    _reporterNs.report("v2_1", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_2(extras) {
    _reporterNs.report("v2_2", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_3(extras) {
    _reporterNs.report("v2_3", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_4(extras) {
    _reporterNs.report("v2_4", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_2(extras) {
    _reporterNs.report("v3_2", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "../msg/msg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgEvent(extras) {
    _reporterNs.report("MsgEvent", "../msg/MsgEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "../framework/Log", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCameraControllerComp(extras) {
    _reporterNs.report("CameraControllerComp", "./CameraControllerComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapOperateComp(extras) {
    _reporterNs.report("MapOperateComp", "./MapOperateComp", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
      v2_1 = _unresolved_2.v2_1;
      v2_2 = _unresolved_2.v2_2;
      v2_3 = _unresolved_2.v2_3;
      v2_4 = _unresolved_2.v2_4;
      v3_1 = _unresolved_2.v3_1;
      v3_2 = _unresolved_2.v3_2;
    }, function (_unresolved_3) {
      Msg = _unresolved_3.Msg;
    }, function (_unresolved_4) {
      MsgEvent = _unresolved_4.MsgEvent;
    }, function (_unresolved_5) {
      Util = _unresolved_5.Util;
    }, function (_unresolved_6) {
      Log = _unresolved_6.Log;
    }, function (_unresolved_7) {
      CameraControllerComp = _unresolved_7.CameraControllerComp;
    }, function (_unresolved_8) {
      MapOperateComp = _unresolved_8.MapOperateComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffbccfZDRdO95NQFcREjXiF", "OperateComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec2', 'Vec3', 'Input', 'game', 'EventTouch', 'EventMouse', 'input', 'EventKeyboard', 'KeyCode', 'v2', 'misc']);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("OperateComp", OperateComp = (_dec = ccclass('OperateComp'), _dec(_class = class OperateComp extends Component {
        constructor(...args) {
          super(...args);
          // 滚轮缩放的速度
          this.rotaWheelSpeed = 0.1;
          // 手指滑动方向
          this.touchDir = new Vec2();
          this.keys = [];
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
          console.log(`滚轮滚动的参数 getScrollX：${e.getScrollX()}  getScrollY:${e.getScrollY()}`);
          const delta = -e.getScrollY() * this.rotaWheelSpeed * 0.1; // delta is positive when scroll down

          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_SCALE, delta); // // // 将数据放出去
          // Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          // Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        }

        onTouchStart(e) {
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_ROTA, (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
            error: Error()
          }), v2_2) : v2_2).set(0, 0.1));
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中..............."); // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }

          const touches = e.getAllTouches();
          (_crd && CameraControllerComp === void 0 ? (_reportPossibleCrUseOfCameraControllerComp({
            error: Error()
          }), CameraControllerComp) : CameraControllerComp).test(e.getLocation());

          if (touches.length > 1) {} else {}
        }

        onTouchMove(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中...............");
          const touches = e.getAllTouches();

          if (touches.length > 1) {
            touches[0].getPreviousLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            touches[1].getPreviousLocation(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            let disPre = Vec2.distance(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            Vec2.subtract(_crd && v2_3 === void 0 ? (_reportPossibleCrUseOfv2_3({
              error: Error()
            }), v2_3) : v2_3, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2, _crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            touches[0].getPreviousLocation(_crd && v2_4 === void 0 ? (_reportPossibleCrUseOfv2_4({
              error: Error()
            }), v2_4) : v2_4).subtract(touches[1].getPreviousLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1));
            touches[0].getLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1).subtract(touches[1].getLocation(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2));
            let angle = (_crd && v2_4 === void 0 ? (_reportPossibleCrUseOfv2_4({
              error: Error()
            }), v2_4) : v2_4).signAngle(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1); // y轴旋转

            let preY = touches[0].getDelta(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).y;
            let curY = touches[1].getDelta(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1).y;
            touches[0].getLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            touches[1].getLocation(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            let disCur = Vec2.distance(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            Vec2.subtract(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2, _crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            let realAngle = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getAngleBetweenVectors(_crd && v2_3 === void 0 ? (_reportPossibleCrUseOfv2_3({
              error: Error()
            }), v2_3) : v2_3, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2); // y轴旋转
            // let angle = 0;

            let scale = 0;
            let rota = 0; // if (curY > 0 && preY > 0) {
            //     angle = realAngle;
            //     // rota = Math.min(curY, preY);
            // } else if (curY < 0 && preY < 0) {
            //     angle = realAngle;
            //     // rota = Math.max(curY, preY);
            // } else {
            // }

            scale = disPre - disCur;
            (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).set(rota, angle);
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_SCALE, scale * 0.1);
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_ROTA, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log("on touch move:realAngle---> ", angle, (_crd && v2_4 === void 0 ? (_reportPossibleCrUseOfv2_4({
              error: Error()
            }), v2_4) : v2_4).x, (_crd && v2_4 === void 0 ? (_reportPossibleCrUseOfv2_4({
              error: Error()
            }), v2_4) : v2_4).y);
          } else {
            const lv = 0.05;
            touches[0].getPreviousLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getScreenToWorld(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, lv);
            touches[0].getLocation(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getScreenToWorld(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2, _crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2, lv);
            Vec3.subtract(_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, _crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2);
            (_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1).set((_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2).x, (_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2).z);
            e.getDelta(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).y *= -1;
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE, _crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            touches[0].getStartLocation(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getScreenToWorld(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, lv);
            touches[0].getLocation(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getScreenToWorld(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2, _crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2, lv);
            Vec3.subtract(_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, _crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2);
            let dis = Vec3.distance(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, _crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2);
            console.log("总的移动长度：----> " + dis);
          } // if (v2_1.x > game.canvas.width * 0.4) { // rotation
          //     e.getDelta(v2_2);
          //     this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
          //     this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          // } else { // position
          //     e.getDelta(v2_2);
          //     this._eulerP.y -= v2_2.x * this.rotateSpeed * 0.1;
          //     this._eulerP.x += v2_2.y * this.rotateSpeed * 0.1;
          // }

        }

        onTouchEnd(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中..............."); // if (document.exitPointerLock) { document.exitPointerLock(); }

          const touches = e.getAllTouches();

          if (touches.length <= 1) {
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE, (_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1).set(0, 0));
          }
        }

        // x  -1 left, +1 right   y -1 backword, +1 forward
        onKeyDown(event) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中...............");
          let keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this.keys.indexOf(keyCode) == -1) {
              this.keys.push(keyCode);
              this.updateDirection();
            }
          }

          if (keyCode == KeyCode.KEY_Q) {
            (_crd && MapOperateComp === void 0 ? (_reportPossibleCrUseOfMapOperateComp({
              error: Error()
            }), MapOperateComp) : MapOperateComp).ins.testRotaPos(10); // GlobalConst.cameraMoveDir.y = -1;
          } else if (keyCode == KeyCode.KEY_E) {
            (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
              error: Error()
            }), GlobalConst) : GlobalConst).cameraMoveDir.y = 1;
          }
        }

        onKeyUp(event) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptOp) return console.warn("中断操作中...............");
          let keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            let index = this.keys.indexOf(keyCode);

            if (index != -1) {
              this.keys.splice(index, 1);
              this.updateDirection();
            }
          }

          if (keyCode == KeyCode.KEY_Q || keyCode == KeyCode.KEY_E) {// GlobalConst.cameraMoveDir.y = 0;
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

          let keyCode0 = this.keys[this.keys.length - 1] || 0;
          let keyCode1 = this.keys[this.keys.length - 2] || 0;
          let dir = this.key2dirMap[keyCode1 * 1000 + keyCode0];
          (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).cameraMoveDir.x = dir.x;
          (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).cameraMoveDir.z = dir.y;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fff5e240d7e4c7760c2117f1c7b83a5c7ff69d81.js.map