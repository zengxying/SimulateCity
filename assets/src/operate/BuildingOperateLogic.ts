import { _decorator, Component, Quat, Vec2, Vec3, Input, game, EventTouch, Node, v3 } from 'cc';
import { GlobalConst, v2_1, v2_2, v3_1, v3_2 } from '../GlobalConst';
import { MsgEvent } from '../msg/MsgEvent';
import { Msg } from '../msg/msg';
import { IOperateHandler } from './IOperateLogic';
import { Util } from '../framework/util';

enum BuildingOperateState {
    NONE,
    LONG_TOUCH_CHECK,
    LONG_TOUCH_RUNNING,
    SHORT_TOUCH_RUNNING,
}

export class BuildingOperateLogic implements IOperateHandler {

    private target: Node;
    private _longTouchTime: number = 1;

    private _state: BuildingOperateState = BuildingOperateState.NONE;
    private _startTouchPoint: Vec2 = new Vec2();

    _comp:Component;
    constructor(comp:Component){
        this._comp = comp;
        this.target = Util.createSphere(this._comp.node.parent, 0.5, v3());
    }


    public onTouchStart(e: EventTouch) {
        if (GlobalConst.interruptBuildingOp) return console.warn("中断操作中...............");
        // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }
        const touches = e.getAllTouches();
        if (this._isSinglePoint(e)) {
            this._comp.scheduleOnce(this.onLongTouch.bind(this), this._longTouchTime);
            this._state = BuildingOperateState.LONG_TOUCH_CHECK;
            touches[0].getLocation(this._startTouchPoint);
        }
    }

    onLongTouch() {
        // 进入了拖动建筑物流程
        this._state = BuildingOperateState.LONG_TOUCH_RUNNING;
        GlobalConst.mapPanel.getHitPointToGridPosition(this._startTouchPoint, v3_1);
        this.target.setPosition(v3_1);
        console.log("长按中....................");
    }

    private _isSinglePoint(e: EventTouch) {
        return e.getAllTouches().length <= 1;
    }

    public checkMoveBuild() :boolean{
        return this._state == BuildingOperateState.LONG_TOUCH_RUNNING;
    }

    public onTouchMove(e: EventTouch) {
        if (GlobalConst.interruptBuildingOp) return console.warn("中断操作中...............");
        const touches = e.getAllTouches();
        if (this._isSinglePoint(e)) {

            touches[0].getLocation(this._startTouchPoint);
            e.getDelta(v2_1);
            if (this._state == BuildingOperateState.LONG_TOUCH_CHECK && v2_1.lengthSqr() > 100) {
                this._state = BuildingOperateState.NONE;
                this._comp.unschedule(this.onLongTouch);
            }
            if (this._state == BuildingOperateState.LONG_TOUCH_RUNNING) {
                GlobalConst.mapPanel.getHitPointToGridPosition(this._startTouchPoint, v3_1);
                this.target.setPosition(v3_1);
            }
            if (this._state == BuildingOperateState.SHORT_TOUCH_RUNNING) {

            }
        }
    }

    public onTouchEnd(e: EventTouch) {
        this._state = BuildingOperateState.NONE;
        if (GlobalConst.interruptBuildingOp) return console.warn("中断操作中...............");
        
    }

}