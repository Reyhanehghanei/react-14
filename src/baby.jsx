import { Component } from "react";
import { baby } from "./porodact";
im
import "bootstrap/dist/css/bootstrap.min"
export default class babysh extends Component{

    render=()=> {
        return(<>
        <div class="card" style={{width: '18rem;'}}>
    <img className="card-img-top" src={this.props.mahsool.image} alt="Card image cap" />
    <div className="card-body">
    <h5 className="card-title">{this.props.mahsool.name}</h5>
    <p className="card-text">{this.props.mahsool.famili}</p>
     <p className="card-text" style={{color:'red'}}>{this.props.mahsool.moadel}</p>
    </div>
    </div>  
        
    </>)
    }
}