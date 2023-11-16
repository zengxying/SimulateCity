System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, v2, GlobalConst, MsgEvent, Msg, MapOperateComp, MapOperateLogic, BuildingOperateLogic, _dec, _class, _crd, ccclass, property, OperateComp;

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgEvent(extras) {
    _reporterNs.report("MsgEvent", "../msg/MsgEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "../msg/msg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapOperateComp(extras) {
    _reporterNs.report("MapOperateComp", "./mapOp/MapOperateComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapOperateLogic(extras) {
    _reporterNs.report("MapOperateLogic", "../operate/MapOperateLogic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuildingOperateLogic(extras) {
    _reporterNs.report("BuildingOperateLogic", "../operate/BuildingOperateLogic", _context.meta, extras);
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
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
    }, function (_unresolved_3) {
      MsgEvent = _unresolved_3.MsgEvent;
    }, function (_unresolved_4) {
      Msg = _unresolved_4.Msg;
    }, function (_unresolved_5) {
      MapOperateComp = _unresolved_5.MapOperateComp;
    }, function (_unresolved_6) {
      MapOperateLogic = _unresolved_6.MapOperateLogic;
    }, function (_unresolved_7) {
      BuildingOperateLogic = _unresolved_7.BuildingOperateLogic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc1abqVC6pJKoP20j8W1PlZ", "OperateComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec2', 'input', 'Input', 'EventMouse', 'EventTouch', 'misc', 'Vec3', 'EventKeyboard', 'KeyCode', 'v2']);

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
          this.mapOperateLogic = new (_crd && MapOperateLogic === void 0 ? (_reportPossibleCrUseOfMapOperateLogic({
            error: Error()
          }), MapOperateLogic) : MapOperateLogic)();
          this.buildingOperateLogic = void 0;
          this.keys = [];
          this.key2dirMap = null;
        }

        onLoad() {
          const inputEvent = this.getTarget();
          this.buildingOperateLogic = new (_crd && BuildingOperateLogic === void 0 ? (_reportPossibleCrUseOfBuildingOperateLogic({
            error: Error()
          }), BuildingOperateLogic) : BuildingOperateLogic)(this);
          inputEvent.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          inputEvent.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          inputEvent.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          inputEvent.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          inputEvent.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          inputEvent.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          inputEvent.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onDestroy() {
          const inputEvent = this.getTarget();
          inputEvent.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          inputEvent.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          inputEvent.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          inputEvent.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          inputEvent.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          inputEvent.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          inputEvent.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        getTarget() {
          return input;
        }

        onMouseWheel(e) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptMapOp) return console.warn("中断操作中...............");
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
          this.mapOperateLogic.onTouchStart(e); // this.buildingOperateLogic.onTouchStart(e);
        }

        onTouchMove(e) {
          // this.buildingOperateLogic.onTouchMove(e);
          // if(! this.buildingOperateLogic.checkMoveBuild()){
          this.mapOperateLogic.onTouchMove(e); // }
        }

        onTouchEnd(e) {
          this.buildingOperateLogic.onTouchEnd(e);
          this.mapOperateLogic.onTouchEnd(e);
        }

        // x  -1 left, +1 right   y -1 backword, +1 forward
        onKeyDown(event) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptMapOp) return console.warn("中断操作中...............");
          let keyCode = event.keyCode;

          if (keyCode == KeyCode.KEY_A || keyCode == KeyCode.KEY_S || keyCode == KeyCode.KEY_D || keyCode == KeyCode.KEY_W) {
            if (this.keys.indexOf(keyCode) == -1) {
              this.keys.push(keyCode);
              this.updateDirection();
            }
          }

          if (keyCode == KeyCode.KEY_Q) {
            // 测试旋转
            // MapOperateComp.ins.calculateRotaAxis();
            // MapOperateComp.ins.setRotaPos(10);
            (_crd && MapOperateComp === void 0 ? (_reportPossibleCrUseOfMapOperateComp({
              error: Error()
            }), MapOperateComp) : MapOperateComp).ins.setRotaCamera(1); // GlobalConst.cameraMoveDir.y = -1;
          } else if (keyCode == KeyCode.KEY_E) {
            (_crd && MapOperateComp === void 0 ? (_reportPossibleCrUseOfMapOperateComp({
              error: Error()
            }), MapOperateComp) : MapOperateComp).ins.setRotaCamera(-1); // GlobalConst.cameraMoveDir.y = 1;
          }
        }

        onKeyUp(event) {
          if ((_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).interruptMapOp) return console.warn("中断操作中...............");
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
//# sourceMappingURL=ecdaaa27a1f1a6678e9c8dfc4c2d35fc0b09758b.js.map