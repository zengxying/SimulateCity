import { EventKeyboard, EventMouse, EventTouch } from "cc";

export interface IOperateHandler {
    onTouchStart(e: EventTouch);
    onTouchMove(e: EventTouch);
    onTouchEnd(e: EventTouch);
}