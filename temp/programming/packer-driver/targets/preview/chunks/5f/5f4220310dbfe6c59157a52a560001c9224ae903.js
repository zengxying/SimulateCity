System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, isValid, ResourceUtil, PoolManager, Tips, _dec, _class, _class2, _crd, ccclass, property, SHOW_STR_INTERVAL_TIME, UIManager;

  function _reportPossibleCrUseOfResourceUtil(extras) {
    _reporterNs.report("ResourceUtil", "./resourceUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "./tips", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      find = _cc.find;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      ResourceUtil = _unresolved_2.ResourceUtil;
    }, function (_unresolved_3) {
      PoolManager = _unresolved_3.PoolManager;
    }, function (_unresolved_4) {
      Tips = _unresolved_4.Tips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25e11uIK+hKspsO114TNPVO", "uiManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'isValid', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);
      SHOW_STR_INTERVAL_TIME = 800;

      _export("UIManager", UIManager = (_dec = ccclass("UIManager"), _dec(_class = (_class2 = class UIManager {
        constructor() {
          this._dictSharedPanel = {};
          this._dictLoading = {};
          this._arrPopupDialog = [];
          this._showTipsTime = 0;
          this.canvas = void 0;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new UIManager();
          return this._instance;
        }
        /**
         * 检查当前界面是否正在展示
         * @param panelPath
         */


        isDialogVisible(panelPath) {
          if (!this._dictSharedPanel.hasOwnProperty(panelPath)) {
            return false;
          }

          var panel = this._dictSharedPanel[panelPath];
          return isValid(panel) && panel.active && panel.parent;
        }
        /**
         * 显示单例界面
         * @param {String} panelPath
         * @param {Array} args
         * @param {Function} cb 回调函数，创建完毕后回调
         */


        showDialog(panelPath, args, cb) {
          if (this._dictLoading[panelPath]) {
            return;
          }

          var idxSplit = panelPath.lastIndexOf('/');
          var scriptName = panelPath.slice(idxSplit + 1);

          if (!args) {
            args = [];
          }

          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            var panel = this._dictSharedPanel[panelPath];

            if (isValid(panel)) {
              panel.parent = find("Canvas");
              panel.active = true;
              var script = panel.getComponent(scriptName);
              var script2 = panel.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

              if (script && script.show) {
                script.show.apply(script, args);
                cb && cb(script);
              } else if (script2 && script2.show) {
                script2.show.apply(script2, args);
                cb && cb(script2);
              } else {
                throw "\u67E5\u627E\u4E0D\u5230\u811A\u672C\u6587\u4EF6" + scriptName;
              }

              return;
            }
          }

          this._dictLoading[panelPath] = true;
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).createUI(panelPath, (err, node) => {
            // 判断是否有可能在显示前已经被关掉了？
            var isCloseBeforeShow = false;

            if (!this._dictLoading[panelPath]) {
              // 已经被关掉
              isCloseBeforeShow = true;
            }

            this._dictLoading[panelPath] = false;

            if (err) {
              console.error(err);
              return;
            } // node.getComponent(UITransform).priority = Constant.ZORDER.DIALOG;


            this._dictSharedPanel[panelPath] = node;
            var script = node.getComponent(scriptName);
            var script2 = node.getComponent(scriptName.charAt(0).toUpperCase() + scriptName.slice(1));

            if (script && script.show) {
              script.show.apply(script, args);
              cb && cb(script);
            } else if (script2 && script2.show) {
              script2.show.apply(script2, args);
              cb && cb(script2);
            } else {
              throw "\u67E5\u627E\u4E0D\u5230\u811A\u672C\u6587\u4EF6" + scriptName;
            }

            if (isCloseBeforeShow) {
              // 如果在显示前又被关闭，则直接触发关闭掉
              this.hideDialog(panelPath);
            }
          });
        }
        /**
         * 隐藏单例界面
         * @param {String} panelPath
         * @param {fn} callback
         */


        hideDialog(panelPath, callback) {
          if (this._dictSharedPanel.hasOwnProperty(panelPath)) {
            var panel = this._dictSharedPanel[panelPath];

            if (panel && isValid(panel)) {
              var ani = panel.getComponent('animationUI');

              if (ani) {
                ani.close(() => {
                  panel.parent = null;

                  if (callback && typeof callback === 'function') {
                    callback();
                  }
                });
              } else {
                panel.parent = null;

                if (callback && typeof callback === 'function') {
                  callback();
                }
              }
            } else if (callback && typeof callback === 'function') {
              callback();
            }
          }

          this._dictLoading[panelPath] = false;
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {string} panelPath
         * @param {string} scriptName
         * @param {*} param
         */


        pushToPopupSeq(panelPath, scriptName, param) {
          var popupDialog = {
            panelPath: panelPath,
            scriptName: scriptName,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.push(popupDialog);

          this._checkPopupSeq();
        }
        /**
         * 将弹窗加入弹出窗队列
         * @param {number} index
         * @param {string} panelPath
         * @param {string} scriptName
         * @param {*} param
         */


        insertToPopupSeq(index, panelPath, param) {
          var popupDialog = {
            panelPath: panelPath,
            param: param,
            isShow: false
          };

          this._arrPopupDialog.splice(index, 0, popupDialog); // this._checkPopupSeq();

        }
        /**
         * 将弹窗从弹出窗队列中移除
         * @param {string} panelPath
         */


        shiftFromPopupSeq(panelPath) {
          this.hideDialog(panelPath, () => {
            if (this._arrPopupDialog[0] && this._arrPopupDialog[0].panelPath === panelPath) {
              this._arrPopupDialog.shift();

              this._checkPopupSeq();
            }
          });
        }
        /**
         * 检查当前是否需要弹窗
         */


        _checkPopupSeq() {
          if (this._arrPopupDialog.length > 0) {
            var first = this._arrPopupDialog[0];

            if (!first.isShow) {
              this.showDialog(first.panelPath, first.param);
              this._arrPopupDialog[0].isShow = true;
            }
          }
        }
        /**
         * 显示提示
         * @param {String} content
         * @param {Function} cb
         */


        showTips(content, callback) {
          var str = String(content);

          var next = () => {
            this._showTipsAni(str, callback);
          };

          var now = Date.now();

          if (now - this._showTipsTime < SHOW_STR_INTERVAL_TIME) {
            var spareTime = SHOW_STR_INTERVAL_TIME - (now - this._showTipsTime);
            setTimeout(() => {
              next();
            }, spareTime);
            this._showTipsTime = now + spareTime;
          } else {
            next();
            this._showTipsTime = now;
          }
        }
        /**
         * 内部函数
         * @param {String} content
         * @param {Function} cb
         */


        _showTipsAni(content, callback) {
          (_crd && ResourceUtil === void 0 ? (_reportPossibleCrUseOfResourceUtil({
            error: Error()
          }), ResourceUtil) : ResourceUtil).getUIPrefabRes('TipsItem', (err, prefab) => {
            if (err) {
              return;
            }

            var tipsNode = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).instance.getNode(prefab, this.canvas || find("Canvas"));
            var tipScript = tipsNode.getComponent(_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
              error: Error()
            }), Tips) : Tips);
            tipScript.show(content, callback);
          });
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f4220310dbfe6c59157a52a560001c9224ae903.js.map