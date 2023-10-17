import { _decorator, BoxCollider, Camera, CameraComponent, CanvasComponent, Component, director, EventTouch, game, geometry, MeshRenderer, misc, Node, PhysicsSystem, Quat, screen, sp, Vec2, Vec3 } from 'cc';
import { GlobalConst, ray, v3_1, v3_2, v3_3, worldMatrix } from '../../GlobalConst';
import { Util } from '../../framework/util';
import { MsgEvent } from '../../msg/MsgEvent';
import { Msg } from '../../msg/msg';

const { ccclass, property } = _decorator;

const qt_1 = new Quat();
const mapHitPoint: Vec3 = new Vec3();
const maxAngle = -30;
const minAngle = -89;

@ccclass('MapOperateComp')
export class MapOperateComp extends Component {

    private _eulerP: Vec3 = new Vec3();

    private _cameraRay: geometry.Ray = new geometry.Ray();
    private _centerPoint: Vec3 = new Vec3();
    private _position: Vec3 = new Vec3();

    @property({ slide: true, range: [0.05, 0.5, 0.01] })
    public damp = 0.2;
    @property(Node)
    sphere: Node;

    private _rotaAxisDirty: boolean = true;
    private _moveDirty: boolean = true;

    public static ins: MapOperateComp;
    _velocity: Vec3 = new Vec3();
    private _speedScale: number = 1;

    _meshRender: MeshRenderer;

    private _preHit3DPoint: Vec3 = new Vec3();
    private _noteTouchePoint: Vec2 = new Vec2();
    private _rotaRatio: number = 0.5;

    protected onLoad(): void {
        MapOperateComp.ins = this;
        GlobalConst.mapPanel = this;
        this._meshRender = this.node.getComponent(MeshRenderer);
        Vec3.copy(this._eulerP, this.node.eulerAngles);
        Vec3.copy(this._position, this.node.position);
    }

    protected onEnable(): void {
        this.calculateRotaAxis();
        Msg.on(MsgEvent.OP_TOUCH_ROTA, this.rotaView.bind(this));
        Msg.on(MsgEvent.OP_TOUCH_MOVE, this.moveView.bind(this));
        Msg.on(MsgEvent.OP_TOUCH_MOVE_MAP, this.noteMoveTochePoint.bind(this));
        Msg.on(MsgEvent.OP_RESET_CLICK_POINT, this._updateHitPoint.bind(this));
    }

    protected onDisable(): void {
        Msg.off(MsgEvent.OP_TOUCH_ROTA);
    }

    private _updateHitPoint(vec2: Vec2) {
        this.calculateHitPoint(vec2);
        this._preHit3DPoint.set(mapHitPoint);
    }

    /** 计算触发到地图上的点位, 传入屏幕坐标 */
    public calculateHitPoint(vec2: Vec2, out?: Vec3) {
        const camera = GlobalConst.camera;
        camera.screenPointToRay(vec2.x, vec2.y, ray);
        let dis = geometry.intersect.rayModel(ray, this._meshRender.model);
        if (dis) {
            ray.computeHit(mapHitPoint, dis); // 性能要好些
            out && out.set(mapHitPoint);
            return true;
        }
        return false;
    }

    /** 获取点击的格子, 传入屏幕坐标*/
    public getHitPointToGrid(vec2: Vec2, out: Vec2) {
        if (this.calculateHitPoint(vec2)) {
            this.node.inverseTransformPoint(v3_1, mapHitPoint);
            const scale = this.node.scale;
            let scaleX = GlobalConst.mapGridWidth / scale.x;
            let scaleY = GlobalConst.mapGridHeight / scale.z;

            out.x = Math.floor(v3_1.x / scaleX);
            out.y = Math.floor(v3_1.z / scaleY);
            return true;
        }
        return false;
    }

