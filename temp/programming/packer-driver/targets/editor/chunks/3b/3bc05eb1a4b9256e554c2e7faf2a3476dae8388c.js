System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, sys, log, native, Util, Log, _dec, _class, _class2, _crd, ccclass, property, StorageManager;

  function _reportPossibleCrUseOfUtil(extras) {
    _reporterNs.report("Util", "./util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLog(extras) {
    _reporterNs.report("Log", "./Log", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      sys = _cc.sys;
      log = _cc.log;
      native = _cc.native;
    }, function (_unresolved_2) {
      Util = _unresolved_2.Util;
    }, function (_unresolved_3) {
      Log = _unresolved_3.Log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cceeb1D6UhMyZpV/MY3r3+C", "storageManager", undefined);

      __checkObsolete__(['_decorator', 'sys', 'log', 'native']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StorageManager", StorageManager = (_dec = ccclass("StorageManager"), _dec(_class = (_class2 = class StorageManager {
        constructor() {
          this._jsonData = {};
          this._path = null;
          this._markSave = false;
          this._saveTimer = -1;
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new StorageManager();

          this._instance.start();

          return this._instance;
        }

        start() {
          this._jsonData = {
            "userId": ""
          };
          this._path = this._getConfigPath();
          let content;

          if (sys.isNative) {
            let valueObject = native.fileUtils.getValueMapFromFile(this._path);
            content = valueObject[StorageManager.KEY_CONFIG];
          } else {
            content = sys.localStorage.getItem(StorageManager.KEY_CONFIG);
          } // // 解密代码
          // if (cc.game.config["encript"]) {
          //     var newContent = new Xxtea("upgradeHeroAbility").xxteaDecrypt(content);
          //     if (newContent && newContent.length > 0) {
          //         content = newContent;
          //     }
          // }


          if (content && content.length) {
            if (content.startsWith('@')) {
              content = content.substring(1);
              content = (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
                error: Error()
              }), Util) : Util).decrypt(content);
            }

            try {
              // 初始化操作
              let jsonData = JSON.parse(content);
              this._jsonData = jsonData;
            } catch (excepaiton) {}
          } // 启动无限定时器，每1秒保存一次数据，而不是无限保存数据
          // this._saveTimer = setInterval(() =>{
          //     this.scheduleSave();
          // }, 500);
          // 每隔5秒保存一次数据，主要是为了保存最新在线时间，方便离线奖励时间判定


          this._saveTimer = setInterval(() => {
            this.scheduleSave();
          }, 5000);
        }
        /**
         * 存储配置文件，不保存到本地
         * @param {string}key  关键字
         * @param {any}value  存储值
         */


        setConfigDataWithoutSave(key, value) {
          let account = this._jsonData.userId;

          if (this._jsonData[account]) {
            this._jsonData[account][key] = value;
          } else {
            console.error("no account can not save");
          }
        }
        /**
         * 存储配置文件，保存到本地
         * @param {string}key  关键字
         * @param {any}value  存储值
         */


        setConfigData(key, value) {
          this.setConfigDataWithoutSave(key, value);
          this._markSave = true; // 标记为需要存储，避免一直在写入，而是每隔一段时间进行写入
        }
        /**
         * 根据关键字获取数值
         * @param {string} key 关键字
         * @returns
         */


        getConfigData(key) {
          let account = this._jsonData.userId;

          if (this._jsonData[account]) {
            let value = this._jsonData[account][key];
            return value ? value : "";
          } else {
            log("no account can not load");
            return "";
          }
        }
        /**
         * 设置全局数据
         * @param {string} key 关键字
         * @param {any}value  存储值
         * @returns
         */


        setGlobalData(key, value, issave) {
          if (this._jsonData[key] == value) {
            return (_crd && Log === void 0 ? (_reportPossibleCrUseOfLog({
              error: Error()
            }), Log) : Log).log("有相同的数据了");
          }

          this._jsonData[key] = value;

          if (issave) {
            this.save();
          } else {
            this._markSave = true;
          }
        }
        /**
         * 获取全局数据
         * @param {string} key 关键字
         * @returns
         */


        getGlobalData(key) {
          return this._jsonData[key];
        }
        /**
         * 设置用户唯一标示符
         * @param {string} userId 用户唯一标示符
         * @param {any}value  存储值
         * @returns
         */


        setUserId(userId) {
          this._jsonData.userId = userId;

          if (!this._jsonData[userId]) {
            this._jsonData[userId] = {};
          }

          this.save();
        }
        /**
         * 获取用户唯一标示符
         * @returns {string}
         */


        getUserId() {
          return this._jsonData.userId;
        }
        /**
         * 定时存储
         * @returns
         */


        scheduleSave() {
          if (!this._markSave) {
            return;
          }

          this.save();
        }
        /**
         * 标记为已修改
         */


        markModified() {
          this._markSave = true;
        }
        /**
         * 保存配置文件
         * @returns
         */


        save() {
          // 写入文件
          let str = JSON.stringify(this._jsonData); // // 加密代码
          // if (cc.game.config["encript"]) {
          //     str = new Xxtea("upgradeHeroAbility").xxteaEncrypt(str);
          // }

          let zipStr = '@' + (_crd && Util === void 0 ? (_reportPossibleCrUseOfUtil({
            error: Error()
          }), Util) : Util).encrypt(str); // let zipStr = str;

          this._markSave = false;

          if (!sys.isNative) {
            let ls = sys.localStorage;
            ls.setItem(StorageManager.KEY_CONFIG, zipStr);
            return;
          }

          let valueObj = {};
          valueObj[StorageManager.KEY_CONFIG] = zipStr;
          native.fileUtils.writeToFile(valueObj); // jsb.fileUtils.writeToFile(valueObj);
        }
        /**
         * 获取配置文件路径
         * @returns 获取配置文件路径
         */


        _getConfigPath() {
          let platform = sys.platform;
          let path = "";

          if (platform === sys.OS.WINDOWS) {
            path = "src/conf";
          } else if (platform === sys.OS.LINUX) {
            path = "./conf";
          } else {
            if (sys.isNative) {
              path = native.fileUtils.getWritablePath();
              path = path + "conf";
            } else {
              path = "src/conf";
            }
          }

          return path;
        }

      }, _class2._instance = void 0, _class2.KEY_CONFIG = 'template', _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bc05eb1a4b9256e554c2e7faf2a3476dae8388c.js.map