import React, { Component, useState } from 'react';
import './App.css';
import ItemBox from './component/ItemBox';
import ItemFilter from './component/ItemFilter';
import AddItem from './component/AddItem';
import AddToCart from './component/AddToCart';
import EditItem from './component/EditItem';

const App =() => {
  const [items, setItems] = useState([
    {
      name: "Burger",
      price: 50,
      category: "Food",
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
    },
    {
      name: "Pizza",
      price: 100,
      category: "Food",
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
    },
    {
      name: "Fries",
      price: 25,
      category: "Food",
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
    },
    {
      name: "Coffee",
      price: 35,
      category: "Drink",
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
    },
    {
      name: "Iced Tea",
      price: 45,
      category: "Drink",
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
    },
    {
      name: "Hot Tea",
      price: 45,
      category: "Drink",
      description: "",
      image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
    }]);

    const [filterByCategory, setfilterByCategory] = useState("");

    const [addedItem, setAddedItem] = useState([]);

    const editThisItem = (itemName) => {
      let indexEditItem = items.findIndex(item => item.name === itemName);
      setEditItemIndex(indexEditItem)
    }

    const [editItemIndex, setEditItemIndex] = useState();

    const onClickEditItem = (editedName, editedPrice, editedCategory, editedImage) => {
      let itemEdited = {name: editedName, price: editedPrice, category: editedCategory, image: editedImage}
      let currentEditItemList = [...items];
      currentEditItemList.splice(editItemIndex,1);
      currentEditItemList.push(itemEdited);
      setEditItem(itemEdited);
      setItems(currentEditItemList)
    }

    const [editItem, setEditItem] = useState()

    const onClickDisplayItemByCategory = (category) => {
      setfilterByCategory(category);
    }

    const removeItem = (itemName) => {
      let currentItemList = [...items];
      let index = currentItemList.findIndex(item => item.name === itemName);
      currentItemList.splice(index,1);        
      setItems(currentItemList);
    }

    const onClickAddItem = (newName, newPrice, newCategory, newImage) => {
      let itemAdded = {name: newName, price: newPrice, category: newCategory, image: newImage};
      console.log(itemAdded)
      setItems([...items, itemAdded])
      console.log(items);
      
    }

    const addToCart = (itemName, itemPrice) => {
      let currentCartItems = [...addedItem];
      let initialQuantity = 1;
      let duplicate = currentCartItems.find(item => item.name === itemName)
      if (duplicate) {
        duplicate.quantity ++;
        let index = currentCartItems.findIndex(item => item.name === itemName);
        currentCartItems.splice (index,1);
        currentCartItems.push(duplicate)
        setAddedItem(currentCartItems)
      } else {
        let itemToTray = {name: itemName, price: itemPrice, quantity: initialQuantity};
        setAddedItem([...addedItem, itemToTray])
      }
      console.log(addedItem)
    }

    // let indexOfItemBeingEdited;
    // const editThisItem = (itemName) => {
    //   let indexOfItemBeingEdited =items.findIndex(item => item.name === itemName);
    //   console.log (indexOfItemBeingEdited)
    // }

    // const onClickEditItem = (editedName, editedPrice, editedCategory, editedImage) => {
    //   let itemEdited = {name: editedName, price: editedPrice, category: editedCategory, image: editedImage}
    //   setEditItem(itemEdited);
    //   console.log(editItem)
    //   /* saveEditItem(editedName); */

    // }

    // const saveEditItem = (itemName) => {
    //   let currentItemList = [...items];
    //   console.log(itemName)
    //   let index = currentItemList.findIndex(item => item.name === itemName);
    //   currentItemList.splice(index,1);
    //   console.log(editItem)
    //   currentItemList.push(editItem);
    //   setItems(currentItemList)
    //   console.log(currentItemList);
    // }

    

    









    const onClickToggleEditVisibility = () => {
      let e = document.querySelector(".EditItemForm");
      
      if(e.style.display == 'block') {
          e.style.display = 'none';
      } else {
          e.style.display = 'block';
      };        
  }

    let categoryOnly = ["All"];
    let filteredItemsByCategory = 
      filterByCategory === "All"
      ? items
        : items.filter(
        (data) => data.category.indexOf(filterByCategory) >= 0
        );

    items.map((items) => items.category)
    .forEach((item) => {
            if (categoryOnly.indexOf(item) === -1) {
                categoryOnly.push(item);
            } 
    });

    let totalPrice = addedItem.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);

    return (
      <div className="App">
        <h1>Restaurant App</h1>
        <p>{addedItem.name} {addedItem.price}</p>
        <div>
          <div>
            <div>  
              <div className="EditItemForm">
                <EditItem onClickToggleEditVisibility={onClickToggleEditVisibility} onClickEditItem={onClickEditItem} /* saveEditItem={saveEditItem} *//>
              </div>
               
              {<AddItem categories={categoryOnly} onClickAddItem={onClickAddItem}/> }                  
              <ItemFilter categories={categoryOnly} onClickDisplayItemByCategory={onClickDisplayItemByCategory}/>
            </div>
            <div className="ItemBoxContainer">
              {filteredItemsByCategory.map( data => <ItemBox key={data.image} img={data.image} 
              name={data.name} price={data.price} category={data.category} removeItem={removeItem} 
              addToCart={addToCart} onClickToggleEditVisibility={onClickToggleEditVisibility} editThisItem={editThisItem}/>)}
            </div>
          </div>
          <div>
              <h2>Tray</h2>
              <table>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                      {addedItem.map(data => <AddToCart itemAddedName={data.name} itemAddedPrice={data.price} quantity={data.quantity}/>)}
                  </tbody>
                  <p>total {totalPrice}</p>
              </table>
          </div>
        </div>
        
      
      </div>
    );


}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {items : [
//       {
//         name: "Burger",
//         price: 50,
//         category: "Food",
//         description: "",
//         image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
//       },
//       {
//         name: "Pizza",
//         price: 100,
//         category: "Food",
//         description: "",
//         image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
//       },
//       {
//         name: "Fries",
//         price: 25,
//         category: "Food",
//         description: "",
//         image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
//       },
//       {
//         name: "Coffee",
//         price: 35,
//         category: "Drink",
//         description: "",
//         image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
//       },
//       {
//         name: "Iced Tea",
//         price: 45,
//         category: "Drink",
//         description: "",
//         image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
//       },
//       {
//         name: "Hot Tea",
//         price: 45,
//         category: "Drink",
//         description: "",
//         image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
//       }],
//     filterByCategory: "",
//     addedItem: [],
//   }

//     this.onClickDisplayItemByCategory = this.onClickDisplayItemByCategory.bind(this);
//     this.onClickAddItem = this.onClickAddItem.bind(this);
//     this.removeItem = this.removeItem.bind(this);
//   };

//   onClickDisplayItemByCategory(category) {
//     this.setState({filterByCategory: category });
//   }

//   removeItem(itemName) {
//     let currentItemList = [...this.state.items];
//     let index = currentItemList.findIndex(item => item.name === itemName);
//     currentItemList.splice(index,1);        
//     this.setState({items : currentItemList});
//   }

//   onClickAddItem(newName, newPrice, newCategory, newImage) {
//     let itemAdded = {name: newName, price: newPrice, category: newCategory, image: newImage};
//     this.setState({items : [...this.state.items, itemAdded]})
//     console.log(this.state);
//   }

  

//   addToCart(itemName, itemPrice){
    
//     console.log(itemName, itemPrice)
//     /* let cartItem = {name: itemName, price: itemPrice};
//     this.setState({addedItem: [...this.state.addedItem, cartItem]});
//     console.log(this.state.addedItem) */
//   }

//   render(){
//     let categoryOnly = ["All"];
//     let filteredItemsByCategory = 
//       this.state.filterByCategory === "All"
//       ? this.state.items
//         : this.state.items.filter(
//         (data) => data.category.indexOf(this.state.filterByCategory) >= 0
//         );

//     this.state.items.map((items) => items.category)
//     .forEach((item) => {
//             if (categoryOnly.indexOf(item) === -1) {
//                 categoryOnly.push(item);
//             } 
//     });


    
    
//     return (
//       <div className="App">
//         <h1>Restaurant App</h1>
//         <p>{this.state.addedItem.name} {this.state.addedItem.price}</p>
//         <div>
//           <div>
//             <div>  
//               {<AddItem categories={categoryOnly} onClickAddItem={this.onClickAddItem}/> }      
//               <ItemFilter categories={categoryOnly} onClickDisplayItemByCategory={this.onClickDisplayItemByCategory}/>
//             </div>
//             <div className="ItemBoxContainer">
//               {filteredItemsByCategory.map( data => <ItemBox key={data.image} img={data.image} name={data.name} price={data.price} category={data.category} removeItem={this.removeItem} addToCart={this.addToCart}/>)}
//             </div>
//           </div>
//           {/* <div>
//               <table>
//                   <thead>
//                     <tr>
//                       <th>Item</th>
//                       <th>Price</th>
//                       <th>Quantity</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                       {this.state.addedItem.map(data => <AddToCart itemAddedName={data.name} itemAddedPrice={data.price} setItemPriceTotal={this.setItemPriceTotal} />)}
//                   </tbody>
//               </table>
              
//           </div> */}
//         </div>
        
      
//       </div>
//     );  
//   }
  
// }

export default App;
