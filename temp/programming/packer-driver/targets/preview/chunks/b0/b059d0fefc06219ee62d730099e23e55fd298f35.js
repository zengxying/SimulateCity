System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec2, Input, input, v3, GlobalConst, v2_1, v2_2, v3_1, MsgEvent, Msg, Util, _dec, _class, _crd, ccclass, property, BuildingOperateState, BuildingOperateComp;

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_(extras) {
    _reporterNs.report("v2_1", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_2(extras) {
    _reporterNs.report("v2_2", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgEvent(extras) {
    _reporterNs.report("MsgEvent", "../../msg/MsgEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "../../msg/msg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../framework/util", _context.meta, extras);
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
      Input = _cc.Input;
      input = _cc.input;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
      v2_1 = _unresolved_2.v2_1;
      v2_2 = _unresolved_2.v2_2;
      v3_1 = _unresolved_2.v3_1;
    }, function (_unresolved_3) {
      MsgEvent = _unresolved_3.MsgEvent;
    }, function (_unresolved_4) {
      Msg = _unresolved_4.Msg;
    }, function (_unresolved_5) {
      Util = _unresolved_5.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d332R8Fr9EVZJc6LSa4oKY", "BuildingOperateComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec2', 'Vec3', 'Input', 'game', 'EventTouch', 'EventMouse', 'input', 'EventKeyboard', 'KeyCode', 'v2', 'v3', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      BuildingOperateState = /*#__PURE__*/function (BuildingOperateState) {
        BuildingOperateState[BuildingOperateState["NONE"] = 0] = "NONE";
        BuildingOperateState[BuildingOperateState["LONG_TOUCH_CHECK"] = 1] = "LONG_TOUCH_CHECK";
        BuildingOperateState[BuildingOperateState["LONG_TOUCH_RUNNING"] = 2] = "LONG_TOUCH_RUNNING";
        BuildingOperateState[BuildingOperateState["SHORT_TOUCH_RUNNING"] = 3] = "SHORT_TOUCH_RUNNING";
        return BuildingOperateState;
      }(BuildingOperateState || {});

      _export("BuildingOperateComp", BuildingOperateComp = (_dec = ccclass('BuildingOperateComp'), _dec(_class = class BuildingOperateComp extends Component {
        constructor() {
          super(...arguments);
          this.target = void 0;
          this._longTouchTime = 1;
          this._state = BuildingOperateState.NONE;
          this._startTouchPoint = new Vec2();
        }

        onLoad() {
          var targetEvent = this.getTarget();
          targetEvent.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          targetEvent.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          targetEvent.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          targetEvent.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this.target = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).createSphere(this.node.parent, 1, v3());
        }

        onDestroy() {
          var targetEvent = this.getTarget();
          targetEvent.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          targetEvent.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          targetEvent.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          targetEvent.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        getTarget() {
          return input;
        }

        onTouchStart(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptBuildingOp) return console.warn("中断操作中..............."); // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }

          var touches = e.getAllTouches();

          if (this._isSinglePoint(e)) {
            this.scheduleOnce(this.onLongTouch, this._longTouchTime);
            this._state = BuildingOperateState.LONG_TOUCH_CHECK;
            touches[0].getLocation(this._startTouchPoint);
          }
        }

        onLongTouch() {
          // 进入了拖动建筑物流程
          this._state = BuildingOperateState.LONG_TOUCH_RUNNING;
          (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapPanel.getHitPointToGridPosition(this._startTouchPoint, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1);
          this.target.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1);
        }

        _isSinglePoint(e) {
          return e.getAllTouches().length <= 1;
        }

        onTouchMove(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptBuildingOp) return console.warn("中断操作中...............");
          var touches = e.getAllTouches();

          if (this._isSinglePoint(e)) {
            e.getDelta(_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1);

            if (this._state == BuildingOperateState.LONG_TOUCH_CHECK && (_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
              error: Error()
            }), v2_1) : v2_1).lengthSqr() > 100) {
              this._state = BuildingOperateState.NONE;
              this.unschedule(this.onLongTouch);
            }

            if (this._state == BuildingOperateState.LONG_TOUCH_RUNNING) {
              touches[0];
              (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
                error: Error()
              }), GlobalConst) : GlobalConst).mapPanel.getHitPointToGridPosition(this._startTouchPoint, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
                error: Error()
              }), v3_1) : v3_1);
              this.target.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
                error: Error()
              }), v3_1) : v3_1);
            }

            if (this._state == BuildingOperateState.SHORT_TOUCH_RUNNING) {}
          }
        }

        onTouchEnd(e) {
          this._state = BuildingOperateState.NONE;
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptBuildingOp) return console.warn("中断操作中..............."); // if (document.exitPointerLock) { document.exitPointerLock(); }

          var touches = e.getAllTouches(); // console.log("onTouchEnd:-->" + touches.length);

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
            }), v2_2) : v2_2); // Util.getScreenToWorld(v2_2, v3_2, lv);

            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
              error: Error()
            }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE_MAP, _crd && v2_2 === void 0 ? (_reportPossibleCrUseOfv2_2({
              error: Error()
            }), v2_2) : v2_2);
          } // this._continueMoveDirty = true;


          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE, (_crd && v2_1 === void 0 ? (_reportPossibleCrUseOfv2_({
            error: Error()
          }), v2_1) : v2_1).set(0, 0));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b059d0fefc06219ee62d730099e23e55fd298f35.js.map