import { _decorator, Component, Node, LabelComponent, Vec3, tween, UITransform, Size, CCObject, isValid, UIOpacity, AnimationClip, Animation } from 'cc';
import { PoolManager } from './poolManager';
const { ccclass, property } = _decorator;

@ccclass('Tips')
export class Tips extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property(LabelComponent)
    lbTips: LabelComponent = null!;
    targetPos: any;

    private _ani: Animation;
    protected onLoad(): void {
        this._ani = this.node.getComponent(Animation);
    }

    start() {
        // Your initialization goes here.
    }

    show(content: string, callback?: Function) {

        this.lbTips.string = content;
        this._ani.on(Animation.EventType.FINISHED, () => {

            PoolManager.instance.putNode(this.node);
            callback && callback();
        })
        this._ani.play();
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
