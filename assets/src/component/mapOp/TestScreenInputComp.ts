import { _decorator, Component, Quat, Vec2, Vec3, Input, game, EventTouch, EventMouse, input, EventKeyboard, KeyCode, v2, Node } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('TestScreenInputComp')
export class TestScreenInputComp extends Component {

    protected onLoad(): void {
        this.node.active = false
        return ;
        this.node.on(Node.EventType.TOUCH_START, (e:EventTouch)=>{
            console.log("ui  2d节点上的 触摸事件触发了TOUCH_START")
        }, this);
        this.node.on(Node.EventType.TOUCH_MOVE, (e:EventTouch)=>{
            console.log("ui  2d节点上的 触摸事件触发了TOUCH_MOVE")
        }, this);
        this.node.on(Node.EventType.TOUCH_END, (e:EventTouch)=>{
            console.log("ui  2d节点上的 触摸事件触发了TOUCH_END")
        }, this);
    }
}