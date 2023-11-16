System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider, Line, MeshRenderer, Quat, Vec3, geometry, v3, GlobalConst, ray, v3_1, worldMatrix, MapMgr, _crd, qt_1, mapHitPoint;

  function _reportPossibleCrUseOfGlobalConst(extras) {
    _reporterNs.report("GlobalConst", "./GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfray(extras) {
    _reporterNs.report("ray", "./GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3_(extras) {
    _reporterNs.report("v3_1", "./GlobalConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfworldMatrix(extras) {
    _reporterNs.report("worldMatrix", "./GlobalConst", _context.meta, extras);
  }

  _export("MapMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BoxCollider = _cc.BoxCollider;
      Line = _cc.Line;
      MeshRenderer = _cc.MeshRenderer;
      Quat = _cc.Quat;
      Vec3 = _cc.Vec3;
      geometry = _cc.geometry;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      GlobalConst = _unresolved_2.GlobalConst;
      ray = _unresolved_2.ray;
      v3_1 = _unresolved_2.v3_1;
      worldMatrix = _unresolved_2.worldMatrix;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "af2dcNOMtxGLauFmWs6oZMc", "MapMgr", undefined);

      __checkObsolete__(['BoxCollider', 'Line', 'MeshRenderer', 'Node', 'Quat', 'Vec2', 'Vec3', 'geometry', 'v3']);

      qt_1 = new Quat();
      mapHitPoint = new Vec3();

      _export("MapMgr", MapMgr = class MapMgr {
        // 地图块的计算，当前地图有多少格子，那些格子可用
        // 当前地图存在的建筑物
        // 建筑物对应的状态
        // 各个建筑物的状态更新
        constructor() {
          this._node = void 0;
          this._meshRender = void 0;
        }

        static get ins() {
          return this._ins || (this._ins = new MapMgr());
        }

        get node() {
          this._node || (this._node = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapPanel);

          if (!this._meshRender) {
            this._meshRender = this._node.getComponent(MeshRenderer);
          }

          return this._node;
        }

        graphicsMapLine() {
          const node = this.node;
          const box = node.getComponent(BoxCollider); // const lineBox = new Node("line-box");
          // node.addChild(lineBox);
          // let line = lineBox.addComponent(Line);

          let line = node.getComponentInChildren(Line);
          (_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).set(box.worldBounds.halfExtents);
          const hGridCount = Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).x * 2 / (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridWidth);
          const vGridCount = Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z * 2 / (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridHeight);
          let arr = [];

          for (let x = 0; x < 100; x++) {
            arr.push(v3(x, 0.2, x));
            arr.push(v3(-x, 0.2, x));
          }

          line.positions = arr;
        }
        /** 计算触发到地图上的点位, 传入屏幕坐标 */


        calculateHitPoint(vec2, out) {
          if (!this._node) this.node;
          const camera = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).camera;
          camera.screenPointToRay(vec2.x, vec2.y, _crd && ray === void 0 ? (_reportPossibleCrUseOfray({
            error: Error()
          }), ray) : ray);
          let dis = geometry.intersect.rayModel(_crd && ray === void 0 ? (_reportPossibleCrUseOfray({
            error: Error()
          }), ray) : ray, this._meshRender.model);

          if (dis) {
            (_crd && ray === void 0 ? (_reportPossibleCrUseOfray({
              error: Error()
            }), ray) : ray).computeHit(mapHitPoint, dis); // 性能要好些

            out && out.set(mapHitPoint);
            return true;
          }

          return false;
        }
        /** 获取点击的格子, 传入屏幕坐标*/


        getHitPointToGrid(vec2, out) {
          if (this.calculateHitPoint(vec2, mapHitPoint)) {
            this.node.inverseTransformPoint(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1, mapHitPoint);
            const scale = this.node.scale;
            let scaleX = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
              error: Error()
            }), GlobalConst) : GlobalConst).mapGridWidth / scale.x;
            let scaleY = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
              error: Error()
            }), GlobalConst) : GlobalConst).mapGridHeight / scale.z;
            out.x = Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1).x / scaleX);
            out.y = Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
              error: Error()
            }), v3_1) : v3_1).z / scaleY);
            return true;
          }

          return false;
        }
        /** 获取点击的格子中心坐标, 传入屏幕坐标 */


        getHitPointToGridPosition(vec2, out, outGrid) {
          if (this.calculateHitPoint(vec2, mapHitPoint)) {
            this._setMapPos(out, outGrid);

            return true;
          }

          return false;
        }

        _setMapPos(out, outGrid) {
          this.node.inverseTransformPoint(_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1, mapHitPoint);
          const scale = this.node.scale;
          let scaleX = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridWidth / scale.x;
          let scaleY = (_crd && GlobalConst === void 0 ? (_reportPossibleCrUseOfGlobalConst({
            error: Error()
          }), GlobalConst) : GlobalConst).mapGridHeight / scale.z;
          outGrid.x = Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).x / scaleX);
          outGrid.y = Math.floor((_crd && v3_1 === void 0 ? (_reportPossibleCrUseOfv3_({
            error: Error()
          }), v3_1) : v3_1).z / scaleY);
          out.x = (outGrid.x + 0.5) * scaleX;
          out.y = out.y;
          out.z = (outGrid.y + 0.5) * scaleY;
          this.node.getWorldMatrix(_crd && worldMatrix === void 0 ? (_reportPossibleCrUseOfworldMatrix({
            error: Error()
          }), worldMatrix) : worldMatrix);
          Vec3.transformMat4(out, out, _crd && worldMatrix === void 0 ? (_reportPossibleCrUseOfworldMatrix({
            error: Error()
          }), worldMatrix) : worldMatrix);
        }

      });

      MapMgr._ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a153a6753ba10323637076aebf6be29e0b58f178.js.map