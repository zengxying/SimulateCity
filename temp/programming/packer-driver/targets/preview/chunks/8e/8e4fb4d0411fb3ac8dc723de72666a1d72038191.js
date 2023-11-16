System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, BuildingStateType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e488bVsHnBFQ5Z6/54rWlF7", "EnumIndex", undefined);

      _export("BuildingStateType", BuildingStateType = /*#__PURE__*/function (BuildingStateType) {
        BuildingStateType[BuildingStateType["SELECT"] = 0] = "SELECT";
        BuildingStateType[BuildingStateType["CLICK"] = 1] = "CLICK";
        BuildingStateType[BuildingStateType["MOVE"] = 2] = "MOVE";
        BuildingStateType[BuildingStateType["UPGRADE"] = 3] = "UPGRADE";
        BuildingStateType[BuildingStateType["NONE"] = 4] = "NONE";
        return BuildingStateType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e4fb4d0411fb3ac8dc723de72666a1d72038191.js.map