    /** 获取点击的格子中心坐标, 传入屏幕坐标 */
    public getHitPointToGridPosition(vec2: Vec2, out: Vec3, outGrid:Vec2) {
        if (this.calculateHitPoint(vec2)) {
            this._setMapPos(out,outGrid);
            return true;
        }
        return false;
    }

    private _setMapPos(out: Vec3,outGrid:Vec2) {
        this.node.inverseTransformPoint(v3_1, mapHitPoint);
        const scale = this.node.scale;
        let scaleX = GlobalConst.mapGridWidth / scale.x;
        let scaleY = GlobalConst.mapGridHeight / scale.z;
        
        outGrid.x = Math.floor(v3_1.x / scaleX);
        outGrid.y = Math.floor(v3_1.z / scaleY);

        out.x = (outGrid.x + 0.5) * scaleX;
        out.y = out.y;
        out.z = (outGrid.y + 0.5) * scaleY;

        this.node.getWorldMatrix(worldMatrix);
        Vec3.transformMat4(out, out, worldMatrix);
    }



    noteMoveTochePoint(vec2: Vec2) {
        this._moveDirty = true;
        this._noteTouchePoint.set(vec2);
    }

    moveMap(vec2: Vec2) {
        if (!this._moveDirty) return;
        this._moveDirty = false;
        let canHit = this.calculateHitPoint(vec2);

        if (canHit) {
            v3_1.set(mapHitPoint);
            Vec3.subtract(v3_2, v3_1, this._preHit3DPoint);
            // this._position.set(v3_1);
            this._preHit3DPoint.set(v3_1);

            this._velocity.add(v3_2); // 有时触摸的帧会多执行或者这个检测放到帧的时候执行
            Util.createSphere(this.node.parent, 0.5, v3_1);
        }

    }


    resetRotaAxisDirty() {
        this._rotaAxisDirty = true;
    }

    private moveView(vec2: Vec2) {
        this.resetRotaAxisDirty();
    }

    /**
     * 计算旋转的轴
     */
    public calculateRotaAxis() {
        if (!this._rotaAxisDirty) return;



        this._rotaAxisDirty = false;
        const camera = GlobalConst.camera;

        camera.screenPointToRay(screen.windowSize.width / 2, screen.windowSize.height / 2, this._cameraRay)
        // console.time("射线检测时间：");

        let dis = geometry.intersect.rayModel(this._cameraRay, this._meshRender.model);
        if (dis) {
            this._cameraRay.computeHit(this._centerPoint, dis); // 性能要好些
        }

        // 暂时不用物理检测，比较耗时
        // if (PhysicsSystem.instance.raycast(this._cameraRay)) {
        //     const r = PhysicsSystem.instance.raycastResults;
        //     for (let i = 0; i < r.length; i++) {
        //         const item = r[i];
        //         if (item.collider.node.uuid == this.node.uuid) {
        //             // 射线检测到自己了
        //             this._centerPoint.set(item.hitPoint);
        //         }
        //     }
        //     console.log("射线检测:", r);
        // } else {
        //     console.log("射线检测:fail");
        // }
        // console.timeEnd("射线检测时间：");
        // console.time("射线检测时间 01：");
        if (this.sphere) {
            this.sphere.setPosition(this._centerPoint);
        }
        this.startAngle = 0;
        this.node.getPosition(this.originPos);
        // console.timeEnd("射线检测时间 01：");
    }


    /** 旋转 */
    public rotaView(vec2: Vec2) { // 旋转看着像是地图的旋转

        this.calculateRotaAxis();
        let x = vec2.x;
        let y = vec2.y;

        this.setRotaCamera(x);
        this.setRotaPos(y);
        // console.log("yyyy----->" + y);

        // this._calculateRotaPos2(y);

        // Quat.rotateAround(this._rotation, this._rotation, this.node.forward, y);
        // Quat.rotateAround(this._rotation, this._rotation, this.node.right, x);
        // if (this._eulerP.x + x < -30 && this._eulerP.x + x > -90) { // x处角度的旋转限制 测试使用
        //     this._eulerP.x += x;
        // }
        // this._eulerP.y += y;
    }

