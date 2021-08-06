import React, {useState} from "react";

const EditItem = (props) => {
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

    const onClickSaveEditItem = () => {
        let stringCheckerEditName = editName.trim();
        let stringCheckerEditImage = editImage.trim();
        if (stringCheckerEditName === "" || editPrice === "" || editCategory === ""|| stringCheckerEditImage === "") {
            alert("Incomplete Details")
        } else {
            props.onClickEditItem(editName, editPrice, editCategory, editImage);
            props.onClickToggleEditVisibility();
            setEditName("");
            setEditPrice("");
            setEditCategory("");
            setEditImage("");
            /* this.setState({name: "", price: "", category: "", image: ""}) */
        }
    }

    const onClickCancelEditRegister = () => {
        setEditName("");
        setEditPrice("");
        setEditCategory("");
        setEditImage("");
        /* this.setState({name: "", price: "", category: "", image: ""}) */
        props.onClickToggleEditVisibility()
    }

    return(
        <>
            <div>
                {editName}
                {editPrice}
                {editCategory}
                {editImage}
                <h2>EDIT ITEM</h2>
                <div>
                    <strong>Name: </strong> <input type="text" onChange={e => onChangeEditName(e)} value={editName}></input>
                </div>
                <div>
                    <strong>Price: </strong> <input type="number" onChange={e => onChangeEditPrice(e) } value={editPrice}></input>
                </div>
                <div>
                    <strong>Category: </strong> 
                    <select onChange={e => onChangeEditCategory(e)} value={editCategory} >
                        <option disable selected hidden>Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Drink">Drink</option>
                        <option value="Desert">Dessert</option>
                        
                        
                    </select>
                </div>
                <div>
                    <strong>Image URL: </strong> <input type="text" onChange={e => onChangeEditImage(e)} value={editImage}></input>
                </div>
                <button onClick={onClickSaveEditItem}>Save</button>
                <button onClick={onClickCancelEditRegister}>Cancel</button> 
            </div>
        </>
    )
}

export default EditItem;