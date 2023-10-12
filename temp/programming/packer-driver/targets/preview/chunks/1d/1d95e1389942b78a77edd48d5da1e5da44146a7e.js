System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, TestScreenInputComp;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c57f6rdTgNGqro1ZhKyXQfy", "TestScreenInputComp", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Quat', 'Vec2', 'Vec3', 'Input', 'game', 'EventTouch', 'EventMouse', 'input', 'EventKeyboard', 'KeyCode', 'v2', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestScreenInputComp", TestScreenInputComp = (_dec = ccclass('TestScreenInputComp'), _dec(_class = class TestScreenInputComp extends Component {
        onLoad() {
          // this.node.active = false
          // return ;
          this.node.on(Node.EventType.TOUCH_START, e => {
            console.log("ui  2d节点上的 触摸事件触发了TOUCH_START");
          }, this);
          this.node.on(Node.EventType.TOUCH_MOVE, e => {
            console.log("ui  2d节点上的 触摸事件触发了TOUCH_MOVE");
          }, this);
          this.node.on(Node.EventType.TOUCH_END, e => {
            console.log("ui  2d节点上的 触摸事件触发了TOUCH_END");
          }, this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d95e1389942b78a77edd48d5da1e5da44146a7e.js.map