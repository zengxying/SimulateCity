System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, LabelComponent, Animation, PoolManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Tips;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./poolManager", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      PoolManager = _unresolved_2.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cefad8xjrFKMr/WQzfpXZOF", "tips", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'LabelComponent', 'Vec3', 'tween', 'UITransform', 'Size', 'CCObject', 'isValid', 'UIOpacity', 'AnimationClip', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tips", Tips = (_dec = ccclass('Tips'), _dec2 = property(LabelComponent), _dec(_class = (_class2 = class Tips extends Component {
        constructor() {
          super(...arguments);

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          _initializerDefineProperty(this, "lbTips", _descriptor, this);

          this.targetPos = void 0;
          this._ani = void 0;
        }

        onLoad() {
          this._ani = this.node.getComponent(Animation);
        }

        start() {// Your initialization goes here.
        }

        show(content, callback) {
          this.lbTips.string = content;

          this._ani.on(Animation.EventType.FINISHED, () => {
            (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.putNode(this.node);
            callback && callback();
          });

          this._ani.play();
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbTips", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b8e75d133f2dc6ba26fd8aafe6dc5731bc6921f.js.map