import { EventTouch, Vec2, Vec3, misc } from "cc";
import { IOperateHandler } from "./IOperateLogic";
import { GlobalConst, v2_1, v2_2, v2_3, v2_4, v3_1, v3_2 } from "../GlobalConst";
import { CameraControllerComp } from "../component/mapOp/CameraControllerComp";
import { MsgEvent } from "../msg/MsgEvent";
import { Msg } from "../msg/msg";
import { Util } from "../framework/util";
import { MapOperateComp } from "../component/mapOp/MapOperateComp";

const lv = 0.05;

export class MapOperateLogic implements IOperateHandler {

    // 滚轮缩放的速度
    rotaWheelSpeed: number = 0.1;

    // 手指滑动方向
    touchDir: Vec2 = new Vec2();

    private _continueMoveDirty: boolean = false;
    onTouchStart(e: EventTouch) {
        if (GlobalConst.interruptMapOp) return console.warn("中断操作中...............");
        // if (game.canvas.requestPointerLock) { game.canvas.requestPointerLock(); }
        this._continueMoveDirty = false;
        const touches = e.getAllTouches();

        CameraControllerComp.test(e.getLocation());
        if (touches.length > 1) {
            GlobalConst.selectBuilding = false;
        } else {
            touches[0].getLocation(v2_2);
            Msg.emit(MsgEvent.OP_RESET_CLICK_POINT, v2_2);
        }
    }

    onTouchMove(e: EventTouch) {
        if (GlobalConst.interruptMapOp) return console.warn("中断操作中...............");
        const touches = e.getAllTouches();
        if (touches.length > 1) {
            GlobalConst.selectBuilding = false;
            touches[0].getPreviousLocation(v2_1);
            touches[1].getPreviousLocation(v2_2);


            let disPre = Vec2.distance(v2_1, v2_2);
            Vec2.subtract(v2_3, v2_2, v2_1);

            touches[0].getPreviousLocation(v2_4).subtract(touches[1].getPreviousLocation(v2_1));
            touches[0].getLocation(v2_1).subtract(touches[1].getLocation(v2_2));
            let angle = misc.radiansToDegrees(v2_4.signAngle(v2_1));// y轴旋转

            let preY = touches[0].getDelta(v2_2).y;
            let curY = touches[1].getDelta(v2_1).y;

            touches[0].getLocation(v2_1);
            touches[1].getLocation(v2_2);
            let disCur = Vec2.distance(v2_1, v2_2);
            
            let scale = 0;
            let rota = 0;
            if (curY > 0 && preY > 0) {
                rota = Math.min(curY, preY);
            } else if (curY < 0 && preY < 0) {
                rota = Math.max(curY, preY);
            }
            scale = disPre - disCur;


            v2_2.set(rota, -angle);
            Msg.emit(MsgEvent.OP_TOUCH_SCALE, scale * 0.1);
            Msg.emit(MsgEvent.OP_TOUCH_ROTA, v2_2);
            // Log.log("on touch move:realAngle---> ", angle, v2_4.x, v2_4.y);
        } else {
            if (this._continueMoveDirty) {
                this._continueMoveDirty = false;
                return;
            }
            touches[0].getPreviousLocation(v2_1);
            Util.getScreenToWorld(v2_1, v3_1, lv);


            touches[0].getLocation(v2_2);
            Util.getScreenToWorld(v2_2, v3_2, lv);

            Vec3.subtract(v3_2, v3_1, v3_2);
            v2_1.set(v3_2.x, v3_2.z);

            Msg.emit(MsgEvent.OP_TOUCH_MOVE, v2_1);
            Msg.emit(MsgEvent.OP_TOUCH_MOVE_MAP, v2_2);
            
        }
    }

    onTouchEnd(e: EventTouch): any {
        if (GlobalConst.interruptMapOp) {
            console.warn("中断操作中...............")
            return;
        }
        // if (document.exitPointerLock) { document.exitPointerLock(); }
        const touches = e.getAllTouches();
        // console.log("onTouchEnd:-->" + touches.length);
        if(touches.length >= 1){ // 重置记录触屏点，更新射线检测点，这样双指操作中抬起一个手指不会导致屏幕移动           
            touches[0].getLocation(v2_2);
            Msg.emit(MsgEvent.OP_RESET_CLICK_POINT, v2_2);
            Util.getScreenToWorld(v2_2, v3_2, lv);
            Msg.emit(MsgEvent.OP_TOUCH_MOVE_MAP, v2_2);
            let vec3 = MapOperateComp.ins._velocity;
            console.log("MapOperateComp.ins._velocity x:"+vec3.x + " y:"+vec3.y + " z:"+vec3.z);
        }

        this._continueMoveDirty = true;
        Msg.emit(MsgEvent.OP_TOUCH_MOVE, v2_1.set(0, 0));
    }

}