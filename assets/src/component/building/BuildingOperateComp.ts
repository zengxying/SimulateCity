import { _decorator, Component, Quat, Vec2, Vec3, Input, game, EventTouch, EventMouse, input, EventKeyboard, KeyCode, v2, v3, Node } from 'cc';
import { GlobalConst, v2_1, v2_2, v3_1, v3_2 } from '../../GlobalConst';
import { MsgEvent } from '../../msg/MsgEvent';
import { Msg } from '../../msg/msg';
import { Util } from '../../framework/util';
import { MapOperateComp } from '../mapOp/MapOperateComp';

const { ccclass, property } = _decorator;
enum BuildingOperateState {
    NONE,
    LONG_TOUCH_CHECK,
    LONG_TOUCH_RUNNING,
    SHORT_TOUCH_RUNNING,
}

@ccclass('BuildingOperateComp')
export class BuildingOperateComp extends Component {

    private target: Node;
    private _longTouchTime: number = 1;

    private _state: BuildingOperateState = BuildingOperateState.NONE;
    private _startTouchPoint: Vec2 = new Vec2();

    public onLoad() {
        const targetEvent = this.getTarget();
        targetEvent.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        targetEvent.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        targetEvent.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        targetEvent.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        this.target = Util.createSphere(this.node.parent, 1, v3())
    }

    public onDestroy() {
        const targetEvent = this.getTarget();
        targetEvent.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        targetEvent.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        targetEvent.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        targetEvent.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

    }


    protected getTarget(): any {
        return input;
    }



    public onTouchStart(e: EventTouch) {
        if (GlobalConst.interruptBuildingOp) return console.warn("中断操作中...............");
        // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }
        const touches = e.getAllTouches();
        if (this._isSinglePoint(e)) {
            this.scheduleOnce(this.onLongTouch, this._longTouchTime);
            this._state = BuildingOperateState.LONG_TOUCH_CHECK;
            touches[0].getLocation(this._startTouchPoint);
        }
    }

    onLongTouch() {
        // 进入了拖动建筑物流程
        this._state = BuildingOperateState.LONG_TOUCH_RUNNING;
        GlobalConst.mapPanel.getHitPointToGridPosition(this._startTouchPoint, v3_1);
        this.target.setPosition(v3_1);
    }

    private _isSinglePoint(e: EventTouch) {
        return e.getAllTouches().length <= 1;
    }

    public onTouchMove(e: EventTouch) {
        if (GlobalConst.interruptBuildingOp) return console.warn("中断操作中...............");
        const touches = e.getAllTouches();
        if (this._isSinglePoint(e)) {

            e.getDelta(v2_1);
            if (this._state == BuildingOperateState.LONG_TOUCH_CHECK && v2_1.lengthSqr() > 100) {
                this._state = BuildingOperateState.NONE;
                this.unschedule(this.onLongTouch);
            }
            if (this._state == BuildingOperateState.LONG_TOUCH_RUNNING) {
                touches[0]
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
        // if (document.exitPointerLock) { document.exitPointerLock(); }
        const touches = e.getAllTouches();
        // console.log("onTouchEnd:-->" + touches.length);
        if (touches.length >= 1) { // 重置记录触屏点，更新射线检测点，这样双指操作中抬起一个手指不会导致屏幕移动           
            touches[0].getLocation(v2_2);
            Msg.emit(MsgEvent.OP_RESET_CLICK_POINT, v2_2);
            // Util.getScreenToWorld(v2_2, v3_2, lv);
            Msg.emit(MsgEvent.OP_TOUCH_MOVE_MAP, v2_2);
        }

        // this._continueMoveDirty = true;
        Msg.emit(MsgEvent.OP_TOUCH_MOVE, v2_1.set(0, 0));
    }

}