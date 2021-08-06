import React, {Component, useState} from 'react';

const AddItem = (props) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

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
        let stringCheckerName = name.trim();
        let stringCheckerImage = image.trim();
        if (stringCheckerName === "" || price === "" || category === ""|| stringCheckerImage === "") {
            alert("Incomplete Details")
        } else {
            props.onClickAddItem(name, price, category, image);
            onClickToggleVisibility();
            setName("");
            setPrice("");
            setCategory("");
            setImage("");
            /* this.setState({name: "", price: "", category: "", image: ""}) */
        }
    }

    const onClickCancelRegister = () => {
        setName("");
        setPrice("");
        setCategory("");
        setImage("");
        /* this.setState({name: "", price: "", category: "", image: ""}) */
        onClickToggleVisibility()
    }

    const onClickToggleVisibility = () => {
        let e = document.querySelector(".AddItemForm");
        /* let f = document.querySelector(".AddItem"); */
        
        if(e.style.display == 'block') {
            e.style.display = 'none';
        } else {
            e.style.display = 'block';
        };

        /* if(f.style.display == 'block') {
            f.style.display = 'none';
        } else {
            f.style.display = 'block';
        }
        console.log(f.style.display) */        
    }

    return(
        <div>
            {name}
            {price}
            {category}
            {image}
            <div className="AddItemForm">
                <h2>ADD ITEM</h2>
                <div>
                    <strong>Name: </strong> <input type="text" onChange={e => onChangeName(e)} value={name}></input>
                </div>
                <div>
                    <strong>Price: </strong> <input type="number" onChange={e => onChangePrice(e) } value={price}></input>
                </div>
                <div>
                    <strong>Category: </strong> 
                    <select onChange={e => onChangeCategory(e)} value={category} >
                        <option disable selected hidden>Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Drink">Drink</option>
                        <option value="Desert">Dessert</option>
                        
                        
                    </select>
                </div>
                <div>
                    <strong>Image URL: </strong> <input type="text" onChange={e => onChangeImage(e)} value={image}></input>
                </div>
                <button onClick={onClickSaveItem}>Save</button>
                <button onClick={onClickCancelRegister}>Cancel</button>
            </div>
            <button className="AddItem" onClick={onClickToggleVisibility}>Add Item</button>   
        </div>
        
    )


}

// class AddItem extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {name: "", price: "", category: "", image: ""};
//         this.onClickToggleVisibility = this.onClickToggleVisibility.bind(this);
//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangePrice = this.onChangePrice.bind(this);
//         this.onChangeCategory = this.onChangeCategory.bind(this);
//         this.onChangeImage = this.onChangeImage.bind(this);
//         this.onClickSaveItem = this.onClickSaveItem.bind(this);
//         this.onClickCancelRegister = this.onClickCancelRegister.bind(this);
//     }

//     onChangeName(e) {
//         this.setState({name: e.target.value })
//         console.log(this.state)
//     }

//     onChangePrice(e) {
//         this.setState({price: e.target.value})
//         console.log(this.state)
//     }

//     onChangeCategory(e) {
//         this.setState({category: e.target.value})
//         console.log(this.state)
//     }

//     onChangeImage(e) {
//         this.setState({image: e.target.value})
//         console.log(this.state)
//     }

    

//     onClickSaveItem() {
//         let stringCheckerName = this.state.name.trim();
//         let stringCheckerImage = this.state.image.trim();
//         if (stringCheckerName === "" || this.state.price === "" || this.state.category === ""|| stringCheckerImage === "") {
//             alert("Incomplete Details")
//         } else {
//             this.props.onClickAddItem(this.state.name, this.state.price, this.state.category, this.state.image)
//             this.onClickToggleVisibility()
//             this.setState({name: "", price: "", category: "", image: ""})
//         }
//     }

//     onClickCancelRegister(){
//         this.setState({name: "", price: "", category: "", image: ""})
//         this.onClickToggleVisibility()
//     }

//     onClickToggleVisibility() {
//         let e = document.querySelector(".AddItemForm");
//         /* let f = document.querySelector(".AddItem"); */
        
//         if(e.style.display == 'block') {
//             e.style.display = 'none';
//         } else {
//             e.style.display = 'block';
//         };

//         /* if(f.style.display == 'block') {
//             f.style.display = 'none';
//         } else {
//             f.style.display = 'block';
//         }
//         console.log(f.style.display) */


          
//     }


//     render(){
//         return(
//             <div>
//                 {this.state.name}
//                 {this.state.price}
//                 {this.state.category}
//                 {this.state.image}
//                 <div className="AddItemForm">
//                     <h2>ADD ITEM</h2>
//                     <div>
//                         <strong>Name: </strong> <input type="text" onChange={e => this.onChangeName(e)} value={this.state.name}></input>
//                     </div>
//                     <div>
//                         <strong>Price: </strong> <input type="number" onChange={e => this.onChangePrice(e) } value={this.state.price}></input>
//                     </div>
//                     <div>
//                         <strong>Category: </strong> 
//                         <select onChange={e => this.onChangeCategory(e)} value={this.state.category} >
//                             <option disable selected hidden>Select Category</option>
//                             <option value="Food">Food</option>
//                             <option value="Drink">Drink</option>
//                             <option value="Desert">Dessert</option>
                            
                            
//                         </select>
//                     </div>
//                     <div>
//                         <strong>Image URL: </strong> <input type="text" onChange={e => this.onChangeImage(e)} value={this.state.image}></input>
//                     </div>
//                     <button onClick={this.onClickSaveItem}>Save</button>
//                     <button onClick={this.onClickCancelRegister}>Cancel</button>
//                 </div>
//                 <button className="AddItem" onClick={this.onClickToggleVisibility}>Add Item</button>   
//             </div>
            
//         )
//     }

// }
export default AddItem;