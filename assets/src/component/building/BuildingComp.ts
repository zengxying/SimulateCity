import { _decorator, Component, Quat, Vec2, Vec3, Input, game, EventTouch, EventMouse, input, EventKeyboard, KeyCode, v2 } from 'cc';
import { BuildingData } from '../../data/BuildingData';
import { BuildingStateType } from '../../data/EnumIndex';
const { ccclass, property } = _decorator;


@ccclass('BuildingComp')
export class BuildingComp extends Component {

    data:BuildingData;
    

    public changeState(state:BuildingStateType){
        this.data.state = state;

        // ui展示
    }
}