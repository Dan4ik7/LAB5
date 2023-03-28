
import RootStore from "../mst/store/RootStore"
import { ContentModel } from "../mst/model/Content.model"
import { Instance } from "mobx-state-tree"

interface Machine {
    engine:string
    year:number
    miles:number
    origin:string
    color:string
}
export default Machine;


export interface IRootStore extends Instance<typeof RootStore>{

}

export interface IContentModel extends Instance<typeof ContentModel>{
    
}