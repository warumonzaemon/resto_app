import { useSelector, useDispatch } from 'react-redux';

const AddToCart = () => {
    const cart = useSelector(state => state.cart);
    const totalPrice = useSelector(state => state.totalPrice);
    const cartItemToBe = useDispatch();
    const changeQuantityHandler = (id, operation) => {
        console.log(id)
        console.log(operation)
        cartItemToBe({type: 'CHANGE_QUANTITY', payload: {id: id, operation: operation}})
    } 

    return(
        <>
            <h2>Cart</h2>
            {cart.length === 0 ? <h2>You do not have items in your cart</h2> :
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>    Quantity</th>
                            {/* <th>Try muna</th> */}
                        </tr>
                    </thead>    
                    <tbody>
                        {cart.map(cart => { return( 
                            <tr key={cart.id} >
                                <td>{cart.name}</td>
                                <td>Php {cart.price}</td>
                                <td className="Quantity">
                                    <span>{cart.quantity}{cart.quantity === 1 ? " pc." : " pcs."}</span> 
                                    <button onClick={() => changeQuantityHandler(cart.id, 1)}>+</button>
                                    <button onClick={() => changeQuantityHandler(cart.id, -1)}>-</button> 
                                </td>
                                {/* <td><input type="number" min="1" onKeyUp={(e) => changeQuantityHandler(cart.id, e)} /></td> */}
                                <td><button onClick={() => cartItemToBe({type: 'DELETE_CART_ITEM', payload: cart.id})}>Remove</button></td>
                            </tr>
                        )} )}
                    </tbody>
                </table>
                <h3>Total: Php {totalPrice} <button onClick={() => alert("soon to come")}>Checkout</button></h3>
            </>}
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