import { BoxCollider, Line, MeshRenderer, Node, Quat, Vec2, Vec3, geometry, v3 } from "cc";
import { GlobalConst, ray, v3_1, worldMatrix } from "./GlobalConst";


const qt_1 = new Quat();
const mapHitPoint: Vec3 = new Vec3();

export class MapMgr {

    // 地图块的计算，当前地图有多少格子，那些格子可用
    // 当前地图存在的建筑物
    // 建筑物对应的状态
    // 各个建筑物的状态更新
    _node: Node;
    _meshRender: MeshRenderer;
    constructor() {

    }


    private static _ins: MapMgr;
    public static get ins() {
        return this._ins ||= new MapMgr();
    }


    public get node() {
        this._node ||= GlobalConst.mapPanel
        if (!this._meshRender) {
            this._meshRender = this._node.getComponent(MeshRenderer);
        }
        return this._node;
    }

    graphicsMapLine() {
        const node = this.node;
        const box = node.getComponent(BoxCollider);
        // const lineBox = new Node("line-box");
        // node.addChild(lineBox);
        // let line = lineBox.addComponent(Line);
        let line = node.getComponentInChildren(Line);
        v3_1.set(box.worldBounds.halfExtents);
        const hGridCount = Math.floor(v3_1.x * 2 / GlobalConst.mapGridWidth);
        const vGridCount = Math.floor(v3_1.z * 2 / GlobalConst.mapGridHeight);
        let arr = [];
        for (let x = 0; x < 100; x++) {
                arr.push(
                    v3(x, 0.2, x)
                );
                arr.push(
                    v3(-x, 0.2, x)
                );
        }
        (<any>line.positions) = arr;
    }

    /** 计算触发到地图上的点位, 传入屏幕坐标 */
    public calculateHitPoint(vec2: Vec2, out: Vec3) {
        if (!this._node) this.node;
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
        if (this.calculateHitPoint(vec2, mapHitPoint)) {
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
    public getHitPointToGridPosition(vec2: Vec2, out: Vec3, outGrid: Vec2) {
        if (this.calculateHitPoint(vec2, mapHitPoint)) {
            this._setMapPos(out, outGrid);
            return true;
        }
        return false;
    }

    private _setMapPos(out: Vec3, outGrid: Vec2) {
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
}