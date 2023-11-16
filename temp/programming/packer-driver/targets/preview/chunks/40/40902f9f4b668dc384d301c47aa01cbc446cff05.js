System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, NodePool, _dec, _class, _class2, _crd, ccclass, property, PoolManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a63d5jVC8VJLKN1xodEUrZZ", "poolManager", undefined);

      __checkObsolete__(['_decorator', 'Prefab', 'Node', 'instantiate', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolManager", PoolManager = (_dec = ccclass("PoolManager"), _dec(_class = (_class2 = class PoolManager {
        constructor() {
          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          this._dictPool = {};
          this._dictPrefab = {};
        }

        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new PoolManager();
          return this._instance;
        }
        /**
         * 根据预设从对象池中获取对应节点
         */


        getNode(prefab, parent) {
          var name = prefab.name; // @ts-ignore

          if (!prefab.position) {
            // @ts-ignore
            name = prefab.data.name;
          }

          this._dictPrefab[name] = prefab;
          var node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            // 已有对应的对象池
            var pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            // 没有对应对象池，创建他！
            var _pool = new NodePool();

            this._dictPool[name] = _pool;
            node = instantiate(prefab);
          }

          node.parent = parent;
          node.active = true;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         */


        putNode(node) {
          if (!node) {
            return;
          }

          var name = node.name;
          var pool = null;

          if (this._dictPool.hasOwnProperty(name)) {
            // 已有对应的对象池
            pool = this._dictPool[name];
          } else {
            // 没有对应对象池，创建他！
            pool = new NodePool();
            this._dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */


        clearPool(name) {
          if (this._dictPool.hasOwnProperty(name)) {
            var pool = this._dictPool[name];
            pool.clear();
          }
        }
        /**
        * 预生成对象池
        * @param prefab
        * @param nodeNum
        * 使用——PoolManager.instance.prePool(prefab, 40);
        */


        prePool(prefab, nodeNum) {
          var name = prefab.name;
          var pool = new NodePool();
          this._dictPool[name] = pool;

          for (var i = 0; i < nodeNum; i++) {
            var node = instantiate(prefab);
            pool.put(node);
          }
        }
        /**
         * destroyNode
         */


        destroyNode(point) {
          point.destroy();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40902f9f4b668dc384d301c47aa01cbc446cff05.js.map