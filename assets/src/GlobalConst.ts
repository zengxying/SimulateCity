import { Camera, Node, Vec2, Vec3, geometry, mat4 } from "cc";
import { MapOperateComp } from "./component/mapOp/MapOperateComp";

export class GlobalConst {

    /** 是否中断相机的操作 */
    static interruptMapOp: boolean = false;
    /** 是否中断建筑物的操作 */
    static interruptBuildingOp: boolean = false;
    /** 是否选中建筑物 */
    static selectBuilding:boolean = false;


    /** 相机移动的方向 */
    static cameraMoveDir: Vec3 = new Vec3();

    static camera: Camera;

    /** 地图平面 */
    static mapPanel: MapOperateComp;

    // 地图格子大小
    static mapGridWidth: number = 2;
    static mapGridHeight: number = 2;

}



export const v2_1 = new Vec2();
export const v2_2 = new Vec2();
export const v2_3 = new Vec2();
export const v2_4 = new Vec2();

export const v3_1 = new Vec3();
export const v3_2 = new Vec3();
export const v3_3 = new Vec3();
export const worldMatrix = mat4();

export const ray = new geometry.Ray();