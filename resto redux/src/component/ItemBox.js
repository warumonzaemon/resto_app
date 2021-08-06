import React, {Component} from 'react';
import '../App.css';
/* import AddToCart from './AddToCart'; */

const ItemBox = (props) => {

    const onClickButtonHandler = (e) =>{
        props.addToCart(props.name, props.price);
        console.log(props.name, props.price)
    }
    const onClickDeleteHandler = () => {
       props.removeItem(props.name )   
    }

    const onClickEditHandler = () => {
        props.editThisItem(props.name);
        props.onClickToggleEditVisibility();
    }

    return(
        <div className="Container">
            <div >
                <img  src={props.img} alt={props.img}/>
            </div>
            <div className="Details">
                <strong>{props.name}</strong>
                <p><small>Php {props.price}</small></p>
                <p><button onClick={onClickButtonHandler}>Order</button></p>
                <p><button onClick={onClickEditHandler}>Edit</button></p>
                <p><button onClick={onClickDeleteHandler}>Delete</button></p>
            </div>
        </div>
    )
}

// class ItemBox extends Component {
//     constructor(props){
//         super(props)
        
        
//         this.onClickButtonHandler = this.onClickButtonHandler.bind(this);
//         this.onClickDeleteHandler = this.onClickDeleteHandler.bind(this);

//     }

//     onClickButtonHandler(e){
//         /* console.log(this.props.addToCart2) */
//         this.props.addToCart(this.props.name, this.props.price);
//         console.log(this.props.name, this.props.price)
//     }

//     onClickDeleteHandler(){
//        this.props.removeItem( this.props.name )   
//     }
 
//     render(){
//         return(
            
//             <div className="Container">
                
//                 <div >
//                     <img  src={this.props.img} alt={this.props.img}/>
//                 </div>
//                 <div className="Details">
//                     <strong>{this.props.name}</strong>
//                     <p><small>Php {this.props.price}</small></p>
//                     <p><button onClick={this.onClickButtonHandler}>Order</button></p>
//                     <p><button onClick={this.onClickDeleteHandler}>Delete</button></p>
//                 </div>
//             </div>
//         )
//     }
// }

export default ItemBox;