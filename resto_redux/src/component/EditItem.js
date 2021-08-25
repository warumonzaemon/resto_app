import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

const EditItem = (props) => {
    const itemId = useSelector(state => state.itemToModify)
    const edit = useDispatch()

    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editCategory, setEditCategory] = useState("");
    const [editImage, setEditImage] = useState("");

    const onChangeEditName = (e) => {
        setEditName(e.target.value)
        /* this.setState({name: e.target.value }) */
    }

    const onChangeEditPrice = (e) => {
        setEditPrice(e.target.value)
        /* this.setState({price: e.target.value}) */
    }

    const onChangeEditCategory = (e) => {
        setEditCategory(e.target.value)
        /* this.setState({category: e.target.value}) */
    }

    const onChangeEditImage = (e) => {
        setEditImage(e.target.value)
        /* this.setState({image: e.target.value}) */
    }    

    const onClickToggleEditVisibility = () => {
        let e = document.querySelector(".EditItemForm");

            if(e.style.display === 'block') {
                e.style.display = 'none';
            } else {
                e.style.display = 'block';
            }; 
    }

    const onClickSaveEditItem = () => {
        let stringCheckerEditName = editName.trim();
        let stringCheckerEditImage = editImage.trim();
        if (stringCheckerEditName === "" || 
            editPrice === "" ||
            editPrice <= 0 || 
            editCategory === ""|| 
            stringCheckerEditImage === "") {
            alert("Incomplete Details")
        } else {
            let modifiedItem = {id: itemId, name: editName, price: editPrice, category: editCategory, image: editImage}
            edit({type: 'MODIFY_ITEM', payload: modifiedItem})
            onClickToggleEditVisibility();
            setEditName("");
            setEditPrice("");
            setEditCategory("");
            setEditImage("");
        }
    }

    const onClickCancelEditRegister = () => {
        setEditName("");
        setEditPrice("");
        setEditCategory("");
        setEditImage("");
        onClickToggleEditVisibility()
    }

    return(
        <>
            {/* <div>
                <h2>EDIT ITEM</h2>
                <div>
                    <strong>Name: </strong> <input type="text" onChange={e => onChangeEditName(e)} value={editName}></input>
                </div>
                <div>
                    <strong>Price: </strong> <input type="number" min="0" onChange={e => onChangeEditPrice(e) } value={editPrice}></input>
                </div>
                <div>
                    <strong>Category: </strong> 
                    <select onChange={e => onChangeEditCategory(e)} value={editCategory} >
                        <option disable selected hidden>Select Category</option>
                        <option value="Foods">Food</option>
                        <option value="Drinks">Drink</option>
                        <option value="Deserts">Dessert</option>
                        <option value="Combo Meals">Combo Meals</option>
                        
                        
                    </select>
                </div>
                <div>
                    <strong>Image URL: </strong> <input type="text" onChange={e => onChangeEditImage(e)} value={editImage}></input>
                </div>
                <button onClick={onClickSaveEditItem}>Save</button>
                <button onClick={onClickCancelEditRegister}>Cancel</button> 
            </div> */}
            <div className="EditItemForm">
                <h2>EDIT ITEM</h2>
                <div className="FormInputs">
                    <div className="Inputs">
                        <strong>Name: </strong> 
                        <input type="text" onChange={e => onChangeEditName(e)} value={editName}></input>
                    </div>
                    <div className="Inputs">
                        <strong>Price: </strong> 
                        <input type="number" min="0" onChange={e => onChangeEditPrice(e) } value={editPrice}></input>
                    </div>
                    <div className="Inputs">
                        <strong>Category: </strong> 
                        <select onChange={e => onChangeEditCategory(e)} value={editCategory} >
                            <option disable selected hidden>Select Category</option>
                            <option value="Foods">Food</option>
                            <option value="Drinks">Drink</option>
                            <option value="Deserts">Dessert</option>
                            <option value="Combo Meals">Combo Meals</option>
                        </select>
                    </div>
                    <div className="Inputs">
                        <strong>Image URL: </strong> 
                        <input type="text" onChange={e => onChangeEditImage(e)} value={editImage}></input>
                    </div>
                </div>
                <button onClick={onClickSaveEditItem}>Save</button>
                <button onClick={onClickCancelEditRegister}>Cancel</button> 
            </div>
        </>
    )
}

export default EditItem;