import { BuildingStateType } from "./EnumIndex";

export class BuildingData{

    /** 横向宽度 */
    widthx:number;
    /** 纵向高度 */
    heightz:number;

    lv:number;
    /** 用于区分建筑物的显示模型等 */
    id:number;

    /** 操作状态 */
    state:BuildingStateType;
}

