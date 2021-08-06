import React, {Component, useState} from 'react';
import ItemBox from './ItemBox';

const AddToCart = (props) => {
    const [cart, setCart] = useState([]);

    /* const onChangeItemQuantity (e){
        let x = e.target.value
        this.setState({total: x * this.props.itemAddedPrice})
        this.props.setItemPriceTotal(this.props.itemAddedName, this.state.total);  
    }  */

    return(
        <>
        <tr>
            <td>{props.itemAddedName}</td>
            <td>{props.itemAddedPrice}</td>
            <td>{props.quantity}</td>
            {/* <td><input type="number" onChange={e => this.onChangeItemQuantity(e)} defaultValue={0}/></td> */}
        </tr>
            
        </>
    )
}

// class AddToCart extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {cart: [], total: 0 }
//         /* this.addToCart = this.addToCart.bind(this); */
//         this.onChangeItemQuantity = this.onChangeItemQuantity.bind(this)
//     }

//     onChangeItemQuantity (e){
//         console.log(this.state.total)
//         let x = e.target.value
//         this.setState({total: x * this.props.itemAddedPrice})
//         this.props.setItemPriceTotal(this.props.itemAddedName, this.state.total);
        
//     }


        


//     render() {
//         return(
//             <>
//             {this.state.total}
//             <tr>
//                 <td>{this.props.itemAddedName}</td>
//                 <td>{this.props.itemAddedPrice}</td>
//                 <td><input type="number" onChange={e => this.onChangeItemQuantity(e)} defaultValue={0}/></td>
//             </tr>
                
//             </>
//         )

//     }
// }

export default AddToCart