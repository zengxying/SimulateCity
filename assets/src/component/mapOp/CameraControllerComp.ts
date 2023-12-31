import { _decorator, Camera, CameraComponent, Component, director, EventTouch, game, misc, Node, Quat, sp, Vec2, Vec3 } from 'cc';
import { GlobalConst, v3_1, v3_2 } from '../../GlobalConst';
import { Msg } from '../../msg/msg';
import { MsgEvent } from '../../msg/MsgEvent';
const { ccclass, property } = _decorator;

const qt_1 = new Quat();
const forward = new Vec3();
const right = new Vec3();

@ccclass('CameraControllerComp')
export class CameraControllerComp extends Component {

    private _camera: CameraComponent;

    @property
    public moveSpeed = 1;

    @property
    public moveSpeedShiftScale = 5;

    @property({ slide: true, range: [0.05, 0.5, 0.01] })
    public damp = 0.2;

    @property
    public rotateSpeed = 1;

    private _velocity = new Vec3();
    private _position = new Vec3();
    private _speedScale = 1;

    distanceY: number = 200;
    private _euler: Vec3 = new Vec3();

    private _rotaRatio: number = 0.05;

    // 移动  单指

    // 旋转  双指
    // 缩放

    // 边界
    // 数据区间

    // 插值运算

    protected onLoad(): void {
        CameraControllerComp.ins = this;
        GlobalConst.camera = this._camera = this.node.getComponentInChildren(CameraComponent);
        Vec3.copy(this._position, this.node.getPosition());
        Vec3.copy(this._euler,  this._camera.node.eulerAngles);

    }

    protected onEnable(): void {
        Msg.on(MsgEvent.UPDATE_CAMERA_POSITION, this.updateCameraPosition.bind(this));
        Msg.on(MsgEvent.UPDATE_CAMERA_EULER_ANGLE, this.updateCameraEulerAngle.bind(this));
        Msg.on(MsgEvent.OP_TOUCH_ROTA, this.rotaView.bind(this));
        Msg.on(MsgEvent.OP_TOUCH_SCALE, this.scaleView.bind(this));
    }

    protected onDisable(): void {
        Msg.off(MsgEvent.OP_TOUCH_SCALE, this.rotaView);
        Msg.off(MsgEvent.OP_TOUCH_ROTA, this.scaleView);
    }

    updateCameraPosition(vec3: Vec3){
        this.node.setPosition(vec3);
        this._position.set(vec3);
    }

    updateCameraEulerAngle(vec3: Vec3){
        this._euler.set(vec3)
    }
    

    /** 缩放 */
    public scaleView(speed: number) {
        // Log.log("scaleView -- speed:"+speed);
        if(Math.abs(this._position.y + speed) < this.distanceY){
            Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this._camera.node.rotation);
            Vec3.scaleAndAdd(this._position, this.node.position, v3_1, speed);
        }
    }

    /** 旋转 */
    public rotaView(vec2: Vec2) { // 旋转看着像是地图的旋转
        return;
        Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this._camera.node.rotation);

        let x = vec2.x;
        let y = vec2.y;
        x = this._euler.x + x * this._rotaRatio;
        const max = -30;
        const min = -90;
        if(x < min || x > max){
            if(x < min){
                this._euler.x = min;
            }
            if(x > max){
                this._euler.x = max;
            }
            console.log("旋转角度超标了");
            return;
        }
        this._euler.x = x;
    }

    

    public update(dt: number) {
        const t = Math.min(dt / this.damp, 1);
        // position
        Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
        Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
        Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
        this.node.setPosition(v3_1);
        const moveDir = GlobalConst.cameraMoveDir;
        if (moveDir.lengthSqr()) {
            Vec3.transformQuat(forward, Vec3.FORWARD, this.node.rotation);
            forward.normalize();
            Vec3.cross(right, forward, Vec3.UP);
            right.normalize();

            Vec3.scaleAndAdd(this._position, this._position, forward, this.moveSpeed * this._speedScale * moveDir.z);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);

            Vec3.scaleAndAdd(this._position, this._position, right, this.moveSpeed * this._speedScale * moveDir.x);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);

            Vec3.scaleAndAdd(this._position, this._position, Vec3.UP, this.moveSpeed * this._speedScale * moveDir.y);
            Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
            this.node.setPosition(v3_1);
        }

        // rotation
        Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
        Quat.slerp(qt_1, this._camera.node.rotation, qt_1, t);
        this._camera.node.rotation = qt_1;
        this._velocity.set();
    }


    //===================================================== 废弃代码============================
    /** 移动 */
    public moveView(vec2:Vec2) {
        console.log("转换出来的坐标:vec2 vec2", vec2.x, vec2.y);
        const scale = 1 + this._position.y / this.distanceY * 10;
        vec2.multiplyScalar(scale);
        this._velocity.set(vec2.x, 0, vec2.y);
        // this._camera.screenToWorld(this._velocity,this._velocity);
        // Vec3.subtract(this._velocity, this._velocity, this._position);
    }

    /** 移动 */
    public moveView2(vec2:Vec2) {
        console.log("转换出来的坐标:vec2 vec2", vec2.x, vec2.y);
        const scale = 1 + this._position.y / this.distanceY * 10;
        vec2.multiplyScalar(scale);
        this._velocity.set(vec2.x, 0, vec2.y);
        // this._camera.screenToWorld(this._velocity,this._velocity);
        // Vec3.subtract(this._velocity, this._velocity, this._position);
    }

    public static ins:CameraControllerComp;
    public static camera:Camera;
    public static test(vec2:Vec2){

        // console.log("转换出来的坐标:vec2 vec2", vec2.x, vec2.y);
        // v3_2.set(vec2.x, vec2.y, 0);
        // this.ins._camera.screenToWorld(v3_2,v3_1);
        // console.log("转换出来的坐标:", v3_1.x, v3_1.y, v3_1.z);
    }
}


