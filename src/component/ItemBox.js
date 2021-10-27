import React, {useState} from 'react';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';


const ItemBox = () => {
    const items = useSelector(state => state.filteredItems)
    const cart = useSelector(state => state.cart)

    const itemToBe = useDispatch()

    const onClickOrderItem = (e) => {
        setItemSelected(e)

        let included = false;

        cart.map( data => {
            if(data.id === e ){ included = true } return data;
          });

        console.log(included);
        if (included) {
            alert("Duplicate Item!")
        } else {
            itemToBe( {type: 'ADD_TO_CART', payload: e})
        }
    }

    const [itemSelected, setItemSelected] = useState();

    return(
        <>
            
            {items.map(data => 
            {return(
                <div className="Container" key={data.id}>
                    <div className="ImageFrame">
                        <img  src={data.image} alt={data.image}/>
                    </div>
                    <div className="Details">
                        <div>
                            <strong>{data.name}</strong>
                            <p><small>Php {data.price}</small></p>
                        </div>
                        <p><button onClick={() => onClickOrderItem(data.id)}>Order</button></p>
                        <p><button onClick={() => itemToBe({type: 'ITEM_TO_MODIFY', payload: data.id })}>Edit</button></p>
                        <p><button onClick={() => itemToBe({type: 'DELETE_ITEM', payload: data.id})}>Delete</button></p>
                    </div>
                </div>)})}
        </> 
    )
}
export default ItemBox;