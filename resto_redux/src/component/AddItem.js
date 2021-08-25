import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const AddItem = () => {
    const items = useSelector(state => state.items);
    const addTheItem = useDispatch();
    const [addedName, setName] = useState("");
    const [addedPrice, setPrice] = useState("");
    const [selectedCategory, setCategory] = useState("");
    const [addedImage, setImage] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value)
        /* this.setState({name: e.target.value }) */
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value)
        /* this.setState({price: e.target.value}) */
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
        /* this.setState({category: e.target.value}) */
    }

    const onChangeImage = (e) => {
        setImage(e.target.value)
        /* this.setState({image: e.target.value}) */
    }    

    const onClickSaveItem = () => {
        let stringCheckerName = addedName.trim();
        let stringCheckerImage = addedImage.trim();
        let included = false;

        items.map( data => {
            if(data.name.toLowerCase() === addedName.toLowerCase() ){ included = true } return data;
          });

        console.log(included);
        if (stringCheckerName === "" || 
            addedPrice === "" || 
            addedPrice <= 0 || 
            selectedCategory === ""|| 
            stringCheckerImage === "") {
            alert("Incomplete Details")
        } else if (included) {
            alert("Duplicate Item!")
        } else {
            let addedItem = {id: uuidv4(), name: addedName, price: addedPrice, category: selectedCategory, image: addedImage};
            addTheItem( {type: 'ADD_NEW_ITEM', payload: addedItem})
            setName("");
            setPrice("");
            setCategory("");
            setImage("");

        }
    }

    const onClickCancelRegister = () => {
        setName("");
        setPrice("");
        setCategory("");
        setImage("");

        onClickToggleVisibility()
    }

    const onClickToggleVisibility = () => {        
        let e = document.querySelector(".AddItemForm");
   
        if(e.style.display === 'block') {
            e.style.display = 'none';
        } else {
            e.style.display = 'block';
        };       
         
    }

    return(
        <div>
            <div className="AddItemForm">
                <h2>ADD ITEM</h2>
                <div className="FormInputs">
                    <div className="Inputs">
                        <strong>Name: </strong>
                        <input type="text" onChange={e => onChangeName(e)} value={addedName}></input>
                    </div>
                    <div className="Inputs">
                        <strong>Price: </strong>
                        <input type="number" min="0" onChange={e => onChangePrice(e) } value={addedPrice}></input>
                    </div>
                    <div className="Inputs">
                        <strong>Category: </strong>
                        <select className="AddSelect" onChange={e => onChangeCategory(e)} value={selectedCategory} >
                            <option disable selected hidden>Select Category</option>
                            <option value="Foods">Food</option>
                            <option value="Drinks">Drink</option>
                            <option value="Deserts">Dessert</option>
                            <option value="Combo Meals">Combo Meals</option>
                        </select>
                    </div>
                    <div className="Inputs">
                        <strong>Image URL: </strong>
                        <input type="text" onChange={e => onChangeImage(e)} value={addedImage}></input> 
                    </div>
                </div>
                <button onClick={onClickSaveItem}>Save</button>
                <button onClick={onClickCancelRegister}>Cancel</button>
            </div> 
        </div>       
    )
}

export default AddItem;