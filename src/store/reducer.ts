import { State ,Action} from "../interfaces";
import { DATA_LOADED } from "./actions";

const initstate:State={
     data:[]
}
export default function(state:State=initstate,action:Action):State{
    if(action.type===DATA_LOADED && action.loaded_data?.length){
        return Object.assign({},state,{data: state.data.concat(action.loaded_data)})
    }
    return state
}