    // TODO  旋转 有问题
    setRotaCamera(x: number) {
        return this.setRotaCamera2(x)
        const cameraNode = GlobalConst.camera.node;
        const wpos = cameraNode.parent.worldPosition;
        Vec3.subtract(v3_1, wpos, this._centerPoint);

        let rotax = x;

        // 计算角度的旋转坐标
        const angle = misc.degreesToRadians(rotax); // 转换成弧度 
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        const newY = v3_1.y * cosAngle - v3_1.z * sinAngle;
        const newZ = v3_1.y * sinAngle + v3_1.z * cosAngle;
        v3_1.set(0, newY, newZ);
        Vec3.transformQuat(v3_1, v3_1, cameraNode.rotation);

        v3_3.set(wpos.x, this._centerPoint.y + newY, newZ + this._centerPoint.z);
        v3_3.set(this._centerPoint.x + v3_1.x, this._centerPoint.y + v3_1.y, v3_1.z + this._centerPoint.z);
        // Vec3.transformQuat(v3_3, v3_3, GlobalConst.camera.node.rotation);
        Msg.emit(MsgEvent.UPDATE_CAMERA_POSITION, v3_3);

        cameraNode.lookAt(this._centerPoint); // 看向地图上的点

        Msg.emit(MsgEvent.UPDATE_CAMERA_EULER_ANGLE, cameraNode.eulerAngles);
    }

    // TODO  旋转 有问题
    setRotaCamera2(x: number) {
        const cameraNode = GlobalConst.camera.node;
        const eulerAngles = cameraNode.eulerAngles;
        
        if(eulerAngles.x + x < minAngle || eulerAngles.x + x > maxAngle){
            console.log("超过极限了");
            if(eulerAngles.x + x < minAngle){
                x = minAngle - eulerAngles.x;
            }
            if(eulerAngles.x + x > maxAngle){
                x = maxAngle - eulerAngles.x;
            }

            console.log("解锁:eulerAngles.x + x : " + eulerAngles.x + x);
        }
        const wpos = cameraNode.parent.worldPosition;
        Vec3.subtract(v3_1, wpos, this._centerPoint); // 方向向量

        let rotax = x;
        const angle = misc.degreesToRadians(rotax); // 转换成弧度 
        qt_1.set();
        Quat.rotateAround(qt_1, qt_1, cameraNode.right, angle); // 计算四元素的值
        Vec3.transformQuat(v3_1, v3_1, qt_1); // 绕四元素旋转

        v3_3.set(this._centerPoint.x + v3_1.x, this._centerPoint.y + v3_1.y, v3_1.z + this._centerPoint.z);
        // Vec3.transformQuat(v3_3, v3_3, GlobalConst.camera.node.rotation);
        Msg.emit(MsgEvent.UPDATE_CAMERA_POSITION, v3_3);

        cameraNode.lookAt(this._centerPoint); // 看向地图上的点

        Msg.emit(MsgEvent.UPDATE_CAMERA_EULER_ANGLE, cameraNode.eulerAngles);
    }



