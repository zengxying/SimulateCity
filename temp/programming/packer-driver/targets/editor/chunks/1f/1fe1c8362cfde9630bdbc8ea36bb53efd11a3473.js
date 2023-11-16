System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Vec3, misc, GlobalConst, v2_1, v2_2, v2_3, v2_4, v3_1, v3_2, CameraControllerComp, MsgEvent, Msg, Util, MapOperateLogic, _crd, lv;

  function _reportPossibleCrUseOfIOperateHandler(extras) {
    _reporterNs.report("IOperateHandler", "./IOperateLogic", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfCameraControllerComp(extras) {
    _reporterNs.report("CameraControllerComp", "../component/mapOp/CameraControllerComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgEvent(extras) {
    _reporterNs.report("MsgEvent", "../msg/MsgEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "../msg/msg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../framework/util", _context.meta, extras);
  }

  _export("MapOperateLogic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      misc = _cc.misc;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
      v2_1 = _unresolved_2.v2_1;
      v2_2 = _unresolved_2.v2_2;
      v2_3 = _unresolved_2.v2_3;
      v2_4 = _unresolved_2.v2_4;
      v3_1 = _unresolved_2.v3_1;
      v3_2 = _unresolved_2.v3_2;
    }, function (_unresolved_3) {
      CameraControllerComp = _unresolved_3.CameraControllerComp;
    }, function (_unresolved_4) {
      MsgEvent = _unresolved_4.MsgEvent;
    }, function (_unresolved_5) {
      Msg = _unresolved_5.Msg;
    }, function (_unresolved_6) {
      Util = _unresolved_6.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7dd7bxhQXlIMaIGgcucLKGL", "MapOperateLogic", undefined);

      __checkObsolete__(['EventTouch', 'Vec2', 'Vec3', 'misc']);

      lv = 0.05;

      _export("MapOperateLogic", MapOperateLogic = class MapOperateLogic {
        constructor() {
          // 滚轮缩放的速度
          this.rotaWheelSpeed = 0.1;
          // 手指滑动方向
          this.touchDir = new Vec2();
          this._continueMoveDirty = false;
        }

        onTouchStart(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptMapOp) return console.warn("中断操作中..............."); // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }

          this._continueMoveDirty = false;
          const touches = e.getAllTouches();
          (_crd && CameraControllerComp === void 0 ? (_reportPossibleCrUseOfCameraControllerComp({
            error: Error()
          }), CameraControllerComp) : CameraControllerComp).test(e.getLocation());

          if (touches.length > 1) {
            (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
              error: Error()
            }), GlobalConst) : GlobalConst).selectBuilding = false;
          } else {
            touches[0].getLocation(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_RESET_CLICK_POINT, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
          }
        }

        onTouchMove(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptMapOp) return console.warn("中断操作中...............");
          const touches = e.getAllTouches();

          if (touches.length > 1) {
            (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
              error: Error()
            }), GlobalConst) : GlobalConst).selectBuilding = false;
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
            let angle = misc.radiansToDegrees((_crd && v2_4 === void 0 ? (_reportPossibleCrUseOfv2_4({
              error: Error()
            }), v2_4) : v2_4).signAngle(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1)); // y轴旋转

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
            let scale = 0;
            let rota = 0;

            if (curY > 0 && preY > 0) {
              rota = Math.min(curY, preY);
            } else if (curY < 0 && preY < 0) {
              rota = Math.max(curY, preY);
            }

            scale = disPre - disCur;
            (_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2).set(rota, -angle);
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
            }), v2_2) : v2_2); // Log.log("on touch move:realAngle---> ", angle, v2_4.x, v2_4.y);
          } else {
            if (this._continueMoveDirty) {
              this._continueMoveDirty = false;
              return;
            }

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
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE, _crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE_MAP, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
          }
        }

        onTouchEnd(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptMapOp) {
            console.warn("中断操作中...............");
            return;
          } // if (document.exitPointerLock) { document.exitPointerLock(); }


          const touches = e.getAllTouches(); // console.log("onTouchEnd:-->" + touches.length);

          if (touches.length >= 1) {
            // 重置记录触屏点，更新射线检测点，这样双指操作中抬起一个手指不会导致屏幕移动           
            touches[0].getLocation(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_RESET_CLICK_POINT, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
            (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).getScreenToWorld(_crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2, _crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2, lv);
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE_MAP, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
          }

          this._continueMoveDirty = true;
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE, (_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
            error: Error()
          }), v2_1) : v2_1).set(0, 0));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fe1c8362cfde9630bdbc8ea36bb53efd11a3473.js.map