System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, v3, GlobalConst, v2_1, v3_1, Util, BuildingOperateLogic, _crd, BuildingOperateState;

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2_(extras) {
    _reporterNs.report("v2_1", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIOperateHandler(extras) {
    _reporterNs.report("IOperateHandler", "./IOperateLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../framework/util", _context.meta, extras);
  }

  _export("BuildingOperateLogic", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
      v2_1 = _unresolved_2.v2_1;
      v3_1 = _unresolved_2.v3_1;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e10aYoFCBEU6qKKPlCZApe", "BuildingOperateLogic", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec2', 'Vec3', 'Input', 'game', 'EventTouch', 'Node', 'v3']);

      BuildingOperateState = /*#__PURE__*/function (BuildingOperateState) {
        BuildingOperateState[BuildingOperateState["NONE"] = 0] = "NONE";
        BuildingOperateState[BuildingOperateState["LONG_TOUCH_CHECK"] = 1] = "LONG_TOUCH_CHECK";
        BuildingOperateState[BuildingOperateState["LONG_TOUCH_RUNNING"] = 2] = "LONG_TOUCH_RUNNING";
        BuildingOperateState[BuildingOperateState["SHORT_TOUCH_RUNNING"] = 3] = "SHORT_TOUCH_RUNNING";
        return BuildingOperateState;
      }(BuildingOperateState || {});

      _export("BuildingOperateLogic", BuildingOperateLogic = class BuildingOperateLogic {
        constructor(comp) {
          this.target = void 0;
          this._longTouchTime = 1;
          this._state = BuildingOperateState.NONE;
          this._startTouchPoint = new Vec2();
          this._comp = void 0;
          this._comp = comp;
          this.target = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).createSphere(this._comp.node.parent, 0.5, v3());
        }

        onTouchStart(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptBuildingOp) return console.warn("中断操作中..............."); // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }

          var touches = e.getAllTouches();

          if (this._isSinglePoint(e)) {
            this._comp.scheduleOnce(this.onLongTouch.bind(this), this._longTouchTime);

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
          console.log("长按中....................");
        }

        _isSinglePoint(e) {
          return e.getAllTouches().length <= 1;
        }

        checkMoveBuild() {
          return this._state == BuildingOperateState.LONG_TOUCH_RUNNING;
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

              this._comp.unschedule(this.onLongTouch);
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
          }), GlobalConst) : GlobalConst).interruptBuildingOp) return console.warn("中断操作中...............");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c70d5f1ee5acf1f8fff217b26f9686c547f97af3.js.map