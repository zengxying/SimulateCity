System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, geometry, MeshRenderer, misc, Node, Quat, screen, Vec2, Vec3, GlobalConst, v3_1, v3_2, v3_3, worldMatrix, Util, MsgEvent, Msg, MapMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, qt_1, mapHitPoint, maxAngle, minAngle, MapOperateComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_2(extras) {
    _reporterNs.report("v3_2", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_3(extras) {
    _reporterNs.report("v3_3", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfworldMatrix(extras) {
    _reporterNs.report("worldMatrix", "../../GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "../../framework/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgEvent(extras) {
    _reporterNs.report("MsgEvent", "../../msg/MsgEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "../../msg/msg", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapMgr(extras) {
    _reporterNs.report("MapMgr", "../../MapMgr", _context.meta, extras);
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
      MeshRenderer = _cc.MeshRenderer;
      misc = _cc.misc;
      Node = _cc.Node;
      Quat = _cc.Quat;
      screen = _cc.screen;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
      v3_1 = _unresolved_2.v3_1;
      v3_2 = _unresolved_2.v3_2;
      v3_3 = _unresolved_2.v3_3;
      worldMatrix = _unresolved_2.worldMatrix;
    }, function (_unresolved_3) {
      Util = _unresolved_3.Util;
    }, function (_unresolved_4) {
      MsgEvent = _unresolved_4.MsgEvent;
    }, function (_unresolved_5) {
      Msg = _unresolved_5.Msg;
    }, function (_unresolved_6) {
      MapMgr = _unresolved_6.MapMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8fcd9kmlGlNiZX0iC86AXU1", "MapOperateComp", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider', 'Camera', 'CameraComponent', 'CanvasComponent', 'Component', 'director', 'EventTouch', 'game', 'geometry', 'MeshRenderer', 'misc', 'Node', 'PhysicsSystem', 'Quat', 'screen', 'sp', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      qt_1 = new Quat();
      mapHitPoint = new Vec3();
      maxAngle = -30;
      minAngle = -89;

      _export("MapOperateComp", MapOperateComp = (_dec = ccclass('MapOperateComp'), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec3 = property(Node), _dec(_class = (_class2 = (_class3 = class MapOperateComp extends Component {
        constructor() {
          super(...arguments);
          this._eulerP = new Vec3();
          this._cameraRay = new geometry.Ray();
          this._centerPoint = new Vec3();
          this._position = new Vec3();

          _initializerDefineProperty(this, "damp", _descriptor, this);

          _initializerDefineProperty(this, "sphere", _descriptor2, this);

          this._rotaAxisDirty = true;
          this._moveDirty = true;
          this._velocity = new Vec3();
          this._speedScale = 1;
          this._meshRender = void 0;
          this._preHit3DPoint = new Vec3();
          this._noteTouchePoint = new Vec2();
          this._rotaRatio = 0.5;
          this.startAngle = 0;
          this.originPos = new Vec3();
        }

        onLoad() {
          MapOperateComp.ins = this;
          (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapPanel = this.node;
          this._meshRender = this.node.getComponent(MeshRenderer);
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
          }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE, this.moveView.bind(this));
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).on((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_MOVE_MAP, this.noteMoveTochePoint.bind(this));
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).on((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_RESET_CLICK_POINT, this._updateHitPoint.bind(this));
        }

        onDisable() {
          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).off((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).OP_TOUCH_ROTA);
        }

        _updateHitPoint(vec2) {
          (_crd && MapMgr === void 0 ? (_reportPossibleCrUseOfMapMgr({
            error: Error()
          }), MapMgr) : MapMgr).ins.calculateHitPoint(vec2, mapHitPoint);

          this._preHit3DPoint.set(mapHitPoint);
        }

        noteMoveTochePoint(vec2) {
          this._moveDirty = true;

          this._noteTouchePoint.set(vec2);
        }

        moveMap(vec2) {
          if (!this._moveDirty) return;
          this._moveDirty = false;
          var canHit = (_crd && MapMgr === void 0 ? (_reportPossibleCrUseOfMapMgr({
            error: Error()
          }), MapMgr) : MapMgr).ins.calculateHitPoint(vec2, mapHitPoint);

          if (canHit) {
            (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1).set(mapHitPoint);
            Vec3.subtract(_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, this._preHit3DPoint); // this._position.set(v3_1);

            this._preHit3DPoint.set(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);

            this._velocity.add(_crd && v3_2 === void 0 ? (_reportPossibleCrUseOfv3_2({
              error: Error()
            }), v3_2) : v3_2); // 有时触摸的帧会多执行或者这个检测放到帧的时候执行


            (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
              error: Error()
            }), Util) : Util).createSphere(this.node.parent, 0.5, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1);
          }
        }

        resetRotaAxisDirty() {
          this._rotaAxisDirty = true;
        }

        moveView(vec2) {
          this.resetRotaAxisDirty();
        }
        /**
         * 计算旋转的轴
         */


        calculateRotaAxis() {
          if (!this._rotaAxisDirty) return;
          this._rotaAxisDirty = false;
          var camera = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).camera;
          camera.screenPointToRay(screen.windowSize.width / 2, screen.windowSize.height / 2, this._cameraRay); // console.time("射线检测时间：");

          var dis = geometry.intersect.rayModel(this._cameraRay, this._meshRender.model);

          if (dis) {
            this._cameraRay.computeHit(this._centerPoint, dis); // 性能要好些

          } // 暂时不用物理检测，比较耗时
          // if (PhysicsSystem.instance.raycast(this._cameraRay)) {
          //     const r = PhysicsSystem.instance.raycastResults;
          //     for (let i = 0; i < r.length; i++) {
          //         const item = r[i];
          //         if (item.collider.node.uuid == this.node.uuid) {
          //             // 射线检测到自己了
          //             this._centerPoint.set(item.hitPoint);
          //         }
          //     }
          //     console.log("射线检测:", r);
          // } else {
          //     console.log("射线检测:fail");
          // }
          // console.timeEnd("射线检测时间：");
          // console.time("射线检测时间 01：");


          if (this.sphere) {
            this.sphere.setPosition(this._centerPoint);
          }

          this.startAngle = 0;
          this.node.getPosition(this.originPos); // console.timeEnd("射线检测时间 01：");
        }
        /** 旋转 */


        rotaView(vec2) {
          // 旋转看着像是地图的旋转
          this.calculateRotaAxis();
          var x = vec2.x;
          var y = vec2.y;
          this.setRotaCamera(x);
          this.setRotaPos(y); // console.log("yyyy----->" + y);
          // this._calculateRotaPos2(y);
          // Quat.rotateAround(this._rotation, this._rotation, this.node.forward, y);
          // Quat.rotateAround(this._rotation, this._rotation, this.node.right, x);
          // if (this._eulerP.x + x < -30 && this._eulerP.x + x > -90) { // x处角度的旋转限制 测试使用
          //     this._eulerP.x += x;
          // }
          // this._eulerP.y += y;
        } // TODO  旋转 有问题


        setRotaCamera(x) {
          return this.setRotaCamera2(x);
          var cameraNode = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).camera.node;
          var wpos = cameraNode.parent.worldPosition;
          Vec3.subtract(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, wpos, this._centerPoint);
          var rotax = x; // 计算角度的旋转坐标

          var angle = misc.degreesToRadians(rotax); // 转换成弧度 

          var cosAngle = Math.cos(angle);
          var sinAngle = Math.sin(angle);
          var newY = (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).y * cosAngle - (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z * sinAngle;
          var newZ = (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).y * sinAngle + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z * cosAngle;
          (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).set(0, newY, newZ);
          Vec3.transformQuat(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, cameraNode.rotation);
          (_crd && v3_3 === void 0 ? (_reportPossibleCrUseOfv3_3({
            error: Error()
          }), v3_3) : v3_3).set(wpos.x, this._centerPoint.y + newY, newZ + this._centerPoint.z);
          (_crd && v3_3 === void 0 ? (_reportPossibleCrUseOfv3_3({
            error: Error()
          }), v3_3) : v3_3).set(this._centerPoint.x + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).x, this._centerPoint.y + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).y, (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z + this._centerPoint.z); // Vec3.transformQuat(v3_3, v3_3, GlobalConst.camera.node.rotation);

          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).UPDATE_CAMERA_POSITION, _crd && v3_3 === void 0 ? (_reportPossibleCrUseOfv3_3({
            error: Error()
          }), v3_3) : v3_3);
          cameraNode.lookAt(this._centerPoint); // 看向地图上的点

          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).UPDATE_CAMERA_EULER_ANGLE, cameraNode.eulerAngles);
        } // TODO  旋转 有问题


        setRotaCamera2(x) {
          var cameraNode = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).camera.node;
          var eulerAngles = cameraNode.eulerAngles;

          if (eulerAngles.x + x < minAngle || eulerAngles.x + x > maxAngle) {
            console.log("超过极限了");

            if (eulerAngles.x + x < minAngle) {
              x = minAngle - eulerAngles.x;
            }

            if (eulerAngles.x + x > maxAngle) {
              x = maxAngle - eulerAngles.x;
            }

            console.log("解锁:eulerAngles.x + x : " + eulerAngles.x + x);
          }

          var wpos = cameraNode.parent.worldPosition;
          Vec3.subtract(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, wpos, this._centerPoint); // 方向向量

          var rotax = x;
          var angle = misc.degreesToRadians(rotax); // 转换成弧度 

          qt_1.set();
          Quat.rotateAround(qt_1, qt_1, cameraNode.right, angle); // 计算四元素的值

          Vec3.transformQuat(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, qt_1); // 绕四元素旋转

          (_crd && v3_3 === void 0 ? (_reportPossibleCrUseOfv3_3({
            error: Error()
          }), v3_3) : v3_3).set(this._centerPoint.x + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).x, this._centerPoint.y + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).y, (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z + this._centerPoint.z); // Vec3.transformQuat(v3_3, v3_3, GlobalConst.camera.node.rotation);

          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).UPDATE_CAMERA_POSITION, _crd && v3_3 === void 0 ? (_reportPossibleCrUseOfv3_3({
            error: Error()
          }), v3_3) : v3_3);
          cameraNode.lookAt(this._centerPoint); // 看向地图上的点

          (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
            error: Error()
          }), Msg) : Msg).emit((_crd && MsgEvent === void 0 ? (_reportPossibleCrUseOfMsgEvent({
            error: Error()
          }), MsgEvent) : MsgEvent).UPDATE_CAMERA_EULER_ANGLE, cameraNode.eulerAngles);
        }

        setRotaPos(addAngle) {
          addAngle *= this._rotaRatio;
          this._eulerP.y -= addAngle; // 一个旋转角度的计算不对也会导致地图展示出来不是想要的样子

          this.startAngle += addAngle; // 获取物体相对于旋转中心的位置

          Vec3.subtract(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, this.originPos, this._centerPoint);
          var localPosition = _crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1; // const localPosition = this.node.getPosition(v3_1).subtract(this._centerPoint);
          // 计算旋转后的位置  每次旋转的值加上本身的旋转度数

          var angle = misc.degreesToRadians(this.startAngle); // 转换成弧度 

          var cosAngle = Math.cos(angle);
          var sinAngle = Math.sin(angle);
          var newX = localPosition.x * cosAngle - localPosition.z * sinAngle;
          var newZ = localPosition.x * sinAngle + localPosition.z * cosAngle; // 更新物体的位置

          this._position.set(newX + this._centerPoint.x, this._position.y, newZ + this._centerPoint.z); // Util.createSphere(this.node.parent, 0.5, this._position);
          // Res.instNode(this.sphere, this.node.parent, this._position);
          // 使物体朝向旋转中心
          // v3_1.set(this.node.eulerAngles)
          // this.node.lookAt(this._centerPoint, Vec3.UP);
          // this._eulerP.set(this.node.eulerAngles);
          // this.node.eulerAngles = v3_1;

        }

        update(dt) {
          this.moveMap(this._noteTouchePoint);
          var t = Math.min(dt / this.damp, 1);
          this.updateRotation(t); // // position

          this._upadtePosition();

          Vec3.lerp(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, this.node.getPosition(), this._position, t);
          this.node.setPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1);
        }

        _upadtePosition() {
          // Vec3.transformQuat(v3_1, this._velocity, this.node.rotation); //不需要跟旋转有关系，这里只需要按照世界坐标移动就好不然旋转后显示的效果就不对了
          Vec3.scaleAndAdd(this._position, this._position, this._velocity, this._speedScale);

          this._velocity.set();
        }

        updateRotation(t) {
          // rotation
          Quat.fromEuler(qt_1, this._eulerP.x, this._eulerP.y, this._eulerP.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.rotation = qt_1;
        } // ============================================== 废弃代码====================


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

          var localPosition = this.node.getPosition(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).subtract(this._centerPoint); // 计算旋转后的位置  每次旋转的值加上本身的旋转度数

          var angle = misc.degreesToRadians(this._eulerP.y); // 转换成弧度 

          var cosAngle = Math.cos(angle);
          var sinAngle = Math.sin(angle);
          var newX = localPosition.x * cosAngle - localPosition.z * sinAngle;
          var newZ = localPosition.x * sinAngle + localPosition.z * cosAngle; // 更新物体的位置

          this._position.set(newX + this._centerPoint.x, this._position.y, newZ + this._centerPoint.z); // 使物体朝向旋转中心
          // v3_1.set(this.node.eulerAngles)
          // this.node.lookAt(this._centerPoint, Vec3.UP);
          // this._eulerP.set(this.node.eulerAngles);
          // this.node.eulerAngles = v3_1;

        }

        _testMatrixToMap(out) {
          Vec3.transformInverseRTS(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, mapHitPoint, this.node.rotation, this.node.position, Vec3.ONE);
          console.log("hitpointx:" + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).x + " hitpointy:" + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).y + " hitpointz:" + (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z);
          out.x = (Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).x / (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridWidth) + 0.5) * (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridWidth;
          out.y = out.y;
          out.z = (Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z / (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridHeight) + 0.5) * (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridHeight; // Vec3.transformMat4(child._pos, out, cur._mat);

          this.node.getWorldMatrix(_crd && worldMatrix === void 0 ? (_reportPossibleCrUseOfworldMatrix({
            error: Error()
          }), worldMatrix) : worldMatrix);
          Vec3.transformMat4(out, out, _crd && worldMatrix === void 0 ? (_reportPossibleCrUseOfworldMatrix({
            error: Error()
          }), worldMatrix) : worldMatrix);
          out.divide(this.node.scale);
          return true;
        }

      }, _class3.ins = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=e3ba6e08eecc5600212fc304186a4a7082c7c7ba.js.map