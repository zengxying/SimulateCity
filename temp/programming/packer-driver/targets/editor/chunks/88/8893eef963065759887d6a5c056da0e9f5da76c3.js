System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, resources, error, Prefab, instantiate, TextAsset, JsonAsset, Texture2D, EffectAsset, AudioClip, AnimationClip, ImageAsset, SpriteFrame, SpriteAtlas, Mesh, Material, Skeleton, SceneAsset, Vec3, director, Msg, Res, _crd;

  function _reportPossibleCrUseOfMsg(extras) {
    _reporterNs.report("Msg", "./msg/msg", _context.meta, extras);
  }

  _export("Res", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      error = _cc.error;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      TextAsset = _cc.TextAsset;
      JsonAsset = _cc.JsonAsset;
      Texture2D = _cc.Texture2D;
      EffectAsset = _cc.EffectAsset;
      AudioClip = _cc.AudioClip;
      AnimationClip = _cc.AnimationClip;
      ImageAsset = _cc.ImageAsset;
      SpriteFrame = _cc.SpriteFrame;
      SpriteAtlas = _cc.SpriteAtlas;
      Mesh = _cc.Mesh;
      Material = _cc.Material;
      Skeleton = _cc.Skeleton;
      SceneAsset = _cc.SceneAsset;
      Vec3 = _cc.Vec3;
      director = _cc.director;
    }, function (_unresolved_2) {
      Msg = _unresolved_2.Msg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fea4boABrlJL6BAxHDZ2QxF", "res", undefined);

      __checkObsolete__(['_decorator', 'resources', 'Node', 'Asset', 'error', 'Constructor', 'Prefab', 'instantiate', 'TextAsset', 'JsonAsset', 'Texture2D', 'EffectAsset', 'AudioClip', 'AnimationClip', 'ImageAsset', 'SpriteFrame', 'SpriteAtlas', 'Mesh', 'Material', 'Skeleton', 'SceneAsset', 'Vec3', 'director']);

      _export("Res", Res = class Res {
        static load(path, type, cb) {
          this.count++;
          resources.load(path, type, function (err, res) {
            if (err) {
              error(path, err.message || err);
              (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
                error: Error()
              }), Msg) : Msg).emit('msg_res_error');
            }

            if (cb) {
              cb(err, res);
            }

            Res.count--;
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit('msg_check_res_cache_end');
          });
        }

        static loadJson(path, cb) {
          this.load(path, JsonAsset, cb);
        }

        static loadTxt(path, cb) {
          this.load(path, TextAsset, cb);
        }

        static loadPrefab(path, cb) {
          this.load(path, Prefab, cb);
        }

        static loadTex2D(path, cb) {
          this.load(path, Texture2D, cb);
        }

        static loadImage(path, cb) {
          this.load(path, ImageAsset, cb);
        }

        static loadSprite(path, cb) {
          this.load(path, SpriteFrame, cb);
        }

        static loadSpriteAtlas(path, cb) {
          this.load(path, SpriteAtlas, cb);
        }

        static loadEffect(path, cb) {
          this.load(path, EffectAsset, cb);
        }

        static loadAudio(path, cb) {
          this.load(path, AudioClip, cb);
        }

        static loadAnimationClip(path, cb) {
          this.load(path, AnimationClip, cb);
        }

        static loadMesh(path, cb) {
          this.load(path, Mesh, cb);
        }

        static loadMateiral(path, cb) {
          this.load(path, Material, cb);
        }

        static loadSkeleton(path, cb) {
          this.load(path, Skeleton, cb);
        }

        static loadScene(path, cb) {
          this.load(path, SceneAsset, cb);
        }

        static inst(asset, root = undefined, pos = Vec3.ZERO) {
          const instObj = instantiate(asset);

          if (root === undefined) {
            var _director$getScene;

            (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.addChild(instObj);
          } else {
            instObj.setParent(root);
          }

          instObj.setPosition(pos);
          instObj.setScale(Vec3.ONE);
          return instObj;
        }

        static instNode(node, root = undefined, pos = Vec3.ZERO) {
          const instObj = instantiate(node);

          if (root === undefined) {
            var _director$getScene2;

            (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.addChild(instObj);
          } else {
            instObj.setParent(root);
          }

          instObj.setPosition(pos);
          instObj.setScale(Vec3.ONE);
          return instObj;
        }

        static loadDir(path, type, cb) {
          this.count++;
          resources.loadDir(path, type, function (err, res) {
            if (err) {
              error(err.message || err);
              (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
                error: Error()
              }), Msg) : Msg).emit('msg_res_error');
            }

            if (cb) {
              cb(err, res);
            }

            Res.count--;
            (_crd && Msg === void 0 ? (_reportPossibleCrUseOfMsg({
              error: Error()
            }), Msg) : Msg).emit('msg_check_res_cache_end');
          });
        }

        static loadDirJson(path, cb) {
          this.loadDir(path, JsonAsset, cb);
        }

        static loadDirPrefab(path, cb) {
          this.loadDir(path, Prefab, cb);
        }

        static loadDirText(path, cb) {
          this.loadDir(path, TextAsset, cb);
        }

        static loadDirSprite(path, cb) {
          this.loadDir(path, SpriteFrame, cb);
        }

        static loadDirSound(path, cb) {
          this.loadDir(path, AudioClip, cb);
        }

      });

      Res.count = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8893eef963065759887d6a5c056da0e9f5da76c3.js.map