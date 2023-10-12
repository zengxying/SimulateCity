System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Handler, _crd;

  _export("Handler", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7951vWUg1Cab1Mz3k97c66", "Handler", undefined);

      /**
      	 * <p><code>Handler</code> 是事件处理器类。</p>
      	 * <p>推荐使用 Handler.create() 方法从对象池创建，减少对象创建消耗。创建的 Handler 对象不再使用后，可以使用 Handler.recover() 将其回收到对象池，回收后不要再使用此对象，否则会导致不可预料的错误。</p>
      	 * <p><b>注意：</b>由于鼠标事件也用本对象池，不正确的回收及调用，可能会影响鼠标事件的执行。</p>
      	 */
      _export("Handler", Handler = class Handler {
        /**@private handler对象池*/

        /**@private */

        /** 执行域(this)。*/

        /** 处理方法。*/

        /** 参数。*/

        /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/

        /**@private */

        /**
         * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
         * @param	caller 执行域。
         * @param	method 处理函数。
         * @param	args 函数参数。
         * @param	once 是否只执行一次。
         */
        constructor(caller = null, method = null, args = null, once = false) {
          this.caller = void 0;
          this.method = void 0;
          this.args = void 0;
          this.once = false;
          this._id = 0;
          this.setTo(caller, method, args, once);
        }
        /**
         * 设置此对象的指定属性值。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
         * @return  返回 handler 本身。
         */


        setTo(caller, method, args, once = false) {
          this._id = Handler._gid++;
          this.caller = caller;
          this.method = method;
          this.args = args;
          this.once = once;
          return this;
        }
        /**
         * 执行处理器。
         */


        run() {
          if (this.method == null) return null;
          var id = this._id;
          var result = this.method.apply(this.caller, this.args);
          this._id === id && this.once && this.recover();
          return result;
        }
        /**
         * 执行处理器，并携带额外数据。
         * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
         */


        runWith(data) {
          if (this.method == null) return null;
          var id = this._id;
          if (data == null) var result = this.method.apply(this.caller, this.args);else if (!this.args && !data.unshift) result = this.method.call(this.caller, data);else if (this.args) result = this.method.apply(this.caller, this.args.concat(data));else result = this.method.apply(this.caller, data);
          this._id === id && this.once && this.recover();
          return result;
        }
        /**
         * 清理对象引用。
         */


        clear() {
          this.caller = null;
          this.method = null;
          this.args = null;
          return this;
        }
        /**
         * 清理并回收到 Handler 对象池内。
         */


        recover() {
          if (this._id > 0) {
            this._id = 0;

            Handler._pool.push(this.clear());
          }
        }
        /**
         * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
         * @return  返回创建的handler实例。
         */


        static create(caller, method, args = null, once = true) {
          if (Handler._pool.length) return Handler._pool.pop().setTo(caller, method, args, once);
          return new Handler(caller, method, args, once);
        }

      });

      Handler._pool = [];
      Handler._gid = 1;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fcdce91c307a9642efe65ac1e0e7864c08473d4f.js.map