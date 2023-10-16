import { EventKeyboard, EventMouse, EventTouch } from "cc";

export interface IOperateHardwareHandler {
    onMouseWheel(e: EventMouse);
    onKeyDown(e: EventKeyboard);
    onKeyUp(e: EventKeyboard);
}