    private startAngle: number = 0;
    private originPos: Vec3 = new Vec3();
    setRotaPos(addAngle: number) {

        addAngle *= this._rotaRatio;
        this._eulerP.y -= addAngle; // 一个旋转角度的计算不对也会导致地图展示出来不是想要的样子

        this.startAngle += addAngle;

        // 获取物体相对于旋转中心的位置
        Vec3.subtract(v3_1, this.originPos, this._centerPoint);
        const localPosition = v3_1;
        // const localPosition = this.node.getPosition(v3_1).subtract(this._centerPoint);

        // 计算旋转后的位置  每次旋转的值加上本身的旋转度数
        const angle = misc.degreesToRadians(this.startAngle); // 转换成弧度 
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        const newX = localPosition.x * cosAngle - localPosition.z * sinAngle;
        const newZ = localPosition.x * sinAngle + localPosition.z * cosAngle;

        // 更新物体的位置
        this._position.set(newX + this._centerPoint.x, this._position.y, newZ + this._centerPoint.z);

        // Util.createSphere(this.node.parent, 0.5, this._position);
        // Res.instNode(this.sphere, this.node.parent, this._position);

        // 使物体朝向旋转中心
        // v3_1.set(this.node.eulerAngles)
        // this.node.lookAt(this._centerPoint, Vec3.UP);
        // this._eulerP.set(this.node.eulerAngles);
        // this.node.eulerAngles = v3_1;
    }

    public update(dt: number) {
        this.moveMap(this._noteTouchePoint)
        const t = Math.min(dt / this.damp, 1);
        this.updateRotation(t);
        // // position
        this._upadtePosition();
        Vec3.lerp(v3_1, this.node.getPosition(), this._position, t);
        this.node.setPosition(v3_1);
    }

    private _upadtePosition() {
        // Vec3.transformQuat(v3_1, this._velocity, this.node.rotation); //不需要跟旋转有关系，这里只需要按照世界坐标移动就好不然旋转后显示的效果就不对了
        Vec3.scaleAndAdd(this._position, this._position, this._velocity, this._speedScale);
        this._velocity.set();
    }

    private updateRotation(t: number) {
        // rotation
        Quat.fromEuler(qt_1, this._eulerP.x, this._eulerP.y, this._eulerP.z);
        Quat.slerp(qt_1, this.node.rotation, qt_1, t);
        this.node.rotation = qt_1;
    }

    // ============================================== 废弃代码====================
    private _calculateRotaPos2(y: number) {
        this._eulerP.y += y;

        this.node.getPosition(v3_1);
        Vec3.subtract(v3_3, v3_1, this._centerPoint);

        Vec3.rotateY(v3_2, v3_3, Vec3.UP, y);
        this._position.set(this._centerPoint.add(v3_2));
    }

    private _calculateRotaPos(radian: number) {
        this._eulerP.y += radian;

        // 获取物体相对于旋转中心的位置
        const localPosition = this.node.getPosition(v3_1).subtract(this._centerPoint);

        // 计算旋转后的位置  每次旋转的值加上本身的旋转度数
        const angle = misc.degreesToRadians(this._eulerP.y); // 转换成弧度 
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        const newX = localPosition.x * cosAngle - localPosition.z * sinAngle;
        const newZ = localPosition.x * sinAngle + localPosition.z * cosAngle;

        // 更新物体的位置
        this._position.set(newX + this._centerPoint.x, this._position.y, newZ + this._centerPoint.z);

        // 使物体朝向旋转中心
        // v3_1.set(this.node.eulerAngles)
        // this.node.lookAt(this._centerPoint, Vec3.UP);
        // this._eulerP.set(this.node.eulerAngles);
        // this.node.eulerAngles = v3_1;
    }




    private _testMatrixToMap(out: Vec3) {
        Vec3.transformInverseRTS(v3_1, mapHitPoint, this.node.rotation,
            this.node.position, Vec3.ONE);

        console.log(`hitpointx:${v3_1.x} hitpointy:${v3_1.y} hitpointz:${v3_1.z}`)
        out.x = (Math.floor(v3_1.x / GlobalConst.mapGridWidth) + 0.5) * GlobalConst.mapGridWidth;
        out.y = out.y;
        out.z = (Math.floor(v3_1.z / GlobalConst.mapGridHeight) + 0.5) * GlobalConst.mapGridHeight;
        // Vec3.transformMat4(child._pos, out, cur._mat);

        this.node.getWorldMatrix(worldMatrix);
        Vec3.transformMat4(out, out, worldMatrix);
        out.divide(this.node.scale);
        return true;
    }
}


