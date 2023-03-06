import { Component } from "react";
import babysh from "./baby";
import baby from "./porodact";

export default class list extends Component{

state={
    babysr:[new baby('fatemh','mohamadi',20,'/images/download.jpg'),
    new baby('fatemh','mohamadi',20,'/images/download (3).jpg'),
    new baby('fatemh','mohamadi',20,'/images/download (1).jpg'),
    new baby('fatemh','mohamadi',20,'/images/bachs-1.png')

]
}


render=()=>{
    return(<>
    
    <div className="row">

            {
                this.state.products.map(p=><babysh key={p.code} mahsool={p} />)
            }
        </div>
    
    </>)
}

}